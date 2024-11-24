import { useState, useEffect } from "react";
import { Button, Input, Modal, Flex } from "antd";
import { BASE_URL } from "../../../core/http-service";

export default function SignUpOtp(props) {
  const { open, setOpen, phoneNumber } = props;
  const timer = 60;
  const [counter, setCounter] = useState(timer);
  const [otpValue, setOtpValue] = useState("");
  const handleModalOk = async () => {
    // setOpen(false);
    // setCounter(timer);

    const requestBody = {
      code: otpValue,
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
    localStorage.setItem("token",responseJson)
  };
  const handleCancel = () => {
    setOpen(false);
    setCounter(timer);
  };

  const handleResend = async () => {
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
    console.log(responseJson);
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

  // Format the counter to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Add leading zero for seconds
  };

  const onChange = (text) => {
    console.log("onChange:", text);
    setOtpValue(text);
  };
  //   const onInput = (value) => {
  //     console.log("onInput:", value.target.value);
  //   };
  const sharedProps = {
    onChange,
    // onInput,
  };

  return (
    <Modal
      title={`رمز یکبار مصرف به ${phoneNumber} ارسال شد`}
      centered
      open={open}
      onOk={handleModalOk}
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
            onClick={handleModalOk}
          >
            ارسال کد
          </Button>
        </Flex>,
      ]}
    >
      <Input.OTP
        length={6}
        {...sharedProps}
        style={{ width: "100%", direction: "ltr" }}
      />
    </Modal>
  );
}
