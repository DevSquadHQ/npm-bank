import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { Controller } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";

export default function CustomDatePicker(props) {
  const { control, id } = props;

  const getEighteenYearsAgo = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18); // 18 سال از تاریخ امروز کم می‌کنیم
    return new DateObject(today); 
  };

  const maxDate = getEighteenYearsAgo(); // تاریخی که کاربر نباید بعد از آن انتخاب کند

  return (
    <Controller
      control={control}
      name={id}
      rules={{ required: "لطفا یک تاریخ انتخاب کنید" }} // Add a required validation message
      render={({ field: { onChange }, formState: { errors } }) => (
        <>
          <DatePicker
            containerClassName="datePicker-container w-full bg-input rounded-[8px] py-3 px-5 border-[#4B5563] outline-none"
            placeholder="لطفا یک تاریخ انتخاب کنید"
            value={maxDate}
            onChange={(id) => onChange(id ? id.toString() : null)} // Convert to string or null
            // render={<InputIcon />} // Keep the InputIcon rendering
            maxDate={maxDate}
            calendar={persian}
            locale={persian_fa}
            format={"YYYY/MM/DD"}
            calendarPosition="bottom-left"
          />
          {errors[id] && (
            <p className="text-sm text-red-700">{errors[id].message}</p>
          )}
        </>
      )}
    />
  );
}
