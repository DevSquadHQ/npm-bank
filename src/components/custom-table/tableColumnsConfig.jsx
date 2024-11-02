import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./custom-table.css";
const { Text } = Typography;

// ************ accountInfo

export const accountInfoColumns = [
  {
    dataIndex: "label",
    key: "label",
    render: (text) => <Text className="table-label">{text}</Text>,
  },
  {
    dataIndex: "value",
    key: "value",
    render: (text) => <Text className="table-sub-label">{text}</Text>,
  },
];

// ************ report

export const reportColumns = [
  {
    dataIndex: "label",
    key: "label",
    render: (text) => <Text className="table-label">{text}</Text>,
  },
  {
    dataIndex: "value",
    key: "value",
    render: (text) => <Text className="table-sub-label">{text}</Text>,
  },
  {
    dataIndex: "status",
    key: "status",
    render: (status) =>
      status === "موفق" ? (
        <>
          <CheckCircleFilled style={{ color: "#7fd952", marginLeft: 8 }} />
          <span>{status}</span>
        </>
      ) : (
        <>
          <CloseCircleFilled style={{ color: "#9a3338", marginLeft: 8 }} />
          <span>{status}</span>
        </>
      ),
  },
];

// ************ accountList

export const accountListColumns = [
  {
    dataIndex: "accountNumber",
    key: "accountNumber",
    render: (accountNumber, record) => (
      <div>
        <Text className="table-label">{accountNumber}</Text>
        <br />
        <Text type="secondary" className="table-sub-label">
          {record.accountType}
        </Text>
      </div>
    ),
  },
  {
    dataIndex: "status",
    key: "status",
    render: (status) => <Text className="table-label">{status}</Text>,
  },
  {
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <Link to={`/info/${record.id}`} style={{ color: "#4a90e2" }}>
        جزئیات
      </Link>
    ),
  },
];
