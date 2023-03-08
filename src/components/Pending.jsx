import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { request } from "../config/request";

const Pending = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handlePending = async () => {
    setLoading(true);
    const {
      result,
      success,
      message: msg,
    } = await request(
      "Get",
      "http://test-gw.newrank.cn:18080/api/kol/xdnphb/kol/resource/backdoor/foreEndTest",
      { value: "pending" }
    );
    if (success && result) {
      setIsModalOpen(false);
      message.success(msg);
    } else {
      message.error(msg);
    }
    setLoading(false);
  };

  const handleError = () => {
    const info = null;
    const a = info.name;
    handlePending(a);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="一个 弹窗"
        open={isModalOpen}
        onOk={handlePending}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handlePending}
          >
            提交
          </Button>,
          <Button key="submitError" danger onClick={handleError}>
            出错
          </Button>,
        ]}
      >
        <p>互动为什么无反应？</p>
        <p>
          <span style={{ color: "#1677ff" }}>提交：</span>一直转圈
          后端接口返回时间过长
        </p>
        <p>
          <span style={{ color: "#ff4d4f" }}>出错：</span>
          打开控制台，提示报错，报错提示信息里有关键字undefined，not
          function，找前端
        </p>
      </Modal>
    </div>
  );
};

export default Pending;
