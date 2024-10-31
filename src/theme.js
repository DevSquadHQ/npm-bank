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
      optionSelectedFontWeight: "inherit",
      optionSelectedBg: token.input,
      optionActiveBg: "rgba(55,65,81,0.5)",
      colorBgElevated: token.NavyBlue,
    },
    InputNumber: {
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
      borderColor: "none",
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
  },
};

export default theme;
