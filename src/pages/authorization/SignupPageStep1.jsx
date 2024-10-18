import React from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  OutlinedInput,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const SignupPageStep1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission for signup step 1
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "background.default",
        padding: { xs: 2, md: 5 },
        direction: "rtl", // RTL layout for the form
      }}
    >
      {/* Title outside the form box */}
      <Typography
        variant="h3"
        component="h2"
        color="text.primary"
        align="center"
        sx={{ mb: 8 }}
      >
        اینترنت بانک من
      </Typography>

      {/* Form Box */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          backgroundColor: "custom.authBox",
          borderRadius: 2,
          width: { xs: "100%", sm: "400px" },
          boxShadow: 3,
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          align="center"
          mb={5}
          component="h3"
        >
          ایجاد حساب کاربری
        </Typography>

        {/* First Name Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-firstname"
            sx={{ mb: 1, color: "text.primary" }}
          >
            نام
          </Typography>
          <OutlinedInput
            id="outlined-firstname"
            placeholder="لطفا نام خود را وارد کنید"
            type="text"
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* Last Name Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-lastname"
            sx={{ mb: 1, color: "text.primary" }}
          >
            نام خانوادگی
          </Typography>
          <OutlinedInput
            id="outlined-lastname"
            placeholder="لطفا نام خانوادگی خود را وارد کنید"
            type="text"
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* National Code Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-nationalcode"
            sx={{ mb: 1, color: "text.primary" }}
          >
            کد ملی
          </Typography>
          <OutlinedInput
            id="outlined-nationalcode"
            placeholder="لطفا کد ملی خود را وارد کنید"
            type="text"
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* Continue Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1 }}
        >
          ادامه
        </Button>

        {/* Login Link */}
        <Typography align="center" color="text.secondary">
          حساب کاربری دارید؟{" "}
          <Link
            component={RouterLink}
            to="/login"
            sx={{ color: "primary.main", textDecoration: "none" , mr:1 }}
          >
            ورود به حساب
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPageStep1;
