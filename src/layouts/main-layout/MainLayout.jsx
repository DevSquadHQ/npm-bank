import { useState } from "react";
import { Layout } from "antd";
import "antd/dist/reset.css";
const { Content } = Layout;
import { Outlet } from "react-router-dom";
import CustomSidebar from "../../components/custom-sidebar/CustomSidebar";
import Header from "../../components/custom-header/CustomHeader";
import FormContainer from "../../components/form-container/FormContainer";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header toggle={toggle} collapsed={collapsed} />
      <Layout>
        <CustomSidebar collapsed={collapsed} />
        <Content className="dashboard-content">
          <FormContainer>
            <Outlet />
          </FormContainer>
        </Content>
      </Layout>
    </Layout>
  );
}
