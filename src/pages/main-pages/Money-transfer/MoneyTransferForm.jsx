import { useState, useEffect } from "react";
import { Button, Form, InputNumber, Input, Modal } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Inputs4Digit from "./Inputs4Digit";

export default function MoneyTransferForm() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [counter, setCounter] = useState(10); 
  const today = new Date();

  const onFinish = (values) => {
    console.log("Success", values);
    setIsModalVisible(true);
    setCounter(10); 
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleResend = () => {
    setCounter(10); 
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

  return (
    <>
      <Form
        form={form}
        noValidate
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
        <Form.Item label="کارت مبدا" name="sourcCard">
          <Inputs4Digit />
        </Form.Item>
        <Form.Item label="کارت مقصد" name="destinationCard">
          <Inputs4Digit />
        </Form.Item>
        <Form.Item
          label="مبلغ (تومان)"
          name="fee"
          rules={[{ required: true }]}
          validateTrigger="onChange"
          validateFirst
        >
          <InputNumber
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px 15px",
            }}
            placeholder="مبلغ مورد نیاز را وارد کنید"
            min={10000}
            formatter={(value) =>
              value ? `${value} `.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
            }
          />
        </Form.Item>
        <Form.Item
          label="CVV2"
          name="cvvNumber"
          rules={[{ required: true }, { min: 3 }]}
          validateTrigger="onChange"
          validateFirst
        >
          <Input
            placeholder="CVV2"
            maxLength={6}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px 15px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="تاریخ انقضا"
          name="expirationDate"
          rules={[{ required: true }]}
        >
          <CustomDatePicker
            minDate={today}
            calendar={persian}
            locale={persian_fa}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", marginTop: "32px" }}
          >
            تایید
          </Button>
        </Form.Item>
      </Form>
{/* ============================ modal =========================== */}
      <Modal
        title="رمز پویا"
        open={isModalVisible}
        onOk={handleModalOk}
        footer={[
          <Button
          className="resendbutton"
            key="resend"
            type="primary"
            onClick={handleResend}
            disabled={counter > 0} 
          >
            {counter > 0 ? `ارسال مجدد (${counter})` : "ارسال مجدد"}
          </Button>,
          <Button
          className="okbutton"
            key="submit"
            type="default"
            onClick={handleModalOk}
          >
            تایید
          </Button>
        ]}
      >
          <Input  placeholder="رمز پویا ارسال شده را وارد کنید"/>
      </Modal>
    </>
  );
}
