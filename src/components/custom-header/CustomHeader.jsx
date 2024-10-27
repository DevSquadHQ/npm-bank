import CustomPopover from "../custom-popover/CustomPopover";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import "./custom-header.css";

const { Header } = Layout;

export default function CustomHeader(props) {
  const { toggle, collapsed } = props;
  return (
    <Header className="custom-header">
      <Button type="text" size="large"  onClick={toggle} className="collapsed-button">
        {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </Button>
      <Button type="primary" variant="link">
        ساخت حساب جدید
        <span>+</span>
      </Button>
      <CustomPopover />
    </Header>
  );
}
