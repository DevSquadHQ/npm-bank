import { Typography } from "antd";
import { Form, Button } from "antd";
import CustomDatePicker from "../../../components/custom-datePicker/CustomDatePicker";
import { validateDateRange } from "../../../utils/validationUtils";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
const { Text } = Typography;

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
      <Form
        action=""
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
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            تایید{" "}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
