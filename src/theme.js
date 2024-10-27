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
        colorError: '#FF7073',
      },
      Input: {
        colorBgContainer: token.input,
        colorTextPlaceholder: "rgba(255,255,255,0.5)",
        colorBorder: "#4B5563",
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

  export default theme