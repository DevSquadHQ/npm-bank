import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import { BASE_URL } from "../../../core/http-service";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const onFinishFirst = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const onFinishSecond = async (data) => {
    const finalData = { ...formData, ...data };
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
    const responseJson = await response.json();
    // localStorage.setItem("token", responseJson.token);
    navigate("/login");
  };

  // const onSubmit = (data) => {
  //   console.log("Submitted Data:", data); // Check if date is included in data
  //   step === 1 ? setStep(2) : navigate("/login");
  // };

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
    </>
  );
}
