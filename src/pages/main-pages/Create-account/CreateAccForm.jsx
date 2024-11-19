import React, { useState } from "react";
import { Button, Form, Image, InputNumber, Select } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import { useNavigate } from "react-router-dom";
import { CloseCircleFilled } from "@ant-design/icons";
import "./custom-input-number.css";
import { banks } from "../../../utils/banksInfoUtils";
import Num2persian from "num2persian";

export default function CreateAccForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [toTooman, setToTooman] = useState(null); // State for Tooman text

  // reapeat once
  const uniqueBanks = banks.filter(
    (bank, index, self) =>
      index === self.findIndex((b) => b.bank_name === bank.bank_name)
  );

  // Handle amount change and update converted amount
  const handleAmountChange = (value) => {

    form.setFieldsValue({ Amount: value }); // Update form value

    const amountInToomans = value ? Math.floor(value / 10) : null; // Divide by 10 to get Tomans
    setToTooman(amountInToomans ? Num2persian(amountInToomans) : null); // Convert to Persian text
  };

  
  // Clear the InputNumber value and tooman label
  const handleClear = () => {
    form.resetFields(["Amount"]); 
    setToTooman(undefined); 
  };


  //log and navigate
  const onFinish = (values) => {
    console.log("Success", values);
    // onFormSubmit(values); // Pass form values to parent component
    navigate("/accountInfo", { state: values });
  };

  return (
    <Form
      form={form}
      noValidate // turn-off the browser default validation warn
      // autoComplete="off"
      onFinish={onFinish}
      requiredMark={false}
      validateMessages={validateMessages}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
    >
      <Form.Item
        label="نوع حساب"
        name="Account-Type"
        rules={[{ required: true }]}
      >
        <Select
          allowClear
          placeholder="انتخاب کنید"
          options={[
            { value: "1", label: <span>جاری</span> },
            { value: "2", label: <span>قرض‌الحسنه</span> },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="مبلغ"
        name="Amount"
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
           {form.getFieldValue("Amount") && (
            <CloseCircleFilled className="clear-icon" onClick={handleClear} />
          )}
        </div>
      </Form.Item>

      <div className={`toomanLabel ${toTooman ? "show" : ""}`}>
        {toTooman && `(${toTooman} تومان)`}
      </div>

      <Form.Item label="نام بانک" name="Bank-Name" rules={[{ required: true }]}>
        <Select
          allowClear
          placeholder="بانک خود را انتخاب کنید"
          showSearch
          mode="single"
          options={uniqueBanks.map((bank) => ({
            value: bank.bank_name, // Value is bank_name
            label: (
              <span>
                <img
                  src={bank.bank_logo} // Dynamically load SVG from bank_logo
                  alt={bank.bank_name}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 8,
                    verticalAlign: "middle",
                  }}
                />
                {bank.bank_title}
              </span>
            ),
            // searchText: bank.bank_title, // A field used for search matching
          }))}
          filterOption={
            (input, option) => option?.label.props.children[1]?.includes(input) // Matches directly without case conversion
          }
        />
      </Form.Item>

      <Form.Item label>
        <Button type="primary" htmlType="submit" block>
          افتتاح حساب
        </Button>
      </Form.Item>
    </Form>
  );
}
