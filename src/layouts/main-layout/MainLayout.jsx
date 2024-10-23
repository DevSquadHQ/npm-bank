import { useState } from "react";
//================== import defualt Components========
import { Layout, Menu, Button } from "antd";
//================== import icons======
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
//=====================================
import "antd/dist/reset.css";

import { Outlet } from "react-router-dom";
import CustomSidebar from "../../components/custom-sidebar/CustomSidebar";

const { Header, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#001529",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button type="primary" onClick={toggle}>
            {collapsed ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
          </Button>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            className="btncna"
            type="primary"
            style={{ marginRight: "16px" }}
          >
            ایجاد حساب جدید
          </Button>
          <img className="image" src="/public/profile.jpg" />
        </div>
      </Header>

      <Layout className="site-layout" style={{ marginTop: 64 }}>
        <CustomSidebar collapsed={collapsed} />
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
