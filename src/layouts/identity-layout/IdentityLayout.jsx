import { Outlet } from "react-router-dom";
import { Layout, Row, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;
import "./identity-layout.css";

export default function IdentityLayout() {
  return (
    <Layout className="main-layout">
      <Content className="flex items-center">
        <Row className="flex-col">
          <Title className="main-title">اینترنت بانک من</Title>
          <Outlet />
        </Row>
      </Content>
    </Layout>
  );
}
