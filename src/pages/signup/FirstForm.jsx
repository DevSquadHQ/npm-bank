import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";

export default function FirstForm(props) {
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
