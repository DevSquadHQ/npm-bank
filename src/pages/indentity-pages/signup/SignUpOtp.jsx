import { useState, useEffect } from "react";
import { Button, Input, Modal, Flex } from "antd";

export default function SignUpOtp(props) {
  const { open, setOpen, phoneNumber } = props;
  const timer = 60;
  const [counter, setCounter] = useState(timer);
  const [otpValue, setOtpValue] = useState("");
  const handleModalOk = () => {
    // setOpen(false);
    // setCounter(timer);
    console.log(otpValue);
  };
  const handleCancel = () => {
    setOpen(false);
    setCounter(timer);
  };

  const handleResend = () => {
    setCounter(timer);
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
    console.log("onChange:",typeof text);
    setOtpValue(text)
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
        length={5}
        {...sharedProps}
        style={{ width: "100%", direction: "ltr" }}
      />
    </Modal>
  );
}
