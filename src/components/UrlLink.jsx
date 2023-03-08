import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const UrlLink = () => {
  const { search, hash, pathname, key, state } = useLocation();
  const navigate = useNavigate();

  const handleParamsLink = () => {
    navigate(`/about/params?id=123&time=2023&name=%E6%B5%8B%20%E8%AF%95`);
  };
  const handleHashLink = () => {
    navigate(
      `/about/params?id=123&time=2023&name=%E6%B5%8B%20%E8%AF%95#lalala`
    );
  };
  const handleLink = () => {
    navigate(`/about/params`);
  };
  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      <div>
        <p style={{ margin: "20px", fontSize: "20px" }}>url</p>
        <div>
          <Button
            onClick={handleParamsLink}
            style={search && !hash ? { color: "purple" } : {}}
            type="link"
          >
            有参数跳转
          </Button>
          <Button
            onClick={handleHashLink}
            style={hash ? { color: "purple" } : {}}
            type="link"
          >
            有哈希值跳转
          </Button>
          <Button
            onClick={handleLink}
            style={!search && !hash ? { color: "purple" } : {}}
            type="link"
          >
            无参数跳转
          </Button>
        </div>
        <div style={{ margin: "20px" }}>
          {search && (
            <div style={{ display: "flex" }}>
              search参数
              <div style={{ color: "blue", marginLeft: "20px" }}>
                <div style={{ color: "black" }}>{search}</div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px auto",
                    marginTop: "10px",
                  }}
                >
                  <span>id</span>
                  <span>123</span>
                  <span>time</span>
                  <span>2023</span>
                  <span>name</span>
                  <span>%E6%B5%8B%20%E8%AF%95 (中文/特殊字符等编码)</span>
                </div>
              </div>
            </div>
          )}

          {hash && (
            <p>
              hash参数
              <span style={{ color: "red", marginLeft: "20px" }}>{hash}</span>
            </p>
          )}
        </div>
        {pathname !== "/" && (
          <div style={{ margin: "16px" }}>
            <Button type="primary" onClick={() => navigate("/")}>
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlLink;
