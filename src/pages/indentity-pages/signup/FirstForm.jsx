import { Button, Form, Input } from "antd";
import { validateIranianNationalCode } from "../../../utils/indentityUtils";
import "../../../layouts/identity-layout/identity-layout.css";
import {
  validateMessages,
  validationRules,
} from "../../../utils/validationUtils";

export default function FirstForm({ onFinish }) {
  const [form] = Form.useForm();

  return (
    <Form
      action=""
      // autoComplete="off"
      onFinish={onFinish}
      noValidate
      requiredMark={false}
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
        label="نام"
        name="username"
        rules={[{ required: true }, { min: 2 }, validationRules.perName]}
        validateTrigger="onChange" // Show validation on every change
        validateFirst // showing only one error
      >
        <Input placeholder="لطفا نام خود را وارد کنید" className="inputStyle" />
      </Form.Item>

      <Form.Item
        label="نام خانوادگی"
        name="lastName"
        rules={[{ required: true }, { min: 2 }, validationRules.perName]}
        validateTrigger="onChange" // Show validation on every change
        validateFirst // showing only one error
      >
        <Input
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          className="inputStyle"
        />
      </Form.Item>

      <Form.Item
        label="کد ملی"
        name="nationalCode"
        rules={[
          { required: true },
          {
            validator: (_, value) => {
              if (!value) {
                return Promise.resolve(); // Skip validation if empty
              }
              const validationResult = validateIranianNationalCode(value);
              return validationResult.isValid
                ? Promise.resolve() // Validation passed
                : Promise.reject(new Error(validationResult.message)); //Validation failed
            },
          },
        ]}
      >
        <Input
          placeholder="لطفا کد ملی خود را وارد کنید"
          className="inputStyle"
        />
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
      <span className="auth-form-footer">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="auth-form-footer">
          ورود به حساب
        </a>
      </span>
    </Form>
  );
}
