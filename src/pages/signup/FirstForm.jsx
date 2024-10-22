import { InputGroup } from "@/components/input-group";
// import { Button } from "@/components/button";
import { Button, Form, Input } from "antd";

export default function FirstForm() {
  const inputStyle = {
    padding: "10px 15px", // Custom padding
    boxShadow: "none",
    border: "none",
  };

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
      <Form.Item label="نام" name="username">
        <Input placeholder="لطفا نام خود را وارد کنید" style={inputStyle} />
      </Form.Item>

      <Form.Item label="نام خانوادگی" name="lastName">
        <Input
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          style={inputStyle}
        />
      </Form.Item>

      <Form.Item label="کد ملی" name="nationalCode">
        <Input placeholder="لطفا کد ملی خود را وارد کنید" style={inputStyle} />
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
