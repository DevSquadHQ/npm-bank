import { Button, Form, Input } from "antd";
import { inputStyle } from "./FirstForm";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
// import { control } from "react-hook-form";

export default function SecondForm(props) {
  const [form] = Form.useForm();

  const { onFinish, handleBack } = props;

  return (
    <Form
      action=""
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      // autoComplete="off"
      onFinish={onFinish}
      noValidate
      requiredMark={false} //delete star
      form={form}
    >
      <Form.Item label="تاریخ تولد" name="birthDate">
        <CustomDatePicker
          onChange={(date) =>
            form.setFieldValue("birthDate", date?.format("YYYY/MM/DD"))
          }
        />
      </Form.Item>

      <Form.Item
        label="شماره تلفن"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "لطفا نام خود را وارد کنید",
          },
          {
            pattern: /^(09|\+989)\d{9}$/,
            message: "شماره موبایل نامعتبر است",
          },
        ]}
      >
        <Input
          placeholder="لطفا شماره تلفن خود را وارد کنید"
          style={inputStyle}
          type="tel"
        />
      </Form.Item>

      <Form.Item
        label="ایمیل"
        name="email"
        rules={[
          {
            required: true,
            message: "لطفا ایمیل خود را وارد کنید",
          },
          {
            type: "email",
            message: "ایمیل نامعتبر است",
          },
        ]}
      >
        <Input
          placeholder="لطفا ایمیل خود را وارد کنید"
          type="email"
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
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، کوچک، اعداد و کاراکترهای خاص باشد",
          },
        ]}
        validateTrigger={["onChange"]}
      >
        <Input.Password
          placeholder="لطفا رمز عبور خود را وارد کنید"
          style={inputStyle}
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
