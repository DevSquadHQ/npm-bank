import { Button, Flex, Form } from "antd";
import CustomTable from "../../../components/custom-table/CustomTable";
import { accountInfoColumns } from "../../../components/custom-table/tableColumnsConfig";
import { useState } from "react";

const tableData = [
  { key: "1", label: "شماره سپرده", value: "1111111111" },
  { key: "2", label: "شماره کارت", value: "1111111111111" },
  { key: "3", label: "نوع حساب", value: "جاری" },
];

export default function AccountSuspension() {
  const [form] = Form.useForm();
  const [isBlock, setIsBlock] = useState(false);
  const accountId = "2";

  const handleClick = () => {
    console.log("Account ID:", accountId);
  };

  return (
    <Flex vertical gap="large">
      <CustomTable
        tableData={tableData}
        columnsConfig={accountInfoColumns}
        selectable={false}
        pagination={false}
      />
      <Button type="primary" htmlType="submit" block onClick={handleClick}>
        {isBlock ? "رفع مسدودی" : "مسدود کردن"}
      </Button>
    </Flex>
  );
}
