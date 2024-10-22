import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    NavyBlue: "#111928",
    form: "#1F2A37",
    input: "#374151",
    button: "#1C64F2",
    fontFamily:'vazir'
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={theme} direction="rtl">
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
