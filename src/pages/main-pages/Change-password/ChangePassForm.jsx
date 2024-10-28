import { Button, Form, Input } from "antd";
import {
  validationRules,
  validateMessages,
  validateConfirmPassword,
} from "../../../utils/validationUtils";

export default function ChangePassForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success", values);
  };

  return (
    <Form
      form={form}
      noValidate // turn-off the browser default validation warn
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
        label="رمز عبور فعلی"
        name="password"
        rules={[{ required: true }, { len: 6 ,message:'رمز عبور باید ۶ رقم باشد'}]}
      >
        <Input.Password className="inputStyle" autoComplete="new-password" />
      </Form.Item>
      <Form.Item
        label="رمز عبور جدید"
        name="newPassword"
        rules={[{ required: true }, validationRules.password]}
      >
        <Input.Password className="inputStyle" autoComplete="new-password" />
      </Form.Item>
      <Form.Item
        label="تکرار رمز عبور جدید"
        name="confirm-newPassword"
        dependencies={["new-password"]}
        hasFeedback
        rules={[
          { required: true, message: "تایید رمز عبور را وارد کنید" },
          validateConfirmPassword,
        ]}
      >
        <Input.Password className="inputStyle" autoComplete="new-password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", marginTop: "32px" }}
        >
          تایید
        </Button>
      </Form.Item>
    </Form>
  );
}
