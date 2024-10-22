import { Layout, Row, theme, Typography } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
const { Title } = Typography;
const { useToken } = theme;
import "./identity-layout.css";

export default function IdentityLayout() {
  const { token } = useToken();

  const TitleStyle = {
    color: "white",
    fontSize: "32px",
    textAlign: "center",
  };
  return (
    // <Layout className="identity-layout">
    //   <Content className="flex items-center">
    //     <Row className="flex-col">
    //       <Title className="main-title">اینترنت بانک من</Title>
    //       <Outlet />
    //     </Row>
    //   </Content>
    // </Layout>
    <div className="h-svh w-svw bg-Navy-blue flex sm:items-center sm:justify-center sm:p-0 py-5">
      <div className="flex flex-col sm:space-y-14 space-y-5 mx-auto">
        <span className="text-white text-[32px] text-center">اینترنت بانک من</span>
        <Outlet />
      </div>
    </div>
  );
}
