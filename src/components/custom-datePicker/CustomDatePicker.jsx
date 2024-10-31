import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "../../layouts/identity-layout/identity-layout.css";


import { useState } from "react";

export default function CustomDatePicker({
  isRange = false,
  onChange,
  initialValue,
  maxDate,
  minDate
}) {

  const [value, setValue] = useState(isRange ? initialValue : maxDate);

  return (
    <DatePicker
      containerClassName="datePicker-container"
      inputClass="custom-datePicker"
      placeholder={isRange ? "انتخاب محدوده تاریخ" : "انتخاب تاریخ"}
      value={value}
      onChange={(value) => onChange(value)}
      render={<InputIcon />}
      maxDate={!isRange ? maxDate : undefined}
      minDate={!isRange ? minDate : undefined}
      range={isRange}
      calendar={persian}
      locale={persian_fa}
      format={"YYYY/MM/DD"}
      calendarPosition="bottom-left"
    />
  );
}