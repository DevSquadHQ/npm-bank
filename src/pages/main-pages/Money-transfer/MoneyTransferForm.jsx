import { useState } from "react";
import { Button, Form, InputNumber, Input } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Inputs4Digit from "./Inputs4Digit";
import OtpModal from "./OtpModal.jsx";
import { getToday } from "../../../utils/indentityUtils.js";
import Num2persian from 'num2persian';

export default function MoneyTransferForm() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [fee, setFee] = useState(undefined); 

  const today = getToday();

  const onFinish = (values) => {
    console.log("Success", values);
    setOpen(true);
  };

  const handleFeeChange = (value) => {
    const parsedValue = parseInt(value, 10);
    setFee(isNaN(parsedValue) ? undefined : parsedValue); 
    console.log("Fee amount:", parsedValue); 
  };

  return (
    <>
      <Form
        form={form}
        noValidate
        onFinish={onFinish}
        requiredMark={false}
        validateMessages={validateMessages}
        initialValues={{ expirationDate: today.format("YYYY/MM/DD") }} // Set initial values here
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
          label="مبلغ"
          name="fee"
          tooltip="حداقل ۱۰ هزار تومان"
          rules={[{ required: true }]}
          validateTrigger="onChange"
          validateFirst
        >
          <InputNumber
            style={{ width: "100%" }}
            className="inputStyle"
            placeholder="مبلغ مورد نیاز را وارد کنید"
            min={10000}
            value={fee} 
            onChange={handleFeeChange} 
            formatter={(value) =>
              value ? `${value} `.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
            }
            parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
          />
          {fee !== undefined && fee >= 10000 && (
            <div style={{ marginTop: "8px", color: "#888" }}>
               {Num2persian(fee/10)} تومان
            </div>
          )}
        </Form.Item>
        <Form.Item
          label="CVV2"
          name="cvvNumber"
          rules={[{ required: true }, { min: 3 }]}
          validateTrigger="onChange"
          validateFirst
        >
          <Input placeholder="CVV2" maxLength={6} className="inputStyle" />
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
            onChange={(date) =>
              form.setFieldValue("expirationDate", date?.format("YYYY/MM/DD"))
            }
          />
        </Form.Item>
        <Form.Item label>
          <Button type="primary" htmlType="submit" block >
            تایید
          </Button>
        </Form.Item>
      </Form>
      {/* ============================ modal =========================== */}
      <OtpModal open={open} setOpen={setOpen} />
    </>
  );
}
