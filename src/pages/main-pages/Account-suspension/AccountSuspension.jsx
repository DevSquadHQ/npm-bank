import { Button, Flex, Form } from "antd";
import CustomTable from "../../../components/custom-table/CustomTable";
import { useState } from "react";

const tableData = [
  { id: "1", label: "شماره سپرده", value: "1111111111" },
  { id: "2", label: "شماره کارت", value: "1111111111111" },
  { id: "3", label: "نوع حساب", value: "جاری" },
];

export default function AccountSuspension() {
  const [form] = Form.useForm();
  const [isBlock, setIsBlock] = useState(false);
  const accountId = "2";

  const onFinish = () => {
    console.log("Account ID:", accountId);
  };

  return (
    <Flex vertical gap="large">
      <CustomTable tableData={tableData} />
      <Form form={form} action="" onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            {isBlock ? "رفع مسدودی" : "مسدود کردن"}
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
