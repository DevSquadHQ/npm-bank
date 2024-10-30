// import React from "react";
// import "./custom-table.css";
// import { Table } from "antd";
// export default function CustomTable(props) {
//   const { tableData } = props;

//   const columns = [
//     {
//       title: "",
//       dataIndex: "label",
//       key: "label",
//       align: "right",
//       className: "table-label",
//       //   render: (text) => <Text style={{ color: "#fff" }}>{text}</Text>,
//     },
//     {
//       title: "",
//       dataIndex: "value",
//       key: "value",
//       align: "right",
//       className: "table-value",
//       //   render: (text) => <Text style={{ color: "rgba(255, 255, 255, 0.85)" }}>{text}</Text>,
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={tableData}
//       pagination={false}
//       showHeader={false}
//       style={{ backgroundColor: "transparent" }} // Set RTL direction for the table
//       rowClassName={(record, index) =>
//         index % 2 !== 0 ? "table-row-light" : "table-row-dark"
//       }
//     />
//   );
// }

import React from "react";
import "./custom-table.css";
import { Table } from "antd";

export default function CustomTable({
  tableData,
  pagination = false,
  columnsTable,
}) {
  const pageSize = 3;
  const paginationConfig = pagination
    ? {
        pageSize: pageSize,
        showSizeChanger: false,
      }
    : false;

  const totalText = (total, range) =>
    `نمایش ${range[0]} تا ${range[1]} از ${total} مورد`;

  const columns = columnsTable
    ? columnsTable
    : Object.keys(tableData[0])
        .filter((key) => key !== "id")
        .map((key, index) => ({
          title: "",
          dataIndex: key,
          key,
          align: "right",
          className: index === 0 ? "table-label" : "",
        }));

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        className="custom-table-wrapper"
        pagination={pagination && paginationConfig}
        showHeader={false}
        style={{
          backgroundColor: "transparent",
          width: "100%",
        }}
        rowClassName={(record, index) =>
          index % 2 !== 0 ? "table-row-light" : "table-row-dark"
        }
        rowKey="id" // Assuming each data object has a unique `id` property
      />
      {pagination && (
        <span className="pagination-total">
          {totalText(tableData.length, [1, pageSize])} {/* Adjust as needed */}
        </span>
      )}
    </>
  );
}
