import React, { useState } from "react";
import { Form, InputNumber } from "antd";
import { validateMessages } from "../../utils/validationUtils";
import { CloseCircleFilled } from "@ant-design/icons";
import Num2persian from "num2persian";
import "./custom-input-number.css";

export default function CustomInputNumber(props) {
    
  const { form, name, amountMenu = false } = props;

  const [toTooman, setToTooman] = useState(null); // State for Tooman text

  // Handle amount change and update converted amount
  const handleAmountChange = (value) => {
    form.setFieldsValue({ [name]: value }); // Update form value

    const amountInToomans = value ? Math.floor(value / 10) : null; // Divide by 10 to get Tomans
    setToTooman(amountInToomans ? Num2persian(amountInToomans) : null); // Convert to Persian text
  };

  // Clear the InputNumber value and tooman label
  const handleClear = () => {
    form.resetFields([name]);
    setToTooman(undefined);
  };

  return (
    <>
      <Form.Item
        label="مبلغ"
        name={name}
        rules={[{ required: true }]}
        tooltip="حداقل ۱۰ هزار تومان"
      >
        <div className="input-wrapper">
          <InputNumber
            style={{ width: "100%" }}
            placeholder="مبلغ مورد نیاز را وارد کنید"
            addonAfter="ریال"
            min={100000}
            // defaultValue={100000}
            onChange={handleAmountChange}
            step={5000}
            formatter={(value) =>
              value ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
            }
          />

          <CloseCircleFilled className="clear-icon" onClick={handleClear} />

        </div>
      </Form.Item>

      <div className={`toomanLabel ${toTooman ? "show" : ""}`}>
        {toTooman && `( ${toTooman} تومان )`}
      </div>

    </>
  );
}
