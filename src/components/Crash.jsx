import React, { useEffect, useState } from "react";
import { request } from "../config/request";

const Crash = () => {
  const [show, setShow] = useState();
  useEffect(() => {
    request(
      "Get",
      "http://test-gw.newrank.cn:18080/api/kol/xdnphb/kol/resource/backdoor/foreEndTest",
      { value: "error" }
    ).then(() => {
      setShow(null);
    });
  });
  return <>{show.data}</>;
};

export default Crash;
