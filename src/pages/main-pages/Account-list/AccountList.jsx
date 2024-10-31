import React from 'react'
import {  Typography } from "antd";
const { Text } = Typography;
import "../../../components/form-container/form-container.css";
import AccountListTable from './AcctListTable';

export default function AccountList() {
  const accountsData = [
    { id: "1", status: "فعال", accountNumber: "1111111111", accountType: "جاری" },
    { id: "2", status: "مسدود", accountNumber: "1111111111", accountType: "قرض الحسنه" },
    { id: "3", status: "فعال", accountNumber: "1111111111", accountType: "جاری" },
    { id: "24", status: "مسدود", accountNumber: "1111111111", accountType: "قرض الحسنه" },
    // More rows...
  ];
  return (
    <>
    <Text className="card-title">لیست حساب ها</Text>
    <AccountListTable accounts={accountsData} />
    </>
  )
}



