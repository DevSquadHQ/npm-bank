import { useState, useEffect } from "react";
import { Button, Input, Modal, Flex } from "antd";

export default function OtpModal(props) {
  const { open, setOpen } = props;
  const timer = 60;
  const [counter, setCounter] = useState(timer);
  const handleModalOk = () => {
    setOpen(false);
    setCounter(timer);
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

  return (
    <Modal
      title="رمز پویا"
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
            تایید
          </Button>
        </Flex>,
      ]}
    >
      <Input
        type="password"
        autoComplete="new-password"
        placeholder="رمز پویا ارسال شده را وارد کنید"
      />
    </Modal>
  );
}
