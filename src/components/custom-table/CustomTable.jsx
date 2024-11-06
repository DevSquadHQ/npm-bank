import React, { useState } from "react";
import { Table, Typography } from "antd";
const { Text } = Typography;

export default function CustomTable({
  tableData,
  columnsConfig,
  selectable = false,
  pagination = false,
  alternateRowColors = true,
}) {
  const [selectedRow, setSelectedRow] = useState(null);

  // pagination 
  const pageSize = 3;
  const paginationConfig = pagination
    ? {
        pageSize: pageSize,
        showSizeChanger: false,
      }
    : false;

    
  const totalText = (total, range) =>
    `نمایش ${range[0]} تا ${range[1]} از ${total} مورد`;

  // selectable rows 
  const rowSelection = selectable
    ? {
        type: "radio",
        selectedRowKeys: selectedRow ? [selectedRow] : [],
        onChange: (selectedRowKeys) => {
          setSelectedRow(selectedRowKeys[0]);
          console.log({selectedRowKeys});        
        },
      }
    : undefined;

  // alternateRowColors 
  const rowClassName = alternateRowColors
    ? (record, index) =>
        index % 2 !== 0 ? "table-row-light" : "table-row-dark"
    : "table-row-same-color";

  return (
  <>
    <Table
      columns={columnsConfig} //  column config 
      dataSource={tableData}
      rowSelection={rowSelection}
       className="custom-table-wrapper"
      pagination={pagination ? paginationConfig : false}
      showHeader={false}
      rowKey="id"
      style={{ backgroundColor: "transparent", width: "100%" }}
      rowClassName={rowClassName}
    />
    {pagination && (
      <span className="pagination-total">
        {totalText(tableData.length, [1, pageSize])} {/* Adjust as needed */}
      </span>
    )}
    </>
  );
}
