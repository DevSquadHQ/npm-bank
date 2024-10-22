import { Button, Form, Input } from "antd";
import { inputStyle } from "./FirstForm";

export default function SecondForm(props) {
  const { onSubmit } = props;

  return (
    <Form
      action=""
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      autoComplete="off"
    >
      <Form.Item label="تاریخ" name="date">
        <Input
          placeholder="لطفا یک تاریخ را وارد کنید"
          style={inputStyle}
          type="date"
          autoComplete="new-password"
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

      <Form.Item label="شماره تلفن" name="phoneNumber">
        <Input
          placeholder="لطفا شماره تلفن خود را وارد کنید"
          style={inputStyle}
          type="tel"
        />
      </Form.Item>

      <Form.Item label="ایمیل" name="email">
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          type="email"
          style={inputStyle}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          ادامه
        </Button>
      </Form.Item>
      {/* <Button label="ادامه"/> */}
      <span className="text-[#6B7280] block">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="text-button">
          ورود به حساب
        </a>
      </span>
    </Form>
  );
}
