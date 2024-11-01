import { useState } from "react";
import { Input } from "antd";
import "./Transaction.css";

const formatNumber = (value) => {
  return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
};

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    onChange(formatNumber(inputValue));
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (valueTemp.charAt(valueTemp.length - 1) === "-") {
      valueTemp = valueTemp.slice(0, -1);
    }
    onChange(valueTemp);
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      style={{ textAlign: "center" }}
      maxLength={19}
    />
  );
};

const Inputs4Digit = () => {
  const [value, setValue] = useState("");
  return (
    <NumericInput
      className="centerplacholder"
      placeholder="0000 - 0000 - 0000 - 0000"
      value={value}
      onChange={setValue}
    />
  );
};

export default Inputs4Digit;
