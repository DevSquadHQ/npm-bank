import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Vazirmatn", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: "dark",
    background: {
      default: "#111928", // App background color
    },
    primary: {
      main: "#1C64F2", // Main color for buttons
    },
    text: {
      // Main text color
      secondary: "#9CA3AF", // Lighter text color
    },
    custom: {
      authBox: "#1F2A37", // Box around the auth form
      inputBackground: "#374151", // Lighter part like input background
    },
    success: {
      main: "#014737", // Success color
    },
    error: {
      main: "#771D1D", // Warning or error color
    },
  },
  components:{
    MuiOutlinedInput:{
      styleOverrides:{
        input:{
          '&::placeholder': {
            fontWeight: 300, 
          },
        }
      }
    }
  }
});

export default theme;
