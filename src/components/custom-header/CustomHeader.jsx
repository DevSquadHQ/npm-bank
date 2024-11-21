import CustomDropdown from "../custom-dropdown/CustomDropdown";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Image, Layout } from "antd";
import "./custom-header.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function CustomHeader(props) {
  const { toggle, collapsed } = props;
  return (
    <Header className="custom-header">
      <div className="move-left">
        <Button
          type="text"
          size="large"
          onClick={toggle}
        >
          {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </Button>
        <Image
          className="bank-logo"
          src="images/favicon.svg"
          preview={false}
        />
      </div>
      <Link to={"/createAccount"}>
        <Button type="primary" >
          ساخت حساب جدید
          <span>+</span>
        </Button>
      </Link>
      <CustomDropdown />
    </Header>
  );
}
