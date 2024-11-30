import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SignUpOtp from "./SignUpOtp";
import { BASE_URL } from "../../../core/http-service";
import { notification, Spin } from "antd";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpOtken, setOtpOtken] = useState(localStorage.getItem("token"));
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

  const onFinishFirst = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const onFinishSecond = async (data) => {
    const finalData = { ...formData, ...data };
    // console.log("Final Submited Data:", finalData);
    setPhoneNumber(finalData.phoneNumber);
    setFormData(finalData);

    const requestBody = {
      phoneNumber: finalData.phoneNumber, // Construct an object with a key and value
    };
    setOpen(true);
    const response = await fetch(`${BASE_URL}/Otp/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
    } else {
      const responseJson = await response.json();
      openNotificationWithIcon("error", responseJson);
    }
    // console.log(responseJson);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const registerReq = async () => {
      if (!otpOtken) {
        return;
      } else {
        const response = await fetch(`${BASE_URL}/User/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${otpOtken}`,
          },
          body: JSON.stringify(formData),
        });
        const responseJson = await response.json();
        if (response.status === 200) {
          navigate("/login");
        } else {
          openNotificationWithIcon("error", responseJson.detail);
          localStorage.removeItem("otp-token");
          setOpen(false)
        }
      }
    };
    registerReq();
  }, [otpOtken, formData]);

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <>
      {contextHolder}
      {step === 1 ? (
        <FirstForm onFinish={onFinishFirst} />
      ) : (
        <SecondForm
          onFinish={onFinishSecond}
          handleBack={handleBack}
          loading={loading}
        />
      )}

      <SignUpOtp
        open={open}
        setOpen={setOpen}
        phoneNumber={phoneNumber}
        setOtpOtken={setOtpOtken}
      />
    </>
  );
}
