import { useState } from "react";
import { Button, Form, InputNumber, Input, Dropdown, Menu, Flex } from "antd";
import { validateMessages } from "../../../utils/validationUtils";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Inputs4Digit from "./Inputs4Digit";
import OtpModal from "./OtpModal.jsx";
import { getToday } from "../../../utils/indentityUtils.js";
import Num2persian from "num2persian";
import "./main.css";
import "../../../components/custom-inputNumber/custom-input-number.css";
import { CloseCircleFilled, StarOutlined } from "@ant-design/icons";
import CardInput from "./detectbank.jsx";

export default function MoneyTransferForm(props) {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [fee, setFee] = useState(undefined);
  const [toTooman, setToTooman] = useState(undefined);

  const today = getToday();

  const clearFeeField = () => {
    setFee(undefined);
    setToTooman(undefined);
    form.setFieldsValue({ fee: undefined });
  };

  const onFinish = (values) => {
    console.log("Success", values);
    setOpen(true);
  };

  const handleAmountChange = (value) => {
    const parsedValue = parseInt(value, 10);
    const validFee = isNaN(parsedValue) ? undefined : parsedValue;

    setFee(validFee);
    form.setFieldsValue({ fee: validFee });

    const amountInToomans = validFee ? Math.floor(validFee / 10) : null;
    setToTooman(amountInToomans ? Num2persian(amountInToomans) : null);
  };

  const handleFeeButtonClick = (value) => {
    const newFee = value * 10;
    setFee(newFee);
    form.setFieldsValue({ fee: newFee });
    handleAmountChange(newFee);
  };

  const feeMenu = (
    <Menu onClick={(e) => handleFeeButtonClick(parseInt(e.key, 10))}>
      <Menu.Item key="200000">200 تومان</Menu.Item>
      <Menu.Item key="500000">500 تومان</Menu.Item>
      <Menu.Item key="1000000">1000 تومان</Menu.Item>
    </Menu>
  );

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
        <Form.Item label="کارت مبدا" name="sourcCard2">
          <Inputs4Digit />
        </Form.Item>
        <Form.Item label="کارت مقصد" name="destinationCard">
          <CardInput onFinish={onFinish} />
        </Form.Item>
        <Form.Item
          label="مبلغ"
          name="fee"
          tooltip="حداقل ۱۰ هزار تومان"
          rules={[{ required: true, message: "لطفاً مبلغ را وارد کنید." }]}
          validateTrigger="onChange"
          validateFirst
        >
          <Flex align="center" gap={5}>
            <Dropdown overlay={feeMenu} trigger={["click"]}>
              <StarOutlined style={{ color: "gold", fontSize: "20px" }} />
            </Dropdown>
            <p style={{ margin: 0, color: "#fff" }}>مبالغ پیش‌فرض</p>
          </Flex>

          <div style={{ position: "relative", marginTop: "10px" }}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder="مبلغ را وارد کنید"
              addonAfter="ریال"
              min={100000}
              value={fee}
              onChange={handleAmountChange}
              formatter={(value) =>
                value ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
              }
            />
            <CloseCircleFilled className="deletfee" onClick={clearFeeField} />
          </div>
        </Form.Item>

        <div className="toomanLabel">
          {toTooman ? `معادل ${toTooman} تومان ` : <span>&nbsp;</span>}
        </div>

        <Form.Item
          label="CVV2"
          name="cvvNumber"
          rules={[
            { required: true, message: "لطفاً CVV2 را وارد کنید." },
            { min: 3, message: "حداقل ۳ رقم لازم است." },
          ]}
          validateTrigger="onChange"
          validateFirst
        >
          <Input placeholder="CVV2" maxLength={6} />
        </Form.Item>
        <Form.Item
          label="تاریخ انقضا"
          name="expirationDate"
          rules={[
            { required: true, message: "لطفاً تاریخ انقضا را وارد کنید." },
          ]}
        >
          <CustomDatePicker
            onlyMonthPicker
            minDate={today}
            calendar={persian}
            locale={persian_fa}
            onChange={(date) =>
              form.setFieldValue("expirationDate", date?.format("YYYY/MM"))
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            تایید
          </Button>
        </Form.Item>
      </Form>

      {/* modal */}
      <OtpModal open={open} setOpen={setOpen} />
    </>
  );
}
