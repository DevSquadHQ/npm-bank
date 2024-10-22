import { Layout, Row, theme, Typography } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
const { Title } = Typography;
const { useToken } = theme;
import { layoutStyle, titleStyle } from "./identity-layout";

export default function IdentityLayout() {
  const { token } = useToken();

  return (
    <Layout style={layoutStyle(token)}>
      <Content className="flex items-center">
        <Row className="flex-col">
          <Title style={{ titleStyle }}>اینترنت بانک من</Title>
          <Outlet />
        </Row>
      </Content>
    </Layout>
  );
}
