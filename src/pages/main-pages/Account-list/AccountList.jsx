import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
import "../../../components/form-container/form-container.css";
import CustomTable from "../../../components/custom-table/CustomTable";
import { accountListColumns } from "../../../components/custom-table/tableColumnsConfig";

export default function AccountList() {
  const accountsData = [
    {
      id: "1",
      status: "فعال",
      accountNumber: "1111111111",
      accountType: "جاری",
    },
    {
      id: "2",
      status: "مسدود",
      accountNumber: "1111111111",
      accountType: "قرض الحسنه",
    },
    {
      id: "3",
      status: "فعال",
      accountNumber: "1111111111",
      accountType: "جاری",
    },
    {
      id: "24",
      status: "مسدود",
      accountNumber: "1111111111",
      accountType: "قرض الحسنه",
    },
    // More rows...
  ];
  return (
    <>
      <Text className="card-title">لیست حساب ها</Text>
      <CustomTable
        tableData={accountsData}
        columnsConfig={accountListColumns}
        selectable={true}
        pagination={false}
        alternateRowColors={false} // All rows have the same color
      />
    </>
  );
}
