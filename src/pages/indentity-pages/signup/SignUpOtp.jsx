import { useState, useEffect, useRef } from "react";
import { Button, Input, Modal, Flex, Spin, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { BASE_URL } from "../../../core/http-service";

export default function SignUpOtp(props) {
  const { open, setOpen, phoneNumber, setOtpOtken } = props;
  const timer = 60;
  const otpLength = 6;
  const [counter, setCounter] = useState(timer);
  const [otpValue, setOtpValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message: "خطا",
      description: message,
      showProgress: true,
      duration: 2,
    });
  };

  // Create a ref for the OTP input
  const inputRef = useRef(null);

  const handleModalOk = async (otpVal) => {
    // setOpen(false);
    setLoading(true);
    setCounter(timer);
    const requestBody = {
      code: otpVal,
      phoneNumber: phoneNumber, // Construct an object with a key and value
    };

    const response = await fetch(`${BASE_URL}/Otp/verify-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const responseJson = await response.json();
    setLoading(false);
    if (response.status === 200) {
      localStorage.setItem("otp-token", responseJson);
      setOtpOtken(responseJson);
    } else {
      setOpen(false);
      // setOtpValue("");
      openNotificationWithIcon("error", responseJson.message);
    }
  };
  const handleCancel = () => {
    setOpen(false);
    setCounter(timer);
  };

  const handleResend = async () => {
    setLoading(true);
    setCounter(timer);
    const requestBody = {
      phoneNumber: phoneNumber, // Construct an object with a key and value
    };
    const response = await fetch(`${BASE_URL}/Otp/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const responseJson = await response.json();

    setLoading(false);
  };

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [counter]);

  // Focus on the first input when the modal is opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Format the counter to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Add leading zero for seconds
  };

  const onChange = (text) => {
    // setOtpValue(text);
    text.length === otpLength ? handleModalOk(text) : null;
  };

  const onInput = (event) => {
    console.log("onInput:", event.target.value);
    // console.log(event)
  };

  const sharedProps = {
    onChange,
    onInput,
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={`رمز یکبار مصرف به ${phoneNumber} ارسال شد`}
        centered
        open={open}
        onCancel={handleCancel}
        footer={[
          <Flex justify="space-between" key="flex">
            <Button
              key="resend"
              type="link"
              style={{ color: "#fff" }}
              onClick={handleResend}
              disabled={counter > 0}
            >
              {counter > 0
                ? `ارسال مجدد کد از ${formatTime(counter)}`
                : " ارسال مجدد"}
            </Button>
            <Button
              className="okbutton"
              key="submit"
              type="primary"
              onClick={() => handleModalOk(otpValue)}
            >
              {loading ? (
                <Spin indicator={<LoadingOutlined spin />} />
              ) : (
                <> ارسال کد</>
              )}
            </Button>
          </Flex>,
        ]}
      >
        <Input.OTP
          ref={inputRef}
          value={otpValue}
          onChange={(e) => setOtpValue(e.target.value)}
          length={otpLength}
          {...sharedProps}
          style={{ width: "100%", direction: "ltr" }}
        />
      </Modal>
    </>
  );
}
