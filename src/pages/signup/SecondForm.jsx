import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";
import { CustomDatePicker } from "@/components/custom-datePicker";

export default function SecondForm(props) {
  const { onSubmit, handleBack, handleSubmit, register, errors, control } =
    props;

  return (
    <form
      action=""
      className="space-y-5 h-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-5 grow">
        {/* <InputGroup
            label="تاریخ تولد"
            id="birthdate"
            placeholder="انتخاب تاریخ"
            type="date"
            register={register}
            errors={errors}
          /> */}
        <CustomDatePicker control={control} id="data"/>

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
