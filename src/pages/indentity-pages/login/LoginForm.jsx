import { Button, Form, Input } from "antd";

import { inputStyle } from "../signup/FirstForm";

export default function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success", values);
  };

  return (
    <Form
    form={form}
    noValidate // turn-off the browser default validation warn
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      // autoComplete="off"
      action=""
      // onSubmit={onSubmit}
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label="پست الکترونیک"
        name="email"
        rules={[
          {
            required: true,
            message: "لطفا ایمیل خود را وارد کنید",
          },
          {
            type:'email',
            message:'لطفا یک ایمیل معتبر وارد کنید'
          }
        ]}
      >
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          style={inputStyle}
        />
      </Form.Item>
      <Form.Item
        label="رمز عبور"
        name="password"
        rules={[
          {
            required: true,
            message: "لطفا رمز عبور خود را وارد کنید",
          },
          {
            min:8,
            message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
        ]}
      >
        <Input.Password
          placeholder="لطفا رمز عبور خود را وارد کنید"
          style={inputStyle}
          autoComplete="new-password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%",marginTop:"32px"}}>
          ورود به حساب
        </Button>
      </Form.Item>
      <span className="text-[#6B7280] block">
        عضو نیستید ؟{" "}
        <a href="/" className="text-button" style={{marginRight:"4px"}}>
          ایجاد حساب{" "}
        </a>
      </span>
    </Form>
  );
}