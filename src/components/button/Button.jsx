import React from "react";

export default function Button(props) {
  const { label, type = 'submit' } = props;
  return <button className="bg-button rounded-[8px] h-[41px] w-full" type={type}>{label}</button>;
}
