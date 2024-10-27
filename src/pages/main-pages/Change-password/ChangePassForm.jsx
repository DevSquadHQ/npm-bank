import { Button, Form, Input } from "antd";
import {
  validationRules,
  validateMessages,
} from "../../../utils/validationUtils";

export default function ChangePassForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success", values);
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("newPassword") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("رمز عبور و تایید آن یکسان نیستند"));
    },
  });
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
      <Form.Item label="رمز عبور فعلی" name="password">
        <Input.Password className="inputStyle" value="12345" />
      </Form.Item>
      <Form.Item
        label="رمز عبور جدید"
        name="newPassword"
        rules={[
          { required: true },
          {
            min: validationRules.password.min,
            message: `رمز عبور باید حداقل ${validationRules.password.min} کاراکتر باشد`,
          },
        ]}
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
