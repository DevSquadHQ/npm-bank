import React, { useState } from "react";
import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";

export default function LoginForm() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    e.target.reset();
    setStep(2);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <>
      {step === 1 ? (
        <FirstForm handleSubmit={handleSubmit} handleChange={handleChange} />
      ) : (
        <SecondForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBack={handleBack}
        />
      )}
    </>
  );
}

function FirstForm(props) {
  const { handleChange, handleSubmit } = props;

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <InputGroup
        label="نام"
        id="name"
        placeholder="لطفا نام خود را وارد کنید"
        onChange={handleChange}
      />
      <InputGroup
        label="نام خانوادگی"
        id="lastName"
        placeholder="لطفا نام خانوادگی خود را وارد کنید"
        onChange={handleChange}
      />
      <InputGroup
        label="کد ملی"
        id="nationalCode"
        placeholder="لطفا کد ملی خود را وارد کنید"
        onChange={handleChange}
      />
      <Button label="ادامه" />
    </form>
  );
}
function SecondForm(props) {
  const { handleChange, handleSubmit ,handleBack} = props;

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <InputGroup
        label="تاریخ تولد"
        id="birthdate"
        placeholder="انتخاب تاریخ"
        onChange={handleChange}
        type="date"
      />
      <InputGroup
        label="شماره موبایل"
        id="PhoneNumber"
        placeholder="مثال 09121212121"
        onChange={handleChange}
        type="tel"
      />
      <InputGroup
        label="ایمیل"
        id="email"
        placeholder="لطفا ایمیل خود را وارد کنید"
        onChange={handleChange}
        type="email"
      />
      <Button label="ثبت نام"/>
      <Button
        variant="outlined"
        label="بازگشت"
        type="button"
        onClick={handleBack}
      />
    </form>
  );
}
