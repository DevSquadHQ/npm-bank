import { Popover, Avatar } from "antd";
import avatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import "./custom-popover.css";

// Header of Popover content
const PopoverHeader = () => (
  <div className="popover-header">
    <strong>Jese Leos</strong>
    <p>name@example.com</p>
  </div>
);

// Body of Popover content with navigation links
const PopoverBody = () => (
  <div className="popover-body">
    <Link to="/myAccount">حساب من</Link>
    <Link to="/accountList">لیست حساب ها</Link>
    <Link to="/">خروج</Link>
  </div>
);

// Footer of Popover content with account deletion link
const PopoverFooter = () => (
  <div className="popover-footer">
    <Link to="/">حذف حساب</Link>
  </div>
);

// Complete Popover content component
const PopoverContent = () => (
  <div className="popover-content">
    <PopoverHeader />
    <PopoverBody />
    <PopoverFooter />
  </div>
);

export default function CustomPopover() {
  return (
    <Popover
      content={<PopoverContent />}
      trigger="click"
      placement="bottomLeft"
    >
      <Avatar className="image" src={avatar} />
    </Popover>
  );
}
