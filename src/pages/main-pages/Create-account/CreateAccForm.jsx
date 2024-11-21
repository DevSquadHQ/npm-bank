import React from "react";
import { Button, Form, Select } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import { useNavigate } from "react-router-dom";
import CustomInputNumber from "../../../components/custom-inputNumber/CustomInputNumber";
import BankSelector from "../../../components/bank-selector/BankSelector";

export default function CreateAccForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  //log and navigate
  const onFinish = (values) => {
    console.log("Success", values);
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

      <CustomInputNumber form={form} name="Amount" />

      <BankSelector />

      <Form.Item label>
        <Button type="primary" htmlType="submit" block>
          افتتاح حساب
        </Button>
      </Form.Item>
    </Form>
  );
}
