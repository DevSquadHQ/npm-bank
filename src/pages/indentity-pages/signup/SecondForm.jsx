import { Button, Form, Input } from "antd";

import "../../../layouts/identity-layout/identity-layout.css";
import {
  validateConfirmPassword,
  validateMessages,
  validationRules,
} from "../../../utils/validationUtils";

export default function SecondForm(props) {
  const [form] = Form.useForm();

  const { onFinish, handleBack } = props;

  return (
    <Form
      action=""
      // autoComplete="off"
      onFinish={onFinish}
      noValidate
      requiredMark={false} //delete star
      form={form}
      validateMessages={validateMessages}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
    >
      <Form.Item
        label="شماره تلفن"
        name="phoneNumber"
        rules={[{ required: true }, validationRules.phoneNumber]}
      >
        <Input
          placeholder="لطفا شماره تلفن خود را وارد کنید"
          className="inputStyle"
          type="tel"
        />
      </Form.Item>

      <Form.Item
        label="ایمیل"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          type="email"
          className="inputStyle"
        />
      </Form.Item>

      <Form.Item
        label="رمز عبور"
        name="password"
        rules={[{ required: true }, validationRules.password]}
        validateTrigger={["onChange"]}
      >
        <Input.Password
          placeholder="لطفا رمز عبور خود را وارد کنید"
          className="inputStyle"
          autoComplete="new-password"
          showCount
        />
      </Form.Item>
      <Form.Item
        label="تکرار رمز عبور "
        name="confirm-password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "تایید رمز عبور را وارد کنید" },
          validateConfirmPassword("password"),
        ]}
      >
        <Input.Password
          className="inputStyle"
          autoComplete="new-password"
          showCount
        />
      </Form.Item>
      <Form.Item label>
        <Button type="primary" htmlType="submit" block>
          ثبت نام
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button
          onClick={handleBack}
          type="primary"
          htmlType="submit"
          block
          ghost
        >
          بازگشت
        </Button>
      </Form.Item>
      {/* <Button label="ادامه"/> */}
      <span className="auth-form-footer">
        حساب کاربری دارید ؟ <a href="/login">ورود به حساب</a>
      </span>
    </Form>
  );
}
