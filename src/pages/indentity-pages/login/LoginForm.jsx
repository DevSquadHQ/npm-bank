import { Button, Form, Input } from "antd";
import "../../../layouts/identity-layout/identity-layout.css";
import { validateMessages } from "../../../utils/validationUtils";

export default function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success", values);
  };

  return (
    <Form
      form={form}
      noValidate // turn-off the browser default validation warn
      // autoComplete="off"
      action=""
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
        label="ایمیل"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          className="inputStyle"
        />
      </Form.Item>
      <Form.Item
        label="رمز عبور"
        name="password"
        rules={[{ required: true }, { min: 8 }]}
      >
        <Input.Password
          placeholder="لطفا رمز عبور خود را وارد کنید"
          className="inputStyle"
          autoComplete="new-password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", marginTop: "32px" }}
        >
          ورود به حساب
        </Button>
      </Form.Item>
      <span className="auth-form-footer">
        عضو نیستید ؟ <a href="/">ایجاد حساب </a>
      </span>
    </Form>
  );
}
