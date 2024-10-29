import { Flex, Space, Typography } from "antd";
import { Form, Button } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import { validateDateRange } from "../../../utils/validationUtils";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import CustomTable from "../../../components/custom-table/CustomTable";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;

const reportsData = [
  { id: "1", label: "13/05/1403", amount: "1,1111 تومان", status: "success" },
  { id: "2", label: "01/02/1403", amount: "1111111 تومان", status: "موفق" },
  { id: "3", label: "13/05/1403", amount: "1111 تومان", status: "ناموفق" },
];

// Helper function to render status with icons
const renderStatus = (status) => {
  return status === "موفق" ? (
    <span>
      <CheckCircleOutlined style={{ color: "green", marginRight: 8 }} />
      {status}
    </span>
  ) : (
    <span>
      <CloseCircleOutlined style={{ color: "red", marginRight: 8 }} />
      {status}
    </span>
  );
};

const columns = [
  {
    title: "تاریخ",
    dataIndex: "label",
    key: "label",
  },
  {
    title: "مبلغ",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    key: "status",
    render: renderStatus,
  },
];

export default function Report() {
  const [form] = Form.useForm();
  // Set initial values for the date range
  const initialValues = [
    new DateObject({ calendar: persian })
      .subtract(7, "days")
      .format("YYYY/MM/DD"), // 7 days ago
    new DateObject({ calendar: persian }).format("YYYY/MM/DD"), // today
  ];

  const onFinish = (data) => {
    console.log("Success", data);
  };

  return (
    <>
      <Text className="card-title">گزارش مالی</Text>
      <Flex vertical align="center" gap="large">
        <Form
          action=""
          style={{ width: "80%", maring: "0 auto" }}
          // autoComplete="off"
          onFinish={onFinish}
          noValidate
          requiredMark={false} //delete star
          form={form}
          initialValues={{ reportRange: initialValues }} // Set initial values here
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Form.Item
            name="reportRange"
            rules={[{ validator: validateDateRange }]}
          >
            <CustomDatePicker
              isRange={true}
              initialValue={initialValues}
              onChange={(dateRange) =>
                form.setFieldValue(
                  "reportRange",

                  dateRange && dateRange.length === 2
                    ? [
                        dateRange[0].format("YYYY/MM/DD"), // تاریخ شروع بازه
                        dateRange[1].format("YYYY/MM/DD"), // تاریخ پایان بازه
                      ]
                    : undefined
                )
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              تایید{" "}
            </Button>
          </Form.Item>
        </Form>

        <CustomTable
          columns={columns}
          tableData={reportsData}
          style={{ width: "100%" }}
          pagination={true}
        />
      </Flex>
    </>
  );
}
