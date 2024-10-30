import React from "react";
import "./custom-table.css";
import { Table } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export default function CustomTable({ tableData, isReport = false }) {
  // Base columns for 2-column table
  const columns = [
    {
      dataIndex: "label",
      key: "label",
      align: "right",
      className: "table-label",
    },
    {
      dataIndex: "value",
      key: "value",
      align: "right",
    },
    // Conditionally add the status column if `isReport` is true
    ...(isReport
      ? [
        {
          dataIndex: "status",
          key: "status",
          align: "right",
          render: (status) =>
            status === "موفق" ? (
              <>
                  <CheckCircleFilled style={{ color: "#7fd952",marginLeft: 8 }} />
                  <span>{status}</span>
                </>
              ) : (
                <>
                  <CloseCircleFilled style={{ color: "#9a3338",marginLeft: 8 }} />
                  <span>{status}</span>
                </>
              ),
            },
          ]
          : []),
        ];
        
        //if isReport={true} obj format:
        // { key: "1", label: "شماره سپرده", value: "111111111111", status: "ناموفق" },
        // { key: "2", label: "شماره کارت", value: "111111111111", status: "موفق" },
        // { key: "3", label: "CVV2", value: "1111", status: "موفق" },
        
        return (
          <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          showHeader={false}
          style={{ backgroundColor: "transparent" }}
          rowClassName={(record, index) =>
            index % 2 !== 0 ? "table-row-light" : "table-row-dark"
          }
          />
        );
      }
      


      // import React from "react";
      // import "./custom-table.css";
      // import { Table } from "antd";
      
      // export default function CustomTable({ tableData, pagination = false }) {
      //   const columns = Object.keys(tableData[0])
      //     .filter((key) => key !== "id")
      //     .map((key, index) => ({
      //       title: "",
      //       dataIndex: key,
      //       key,
      //       align: "right",
      //       className: index === 0 ? "table-label" : "",
      //     }));
      
      //   return (
      //     <Table
      //       columns={columns}
      //       dataSource={tableData}
      //       pagination={pagination}
      //       showHeader={false}
      //       style={{ backgroundColor: "transparent" }}
      //       rowClassName={(record, index) =>
      //         index % 2 !== 0 ? "table-row-light" : "table-row-dark"
      //       }
      //       rowKey="id" // Assuming each data object has a unique `id` property
      //     />
      //   );
      // }