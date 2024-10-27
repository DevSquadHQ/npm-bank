import { Layout, Menu } from "antd";
const { Sider } = Layout;
import {
  SettingFilled,
  HomeOutlined,
  PieChartFilled,
  DollarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function CustomSidebar(props) {
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">خانه</Link>,
    },
    {
      key: "report",
      icon: <PieChartFilled />,
      label: <Link to="/report">گزارش</Link>,
    },
    {
      key: "money-transfer",
      icon: <DollarOutlined />,
      label: <Link to="/moneyTransfer">انتقال وجه</Link>,
    },
    {
      key: "setting",
      icon: <SettingFilled />,
      label: "تنظیمات",
      children: [
        {
          key: "accountSuspension",
          label: <Link to="/accountSuspension">مسدودسازی حساب</Link>,
        },
        {
          key: "changePassword",
          label: <Link to="/changePassword">تغییر رمز اولیه ثابت</Link>,
        },
      ],
    },
  ];
  const { collapsed } = props;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={200}
      className="custom-sidebar"
    >
      <Menu
       className="main-menu"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
}
