import { Flex, Space, Typography } from "antd";
import { Form, Button } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import { validateDateRange } from "../../../utils/validationUtils";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import CustomTable from "../../../components/custom-table/CustomTable";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
const { Text } = Typography;

const reportsData = [
  { id: "1", date: "13/05/1403", amount: "1,1111 تومان", status: "موفق" },
  { id: "2", date: "01/02/1403", amount: "1111111 تومان", status: "موفق" },
  { id: "3", date: "13/05/1403", amount: "1111 تومان", status: "ناموفق" },
  { id: "4", date: "13/05/1403", amount: "1111 تومان", status: "موفق" },
  { id: "5", date: "13/05/1403", amount: "1111 تومان", status: "ناموفق" },
  { id: "6", date: "13/05/1403", amount: "1111 تومان", status: "موفق" },
  { id: "7", date: "13/05/1403", amount: "1111 تومان", status: "ناموفق" },
  { id: "8", date: "13/05/1403", amount: "1111 تومان", status: "موفق" },
];

// Helper function to render status with icons
const renderStatus = (status) => {
  <CloseCircleFilled />;
  return status === "موفق" ? (
    <Flex gap="small">
      <CheckCircleFilled style={{ color: "green", marginRight: 8 }} />
      {status}
    </Flex>
  ) : (
    <Flex gap="small">
      <CloseCircleFilled style={{ color: "red", marginRight: 8 }} />
      {status}
    </Flex>
  );
};

const columns = [
  {
    title: "date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "status",
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
      <Flex vertical align="center" gap="large" style={{ width: "100%" }}>
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
          columnsTable={columns}
          tableData={reportsData}
          pagination={true}
        />
      </Flex>
    </>
  );
}
