import { Card, Typography } from "antd";
const { Text } = Typography;
import "./form-container.css";

export default function FormContainer(props) {
  const { title, children } = props;

  return (
    <Card className="custom-card">
      {title ? <Text className="card-title">{title}</Text> : ""}
      {children}
    </Card>
  );
}
