import { Card, Typography } from "antd";
const { Text } = Typography;
import "./form.css"

export default function Form(props) {
  const { title, children } = props;
  return (
    <Card className="form-container">
      <Text className="title">{title}</Text>
      {children}
    </Card>
    // <div className="text-white w-[384px] flex flex-col space-y-6 bg-form p-[32px] rounded-[8px] sm:grow-0 grow">
    //   <span className="text-[20px]">{title}</span>
    //   {children}
    // </div>
  );
}
