import { Divider } from "antd";
import "./Show.css";

const Show = () => {
  const a = 200;
  return (
    <div className="wrapper">
      <p className="title">样式错误</p>
      <span className="cube">头部必选榜No.6</span>
      <div className="cube-wrapper">
        <span className="cube">头部必选榜No.6</span>
      </div>

      <Divider />
      <p className="title">静态数据缺失</p>
      <p>静态数据：不需要后端返回的数据，比如固定文字，平台个数</p>

      <Divider />
      <p className="title">数据展示错误</p>
      <div>
        正确的值: <span className="text">{a}</span>
      </div>
      <p>错误情况</p>

      <div>
        1. <span className="text">{(a * "eu").toString()}</span> 乱码，找前端
      </div>
      <p>以下两种错误情况，要根据后端是否返回正确值来判断：</p>
      <div>
        2. <span className="text">{a * 1000000}</span>
        值有误
      </div>
      <div>
        3. <span className="text">-</span>
        值不应该为空
      </div>
    </div>
  );
};

export default Show;
