import { Button, Form, Input } from "antd";
import { inputStyle } from "./FirstForm";
import { CustomDatePicker } from "@/components/custom-datePicker";
// import { control } from "react-hook-form";

export default function SecondForm(props) {
  const { onSubmit, handleBack } = props;

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
      <Form.Item label="تاریخ تولد" name="birthDate">
        {/* <Input
          placeholder="لطفا تاریخ تولد خود را وارد کنید"
          style={inputStyle}
          type="date"
        /> */}
        <CustomDatePicker id="date"/>
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
      <span className="text-[#6B7280] block">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="text-button">
          ورود به حساب
        </a>
      </span>
    </Form>
  );
}
