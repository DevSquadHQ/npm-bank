import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { Controller } from "react-hook-form";

export default function CustomDatePicker(props) {
  const { control, id } = props;

  return (
    <Controller
      control={control}
      name={id}
      rules={{ required: "لطفا یک تاریخ انتخاب کنید" }} // Add a required validation message
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <>
          <DatePicker
            containerClassName="datePicker-container w-full bg-input rounded-[8px] py-3 px-5 border-[#4B5563] outline-none"
            placeholder="لطفا یک تاریخ انتخاب کنید"
            value={value || null} // Use null if no value is set
            onChange={(date) => onChange(date ? date.toString() : null)} // Convert to string or null
            // render={<InputIcon />} // Keep the InputIcon rendering
            maxDate="1385/08/20"
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
