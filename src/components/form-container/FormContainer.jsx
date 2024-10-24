import { Card, Typography } from "antd";
const { Text } = Typography;


export default function FormContainer(props) {
  const { title, children } = props;
  const cardStyle = {
    width: "384px",
    border: "none",
    padding: "15px",
  };
  const titleStyle = {
    color: "white",
    fontSize: "20px",
    display: "block",
    marginBottom: "1rem",
  };
  return (
    <Card style={cardStyle}>
      <Text style={titleStyle}>{title}</Text>
      {children}
    </Card>
  );
}