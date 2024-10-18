import { useState } from "react";
import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        label="پست الکترونیک"
        id="email"
        placeholder="name@happy.com"
        register={register}
        errors={errors}
      />
      <InputGroup
        label="رمز عبور "
        id="password"
        placeholder=""
        type="password"
        register={register}
        errors={errors}
      />

      <Button label="ایجاد حساب" />
      <span className="text-[#6B7280] block">
        عضو نیستید ؟{" "}
        <a href="/" className="text-button">
          ایجاد حساب{" "}
        </a>
      </span>
    </form>
  );
}
