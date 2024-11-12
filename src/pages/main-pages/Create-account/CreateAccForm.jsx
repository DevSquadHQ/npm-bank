import React, { useState } from "react";
import { Button, Form, InputNumber, Select } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import { useNavigate } from "react-router-dom";
import Num2persian from "num2persian";
import { BASE_URL } from "../../../core/http-service";

export default function CreateAccForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [toTooman, setToTooman] = useState(null); // State for Persian text

  // Handle amount change and update converted amount
  const handleAmountChange = (value) => {
    const amountInToomans = value ? Math.floor(value / 10) : null; // Divide by 10 to get Tomans
    setToTooman(amountInToomans ? Num2persian(amountInToomans) : null); // Convert to Persian text
  };

  const onFinish = async (values) => {
    // console.log("Success", values);
    // onFormSubmit(values); // Pass form values to parent component

    const response = await fetch(`${BASE_URL}/Account/register`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const responseJson = await response.json();
    console.log(responseJson);
    // navigate("/accountInfo", { state: values });
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
          className="selectStyle"
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
      </Form.Item>

      <div className="toomanLabel">
        {toTooman ? `( ${toTooman} تومان )` : <span>&nbsp;</span>}
      </div>

      <Form.Item label>
        <Button type="primary" htmlType="submit" block>
          افتتاح حساب
        </Button>
      </Form.Item>
    </Form>
  );
}
