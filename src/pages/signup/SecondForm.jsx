import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";

export default function SecondForm(props) {
  const { onSubmit, handleBack, handleSubmit, register, errors } = props;

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
       <DatePicker
          containerClassName="datePicker-container w-full bg-input rounded-[8px] py-3 px-5 border-[#4B5563] outline-none"
          // inputClass="custom-input outline-none w-full rounded-[8px] border-none bg-transparent"
          placeholder="لطفا یک تاریخ انتخاب کنید"
          value="1385/08/1"
          render={<InputIcon />}
          maxDate="1385/08/20"
          calendar={persian}
          locale={persian_fa}
          format={"YYYY/MM/DD"}
          calendarPosition="bottom-left"
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
