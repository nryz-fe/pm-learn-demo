import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UrlLink from "./components/UrlLink";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "about",
      children: [
        {
          path: "params",
          element: <UrlLink />,
        },
        {
          path: "noParams",
          element: (
            <div>
              无参数跳转
              <Link to="/">Back</Link>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
