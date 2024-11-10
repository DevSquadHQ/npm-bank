import { Button, Form, Input } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import { validateIranianNationalCode } from "../../../utils/indentityUtils";
import "../../../layouts/identity-layout/identity-layout.css";

import {
  validateMessages,
  validateRequired,
  validationRules,
} from "../../../utils/validationUtils";
import { getEighteenYearsAgo } from "../../../utils/indentityUtils";

export default function FirstForm({ onFinish }) {
  const [form] = Form.useForm();
  const maxDate = getEighteenYearsAgo().format("YYYY/MM/DD"); // تاریخی که کاربر نباید بعد از آن انتخاب کند
  // const maxDate = getEighteenYearsAgo().format("YYYY/MM/DD"); // تاریخی که کاربر نباید بعد از آن انتخاب کند

  return (
    <Form
      action=""
      // autoComplete="off"
      initialValues={{ birthDate: maxDate }} // Set initial values here
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
          count={{
            show: true,
            max: 10,
          }}
        />
      </Form.Item>
      <Form.Item
        label="تاریخ تولد"
        name="birthDate"
        tooltip="بالای ۱۸ سال"
        rules={[{ validator: validateRequired }]}
      >
        <CustomDatePicker
          maxDate={maxDate}
          onChange={(date) =>
            form.setFieldValue("birthDate", date?.format("YYYY/MM/DD"))
          }
        />
      </Form.Item>
      <Form.Item label>
        <Button type="primary" htmlType="submit" block>
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
