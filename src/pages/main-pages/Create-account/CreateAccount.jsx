import React, { useState } from "react";
import { Image, Space, Typography } from "antd";
import bankCart from "../../../assets/images/card-header.png";
import greenIcon from "../../../assets/images/successGreen.png";
import "../../../components/form-container/form-container.css";
import CreateAccForm from "./CreateAccForm";
import CustomTable from "../../../components/custom-table/CustomTable";
const { Text } = Typography;

export default function CreateAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(null);

  // Handle form submission
  const handleFormSubmit = (values) => {
    setFormValues(values);
    setIsSubmitted(true);
  };

  // Prepare account data for display in the table
  const accData = formValues
    ? [
        { key: "1", label: "شماره سپرده", value: "111111111111" },
        { key: "2", label: "شماره کارت", value: "111111111111" },
        { key: "3", label: "CVV2", value: "1111" },
        { key: "4", label: "تاریخ انقضا", value: "1408/05" },
        { key: "5", label: "رمز اولیه ثابت", value: "111111" },
        {
          key: "6",
          label: "نوع حساب",
          value: formValues["Account-Type"] === "1" ? "جاری" : "قرض‌الحسنه",
        },
      ]
    : [];

  return (
    <>
      {/* Conditional rendering based on submission status */}
      <div style={{ textAlign: "center" }}>
        <Image src={isSubmitted ? greenIcon : bankCart} preview={false} />
        <Text className="card-title card-title-middle">
          {isSubmitted ? "اطلاعات حساب بانکی شما:" : "افتتاح حساب بانکی"}
        </Text>
      </div>

      {/* Show form or account info based on submission status */}
      {!isSubmitted ? (
        <CreateAccForm onFormSubmit={handleFormSubmit} />
      ) : (
        <CustomTable tableData={accData} />
      )}
    </>
  );
}
