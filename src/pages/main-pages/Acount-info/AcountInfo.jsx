import { Typography } from "antd";
import React, { useState } from "react";
import CustomTable from "../../../components/custom-table/CustomTable";
import { useLocation } from "react-router-dom";
const { Text } = Typography;
import { CheckCircleFilled } from "@ant-design/icons";
import { accountInfoColumns } from "../../../components/custom-table/tableColumnsConfig";


export default function AcountInfo(props) {
  const { isFirst = true } = props;

  const location = useLocation();
  const { state } = location; //data pass from CreateAccForm

  const [accInfo, setAccInfo] = useState({
    accountId: 0,
    accountType: state["Account-Type"],
    amount: state["Amount"],
    accountNumber: "111111111111",
    cardNumber: "111111111111",
    cvv2: "1111",
    expireDate: "1408/05",
    accountStaticPassword: "111111",
  });
  console.log("res", accInfo);

  // Prepare account data for display in the table
  const accData = state
    ? [
        { key: "1", label: "شماره سپرده", value: accInfo.accountNumber },
        { key: "2", label: "شماره کارت", value: accInfo.cardNumber },
        { key: "3", label: "CVV2", value: accInfo.cvv2 },
        { key: "4", label: "تاریخ انقضا", value: accInfo.expireDate },
        {
          key: "5",
          label: "رمز اولیه ثابت",
          value: accInfo.accountStaticPassword,
        },
        {
          key: "6",
          label: "نوع حساب",
          value: accInfo.accountType === "1" ? "جاری" : "قرض‌الحسنه",
        },
      ]
    : [];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isFirst && (
          <CheckCircleFilled style={{ color: "#52c41a", fontSize: 54 }} />
        )}
        <Text className="card-title card-title-middle">
          اطلاعات حساب بانکی شما:
        </Text>
      </div>
      <CustomTable
        tableData={accData}
        columnsConfig={accountInfoColumns}
        selectable={false}
        pagination={false}
      />
    </>
  );
}
