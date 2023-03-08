export const request = (method, url, data) =>
  new Promise((resolve, reject) => {
    const Http = new XMLHttpRequest();

    if (method === "Get") {
      let newUrl = `${url}?`;
      for (let i in data) {
        newUrl += `${i}=${data[i]}`;
      }
      // const newUrl = value ? `${url}?value=${value}` : url;
      Http.open(method, newUrl);

      Http.setRequestHeader("n-token", "342bdbf6864146f59730fbd6eace18f9");
      Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      Http.send();
    } else if (method === "post") {
      Http.open(method, url);
      Http.send(data);
    }

    Http.onreadystatechange = (e) => {
      if (Http.readyState !== 4) {
        return;
      }
      if (Http.status === 200) {
        const result = JSON.parse(Http.responseText);
        const { code, message, data } = result;
        resolve({
          success: true,
          message: message || "请求成功",
          result: data,
        });
      } else if (Http.status === 404) {
        resolve({
          success: false,
          message: "404 Not Found",
          result: null,
        });
      }
    };
  });
