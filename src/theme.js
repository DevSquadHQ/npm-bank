import { Divider } from "antd";

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
      colorError: "#FF7073",
      itemMarginBottom: 10,
    },

    Input: {
      colorBgContainer: token.input,
      colorTextPlaceholder: "rgba(255,255,255,0.5)",
      colorBorder: "#4B5563",
      colorText: "white",
    },
    Select: {
      colorBgContainer: token.input,
      colorTextPlaceholder: "rgba(255,255,255,0.5)",
      colorBorder: "#4B5563",
      colorText: "white",
      controlPaddingHorizontal:36,
      controlHeight:45,
      optionSelectedFontWeight: "inherit",
      optionSelectedBg: token.input,
      optionActiveBg: "rgba(55,65,81,0.5)",
      colorBgElevated: token.NavyBlue,
    },
    InputNumber: {
      controlHeight:45,
      colorBgContainer: token.input,
      colorTextPlaceholder: "rgba(255,255,255,0.5)",
      colorBorder: "#4B5563",
      colorText: "white",
      handleBorderColor: "rgba(255,255,255,0.5)",
      handleActiveBg: token.form,
      handleWidth: 36,
      handleBg: "rgba(0,0,0,0.2)",
    },
    Button: {
      controlHeight: "41px",
      paddingInline: 16,
      paddingBlock: 8,
    },
    Card: {
      cardPaddingBase: "0",
      colorBgContainer: token.form,
      borderRadiusLG: "8px",
    },
    Popover: {
      colorBgElevated: token.input,
      colorText: "#fff",
    },
    Dropdown: {
      colorBgElevated: token.input,
      colorText: "rgba(255, 255, 255, 0.5)",
      colorSplit: "rgba(255, 255, 255, 0.1)",
    },
    Menu: {
      itemColor: "#fff",
      itemBg: "inherit",
    },
    Layout: {
      siderBg: token.form,
      headerBg: token.form,
      bodyBg: token.NavyBlue,
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

    Menu: {
      colorBgContainer: "transparent",
      colorText: "#FFF",
      itemHoverBg: token.NavyBlue,
      itemSelectedBg: token.input,
      itemSelectedColor: "#FFF",
    },
  },
};

export default theme;
