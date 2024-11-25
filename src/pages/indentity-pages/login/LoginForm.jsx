import { Button, Form, Input, notification, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import "../../../layouts/identity-layout/identity-layout.css";
import { validateMessages } from "../../../utils/validationUtils";
import { BASE_URL } from "../../../core/http-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "خطا",
      description: message,
      showProgress: true,
      duration: 2,
    });
  };

  const onFinish = async (values) => {
    const response = await fetch(`${BASE_URL}/User/login`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const responseJson = await response.json();
    if (response.status === 200) {
      localStorage.setItem("login-token", responseJson);
      navigate("/");
    } else {
      setMessage(responseJson.detail);
      openNotificationWithIcon("error");
    }
  };

  return (
    <>
      {contextHolder}

      <Form
        form={form}
        noValidate // turn-off the browser default validation warn
        // autoComplete="off"
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
          label="ایمیل"
          name="email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input placeholder="لطفا ایمیل خود را وارد کنید" />
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name="password"
          rules={[{ required: true }, { min: 8 }]}
        >
          <Input.Password
            placeholder="لطفا رمز عبور خود را وارد کنید"
            autoComplete="new-password"
          />
        </Form.Item>
        <Form.Item label>
          <Button type="primary" htmlType="submit" block>
          {/* <Spin indicator={<LoadingOutlined spin />} /> */}
            ورود به حساب
          </Button>
        </Form.Item>
        <span className="auth-form-footer">
          عضو نیستید ؟ <a href="/signUp">ایجاد حساب </a>
        </span>
      </Form>
    </>
  );
}
