import React from "react";
import { Button, Form, InputNumber, Select } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import { useNavigate } from "react-router-dom";

export default function CreateAccForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

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
          // addonAfter="تومان"
          min={10000}
          // defaultValue={10000}
          step={5000}
          formatter={(value) =>
            value ? `${value} تومان`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
          }
          // parser={(value) => value?.replace(/\s?تومان|,/g, '')}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", marginTop: "16px" }}
        >
          افتتاح حساب
        </Button>
      </Form.Item>
    </Form>
  );
}
