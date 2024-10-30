import { Button, Result } from "antd";
import React from "react";

export default function TransactionError(props) {
  const { isSuccess } = props;
  return (
    <Result
    //default is error just add isSucces to the components
      status={isSuccess ? "success" : "error"}
      title={isSuccess?"عملیات با موفقیت انجام شد.":"عملیات ناموفق"}
    />
  );
}
