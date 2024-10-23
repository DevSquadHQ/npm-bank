import { Button, Form, Input } from "antd";
import { validateIranianNationalCode } from "../../../utils/indentityUtils";

export const inputStyle = {
  padding: "10px 15px", 
  boxShadow: "none",
  // border: "none",
};

export default function FirstForm({ onFinish }) {
  const [form] = Form.useForm();

  return (
    <Form
      action=""
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      // autoComplete="off"
      onFinish={onFinish}
      noValidate
      requiredMark={false}
      form={form}
    >
      <Form.Item
        label="نام"
        name="username"
        rules={[
          {
            required: true,
            message: "لطفا نام خود را وارد کنید",
          },
          {
            pattern: /^[\u0600-\u06FF\s]+$/,
            message: "لطفا فقط از حروف فارسی استفاده کنید",
          },
        ]}
      >
        <Input placeholder="لطفا نام خود را وارد کنید" style={inputStyle} />
      </Form.Item>

      <Form.Item
        label="نام خانوادگی"
        name="lastName"
        rules={[
          {
            required: true,
            message: "لطفا نام خانوادگی خود را وارد کنید",
          },
          {
            pattern: /^[\u0600-\u06FF\s]+$/,
            message: "لطفا فقط از حروف فارسی استفاده کنید",
          },
        ]}
      >
        <Input
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          style={inputStyle}
        />
      </Form.Item>

      <Form.Item
        label="کد ملی"
        name="nationalCode"
        rules={[
          {
            required: true,
            message: "لطفا کد ملی خود را وارد کنید",
          },
          {
            validator: (_, value) => {
              if (!value) {
                // If the field is empty, skip custom validation (required rule will handle this)
                return Promise.resolve();
              }
              const validationResult = validateIranianNationalCode(value);
              if (validationResult === true) {
                return Promise.resolve(); // Validation passed
              }
              return Promise.reject(new Error(validationResult)); // Custom error message if validation fails
            },
          },
        ]}
      >
        <Input placeholder="لطفا کد ملی خود را وارد کنید" style={inputStyle} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", marginTop: "32px" }}
        >
          ادامه
        </Button>
      </Form.Item>
      <span className="text-[#6B7280] block">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="text-button" style={{ marginRight: "4px" }}>
          ورود به حساب
        </a>
      </span>
    </Form>
  );
}
