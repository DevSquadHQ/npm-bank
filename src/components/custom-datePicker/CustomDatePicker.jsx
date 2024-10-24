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
      // style={{
      //   width: "100%",
      //   color: "#fff",
      //   borderRaduis: "8px",
      // }}
      containerClassName="datePicker-container w-full bg-input rounded-[8px] py-3 px-5 border-[#4B5563] outline-none"
      placeholder="انتخاب تاریخ"
      value={maxDate}
      onChange={(value)=>onChange(value)}
      render={<InputIcon />} // Keep the InputIcon rendering
      maxDate={maxDate}
      calendar={persian}
      locale={persian_fa}
      format={"YYYY/MM/DD"}
      calendarPosition="bottom-left"
    />
  );
}
