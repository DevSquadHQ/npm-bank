import React, { useState } from "react";
import { Table, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;
import "./AcctListTable.css"

export default function AccountListTable({ accounts }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      title: "",
      dataIndex: "accountNumber",
      key: "accountNumber",
      align: "right",
      render: (accountNumber, record) => (
        <div>
          <Text className="table-label">{accountNumber}</Text>
          <br />
          <Text type="secondary" className="table-sub-label">{record.accountType}</Text>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      align: "right",
      render: (status) => <Text className="table-label">{status}</Text>,
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      align: "right",
      width: "15%",
      render: (_, record) => (
        <Link to={`/accountinfo/${record.id}`} style={{ color: "#4a90e2" }}>
          جزئیات
        </Link>
      ),
    },
  ];

  const rowSelection = {
    type: "radio",
    selectedRowKeys: selectedRow ? [selectedRow] : [],
    onChange: (selectedRowKeys) => {
      setSelectedRow(selectedRowKeys[0]);
    },
  };

  return (
    <Table
      columns={columns}
      dataSource={accounts}
      rowSelection={rowSelection}
      pagination={false}
      showHeader={false}
      rowKey="id"
      style={{ backgroundColor: "transparent"}}
    //   rowClassName={(record, index) =>
    //     index % 2 !== 0 ? "table-row-light" : "table-row-dark"
    //   }
    rowClassName="list-row"
    />
  );
}
