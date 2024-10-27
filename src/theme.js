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
  },
};

export default theme;
