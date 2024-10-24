import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "../../layouts/identity-layout/identity-layout.css"
import { getEighteenYearsAgo } from "../../utils/indentityUtils";


export default function CustomDatePicker({onChange}) {


  const maxDate = getEighteenYearsAgo(); // تاریخی که کاربر نباید بعد از آن انتخاب کند

  return (
    <DatePicker
      containerClassName="datePicker-container"
      inputClass="custom-datePicker"
      placeholder="انتخاب تاریخ"
      value={maxDate}
      onChange={(value)=>onChange(value)}
      render={<InputIcon />}
      maxDate={maxDate}
      calendar={persian}
      locale={persian_fa}
      format={"YYYY/MM/DD"}
      calendarPosition="bottom-left"
    />
  );
}
