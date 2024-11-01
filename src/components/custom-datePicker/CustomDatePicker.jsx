import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CalendarOutlined } from "@ant-design/icons";
import "./custom-datePicker.css"
import { Flex } from "antd";

import { useState } from "react";

export default function CustomDatePicker({
  isRange = false,
  onChange,
  initialValue,
  maxDate,
  minDate,
}) {
  const [value, setValue] = useState(
    isRange ? initialValue : maxDate ? maxDate : minDate
  );

  return (
    <DatePicker
      containerClassName="datePicker-container"
      render={<CustomInput />}
      placeholder={isRange ? "انتخاب محدوده تاریخ" : "انتخاب تاریخ"}
      value={value}
      onChange={(value) => onChange(value)}
      // render={<InputIcon />}
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
function CustomInput({ onFocus, value, onChange }) {
  return (
    <Flex items="center">
      <input
        className="custom-datePicker"
        onFocus={onFocus}
        value={value}
        onChange={onChange}
      />
      <CalendarOutlined />
    </Flex>
  );
}
