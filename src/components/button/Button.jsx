import React from "react";

export default function Button(props) {
  const {
    label,
    type = "submit",
    variant = "primary",
    fullWidth = true,
    onClick,
  } = props;

  const primaryClass = "bg-button ";
  const outlinedClass =
    "border-button border text-button hover:border-transparent hover:bg-button hover:text-white duration-100";
  const fullWidthClass = "w-full";
  return (
    <button
      className={`${
        variant === "primary" ? primaryClass : outlinedClass
      } rounded-[8px] h-[41px] ${fullWidth ? fullWidthClass : ""}`}
      type={type}
      onClick={type === "button" ? onClick : undefined}
    >
      {label}
    </button>
  );
}
