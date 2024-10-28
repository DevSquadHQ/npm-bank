import React from "react";
import { Image } from "antd";
import bankCart from "../../../assets/images/card-header.png";
import { Typography } from "antd";
const { Text } = Typography;
import "../../../components/form-container/form-container.css";
import CreateAccForm from "./CreateAccForm";

export default function CreateAccount() {
  return (
    <>
      <Image src={bankCart} preview={false} />
      <Text className="card-title card-title-middle">افتتاح حساب بانکی</Text>
      <CreateAccForm/>
    </>
  );
}
