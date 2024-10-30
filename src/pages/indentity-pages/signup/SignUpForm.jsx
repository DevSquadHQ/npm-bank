import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

export default function SignUpForm() {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const onFinishFirst = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const onFinishSecond = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final Submited Data:", finalData);
    navigate("/login")
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
