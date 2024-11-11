import { theme as antdTheme, Typography } from "antd";

const token = {
  NavyBlue: "#111928",
  form: "#1F2A37",
  input: "#374151",
  button: "#1C64F2",
  inputBgColor: "#374151",
  inputBorderColor: "#4B5563",
  greyText: "#9CA3AF",
  fontFamily: "vazir",
  // Andt tokens
  colorPrimary: "#1c64f2",
  colorInfo: "#1c64f2",
  colorBgBase: "#111928",
  colorBgContainer: "#1f2a37",
  colorError: "#FF7073",
  // colorTextBase: "#fff",
};

const theme = {
  token,
  algorithm: antdTheme.darkAlgorithm,
  components: {
    Form: {
      itemMarginBottom: 10,
    },
    Input: {
      colorBgContainer: token.inputBgColor,
      colorBorder: token.inputBorderColor,
      paddingBlock: 10,
      paddingInline: 15,
      activeShadow: "0 0 0 1px rgba(100, 242, 100, 0.1)",
    },
    Select: {
      controlHeight: 44,
      paddingSM: 16,
      controlPaddingHorizontal: 36,
      colorBgContainer: token.inputBgColor,
      colorBorder: token.inputBorderColor,
      colorText: "white",
      optionSelectedFontWeight: "inherit",
      optionSelectedBg: token.input,
      optionActiveBg: "rgba(55,65,81,0.5)",
      colorBgElevated: token.NavyBlue,
      activeShadow: "0 0 0 0 rgba(5, 145, 255, 0.1)",
    },
    InputNumber: {
      controlHeight: 44,
      paddingInline: 15,
      handleWidth: 36,
      colorBgContainer: token.inputBgColor,
      colorBorder: token.inputBorderColor,
      handleBorderColor: "rgba(255,255,255,0.5)",
    },
    Button: {
      controlHeight: "41px",
      paddingInline: 16,
      paddingBlock: 8,
    },
    Card: {
      colorBgContainer: token.colorBgContainer,
      colorBorderSecondary: "none",
    },
    Dropdown: {
      colorBgElevated: token.inputBgColor,
      colorText: token.greyText,
      colorSplit: "rgba(255, 255, 255, 0.1)",
      paddingBlock: 8,
      controlPaddingHorizontal: 16,
    },
    Layout: {
      siderBg: token.colorBgContainer,
      headerBg: token.colorBgContainer,
    },
    Menu: {
      colorText: token.greyText,
      itemHoverBg: token.colorBgBase,
      itemSelectedBg: token.inputBgColor,
      itemSelectedColor: "#FFF",
    },
    Table: {
      colorText: "rgba(255,255,255,0.5)",
      rowHoverBg: token.NavyBlue,
      borderColor: "rgba(255,255,255,0.1)",
      rowSelectedBg: token.NavyBlue,
      rowSelectedHoverBg: "#191f2a",
    },
    Result: {
      colorTextHeading: "#fff",
    },
    Pagination: {
      colorBgContainer: "transparent",
      colorText: "rgba(255,255,255,0.5)",
      itemActiveBg: "transparent",
      colorPrimary: "#fff",
      itemActiveBg: "rgba(255,255,255,0.3)",
      colorPrimaryHover: "#fff",
      controlHeight: 40,
    },
    Modal: {
      contentBg: token.form,
      headerBg: token.form,
      titleColor: "#fff",
      colorIcon: "#fff",
    },
    Tooltip: {
      colorBgSpotlight: token.NavyBlue,
    },
  },
};

export default theme;
