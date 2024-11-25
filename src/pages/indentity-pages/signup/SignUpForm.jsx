import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SignUpOtp from "./SignUpOtp";
import { BASE_URL } from "../../../core/http-service";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpOtken, setOtpOtken] = useState(localStorage.getItem("token"));

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
    // const responseJson = await response.json();
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
        console.log(responseJson);
        setOpen(false);
        responseJson && navigate("/login");
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
      {step === 1 ? (
        <FirstForm onFinish={onFinishFirst} />
      ) : (
        <SecondForm onFinish={onFinishSecond} handleBack={handleBack} />
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
