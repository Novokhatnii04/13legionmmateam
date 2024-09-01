import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Context from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
