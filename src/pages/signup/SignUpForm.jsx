import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data); // Check if date is included in data
    step === 1 ? setStep(2) : navigate("/login");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <>
      {step === 1 ? (
        <FirstForm
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
        />
      ) : (
        <SecondForm
          onSubmit={onSubmit}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          control={control}
        />
      )}
    </>
  );
}
