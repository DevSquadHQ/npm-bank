import { Flex, Typography } from "antd";
import { Form, Button } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import { validateDateRange } from "../../../utils/validationUtils";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import CustomTable from "../../../components/custom-table/CustomTable";
const { Text } = Typography;
import { reportColumns } from "../../../components/custom-table/tableColumnsConfig";

const reportsData = [
  { key: "1", label: "13/05/1403", value: "1,1111 تومان", status: "موفق" },
  { key: "2", label: "01/02/1403", value: "1111111 تومان", status: "موفق" },
  { key: "3", label: "13/05/1403", value: "1111 تومان", status: "ناموفق" },
  { key: "4", label: "13/05/1403", value: "1111 تومان", status: "موفق" },
  { key: "5", label: "13/05/1403", value: "1111 تومان", status: "ناموفق" },
  { key: "6", label: "13/05/1403", value: "1111 تومان", status: "موفق" },
  { key: "7", label: "13/05/1403", value: "1111 تومان", status: "ناموفق" },
  { key: "8", label: "13/05/1403", value: "1111 تومان", status: "موفق" },
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
          // autoComplete="off"
          style={{ width: "80%", maring: "0 auto" }}
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
            label="تاریخ تولد"
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
            <Button type="primary" htmlType="submit" block>
              تایید{" "}
            </Button>
          </Form.Item>
        </Form>
        <CustomTable
          tableData={reportsData}
          columnsConfig={reportColumns}
          pagination={true}
          isReport={true}
        />
      </Flex>
    </>
  );
}
