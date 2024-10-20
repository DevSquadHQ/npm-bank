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
      main: "#1C64F2", 
    },
    text: {
     
      secondary: "#9CA3AF", // Lighter text color
    },
    custom: {
      authBox: "#1F2A37", // Box around the auth form
      inputBackground: "#374151", // Lighter part like input background
    },
    success: {
      main: "#014737", 
    },
    error: {
      main: "#DD7373", 
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        
        input: {
          "&::placeholder": {
            fontWeight: 300,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: "right",
          marginTop:"8px",
        },
      },
    },
  },
});

export default theme;
