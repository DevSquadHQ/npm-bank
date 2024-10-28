import React from "react";
import "./custom-table.css";
import { Table } from "antd";
export default function CustomTable(props) {
  const { tableData } = props;
  const columns = [
    {
      title: "",
      dataIndex: "label",
      key: "label",
      align: "right",
      className: "table-label",
      //   render: (text) => <Text style={{ color: "#fff" }}>{text}</Text>,
    },
    {
      title: "",
      dataIndex: "value",
      key: "value",
      align: "right",
      className: "table-value",
      //   render: (text) => <Text style={{ color: "rgba(255, 255, 255, 0.85)" }}>{text}</Text>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      showHeader={false}
      style={{ backgroundColor: "transparent" }} // Set RTL direction for the table
      rowClassName={(record, index) =>
        index % 2 !== 0 ? "table-row-light" : "table-row-dark"
      }
    />
  );
}
