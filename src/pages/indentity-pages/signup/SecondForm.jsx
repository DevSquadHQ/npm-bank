import { Button, Form, Input } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import "../../../layouts/identity-layout/identity-layout.css";
import {
  validateMessages,
  validationRules,
} from "../../../utils/validationUtils";
import { getEighteenYearsAgo } from "../../../utils/indentityUtils";

export default function SecondForm(props) {
  const maxDate = getEighteenYearsAgo().format("YYYY/MM/DD"); // تاریخی که کاربر نباید بعد از آن انتخاب کند
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
      initialValues={{ birthDate: maxDate }}
      validateMessages={validateMessages}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
    >
      <Form.Item label="تاریخ تولد" name="birthDate">
        <CustomDatePicker
          maxDate={maxDate}
          onChange={(date) =>
            form.setFieldValue("birthDate", date?.format("YYYY/MM/DD"))
          }
        />
      </Form.Item>

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
          style={{ width: "100%" }}
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
