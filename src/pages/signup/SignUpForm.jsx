import React, { useState } from "react";
import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

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
        />
      )}
    </>
  );
}

function FirstForm(props) {
  const { onSubmit, handleSubmit, register, errors } = props;

  return (
    <form
      action=""
      className="space-y-5 h-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4 grow sm:grow-0">
        <InputGroup
          label="نام"
          id="name"
          placeholder="لطفا نام خود را وارد کنید"
          register={register}
          errors={errors}
        />
        <InputGroup
          label="نام خانوادگی"
          id="lastName"
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          register={register}
          errors={errors}
        />
        <InputGroup
          label="کد ملی"
          id="nationalCode"
          placeholder="لطفا کد ملی خود را وارد کنید"
          register={register}
          errors={errors}
        />
      </div>
      <Button label="ادامه" />
      <span className="text-[#6B7280] block">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="text-button">
          ورود به حساب
        </a>
      </span>
    </form>
  );
}
function SecondForm(props) {
  const { onSubmit, handleBack, handleSubmit, register, errors } = props;

  return (
    <form
      action=""
      className="space-y-5 h-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-5 grow">
        <InputGroup
          label="تاریخ تولد"
          id="birthdate"
          placeholder="انتخاب تاریخ"
          type="date"
          register={register}
          errors={errors}
        />
        <InputGroup
          label="شماره موبایل"
          id="PhoneNumber"
          placeholder="مثال 09121212121"
          type="tel"
          register={register}
          errors={errors}
        />
        <InputGroup
          label="ایمیل"
          id="email"
          placeholder="لطفا ایمیل خود را وارد کنید"
          type="email"
          register={register}
          errors={errors}
        />
      </div>
      <Button label="ثبت نام" />
      <Button
        variant="outlined"
        label="بازگشت"
        type="button"
        onClick={handleBack}
      />
      <span className="text-[#6B7280] block">
        حساب کاربری دارید ؟{" "}
        <a href="/login" className="text-button">
          ورود به حساب
        </a>
      </span>
    </form>
  );
}
