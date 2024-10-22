import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ConfigProvider } from "antd";

const token = {
  NavyBlue: "#111928",
  form: "#1F2A37",
  input: "#374151",
  button: "#1C64F2",
  fontFamily: "vazir",
};

const theme = {
  token,
  components: {
    Form: {
      labelColor: "#fff",
    },
    Input: {
      colorBgContainer: token.input,
      colorTextPlaceholder: "rgba(255,255,255,0.5)",
      colorBorder: "transparent",
      colorText: "white",
    },
    Button: {
      controlHeight: "41px",
    },
    Card: {
      cardPaddingBase: "0",
      colorBgContainer: token.form,
      borderRadiusLG: "8px",
    },
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={theme} direction="rtl">
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
