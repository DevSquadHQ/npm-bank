import { useState } from "react";
//================== import defualt Components========
import { Layout, Menu, Button } from "antd";
//================== import icons======
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SettingFilled,
  HomeOutlined,
  PieChartFilled,
  DollarOutlined,
} from "@ant-design/icons";
//=====================================
import "antd/dist/reset.css";

import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

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
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          width={200}
          style={{ background: "#001529" }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">خانه</Link>
            </Menu.Item>
            <Menu.Item href="/report" key="2" icon={<PieChartFilled />}>
              <Link to="/report">گزارش</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarOutlined />}>
              انتقال وجه
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<SettingFilled />} title="تنظیمات">
              <Menu.Item key="4">مسدود سازی</Menu.Item>
              <Menu.Item key="5">تغییر رمز اولیه ثابت</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Content
          className="content"
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            border: "1px solid black",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
