import { Avatar, Dropdown } from "antd";
import avatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <div className="text-white">
        <strong>Jese Leos</strong>
        <p>name@example.com</p>
      </div>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link to="/myAccount">حساب من</Link>,
    key: "3",
  },
  {
    label: <Link to="/accountList">لیست حساب ها</Link>,
    key: "4",
  },
  {
    label: <Link to="/">خروج</Link>,
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: <Link to="/">حذف حساب</Link>,
    key: "7",
  },
];

export default function CustomDropdown() {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar className="image" src={avatar} />
      </a>
    </Dropdown>
  );
}
