import { Button, Form, Input } from "antd";

import { inputStyle } from "../signup/FirstForm";

export default function LoginForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      autoComplete="off"
      action=""
      onSubmit={onSubmit}
    >
      <Form.Item label="پست الکترونیک" name="email">
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          style={inputStyle}
          type="email"
        />
      </Form.Item>
      <Form.Item label="رمز عبور" name="password">
        <Input
          placeholder="لطفا رمز عبور خود را وارد کنید"
          style={inputStyle}
          type="password"
          autoComplete="new-password"
        />
      </Form.Item>
      <span className="text-[#6B7280] block">
        عضو نیستید ؟{" "}
        <a href="/" className="text-button">
          ایجاد حساب{" "}
        </a>
      </span>
    </Form>
  );
}
