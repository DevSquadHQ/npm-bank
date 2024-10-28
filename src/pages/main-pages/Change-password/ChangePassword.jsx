import ChangePassForm from "./ChangePassForm";
import { Typography } from "antd";
const { Text } = Typography;

export default function ChangePassword() {
  return (
    <>
      <Text className="card-title">تغییر رمز اولیه ثابت</Text>
      <ChangePassForm />
    </>
  );
}
