import { Card, Typography } from "antd";
const { Text } = Typography;
import "./form.css";

export default function Form(props) {
  const { title, children } = props;
  return (
    <Card className="form-container">
      <Text className="title">{title}</Text>
      {children}
    </Card>
  );
}
