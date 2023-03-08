import { Button, message } from "antd";
import { useEffect } from "react";
import { request } from "../config/request";

const Error = () => {
  const load = async (value, first) => {
    const {
      result,
      success,
      message: msg,
    } = await request(
      "Get",
      "http://test-gw.newrank.cn:18080/api/kol/xdnphb/kol/resource/backdoor/foreEndTest",
      { value }
    );
    if (success && result) {
      message.success(msg);
    } else {
      message.error(first ? `这是一进入页面就报错的请求。${msg}` : msg);
    }
  };

  const load404 = async () => {
    const {
      result,
      success,
      message: msg,
    } = await request("post", "/api/ko56", {
      value: 125,
    });
    if (success && result) {
      console.log(result);
    } else {
      message.error(msg);
    }
  };

  useEffect(() => {
    load("error", true);
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <p style={{ display: "block", fontSize: "20px" }}>Error</p>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        正确的请求：
        <Button onClick={() => load("ok")}>OK</Button>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        后端请求报错：
        <Button onClick={() => load("error")} danger>
          Error
        </Button>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        前端请求失败：
        <Button onClick={load404} danger>
          请求404
        </Button>
      </div>
    </div>
  );
};

export default Error;
