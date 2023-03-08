import { Menu } from "antd";
import { useState } from "react";
import UrlLink from "./UrlLink";
import Show from "./Show";
import Pending from "./Pending";
import Error from "./Error";
import Crash from "./Crash";

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

const items = [
  getItem("页面展示有误", "grp1"),
  getItem("页面提示错误信息", "grp2"),
  getItem("页面互动无反应", "grp3"),
  getItem("崩溃白屏", "grp4"),
  getItem("跳转", "grp5"),
];

const Dashboard = () => {
  const [active, setActive] = useState("grp1");

  const renderChildren = () => {
    switch (active) {
      case "grp1":
        return <Show />;
      case "grp2":
        return <Error />;
      case "grp3":
        return <Pending />;
        case "grp4":
          return <Crash />;
      case "grp5":
        return <UrlLink />;
      default:
        return null;
    }
  };

  const onClick = (e) => {
    setActive(e.key);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Menu
        selectedKeys={active}
        onClick={onClick}
        style={{ width: 250 }}
        mode="inline"
        items={items}
      />
      {renderChildren()}
    </div>
  );
};

export default Dashboard;
