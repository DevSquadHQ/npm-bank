import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  FormControl,
  OutlinedInput,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submit logic here
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
          ورود به حساب کاربری
        </Typography>

        {/* Email Input with Static Label */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-email"
            sx={{ mb: 1, color: "text.primary" }}
          >
            پست الکترونیکی
          </Typography>
          <OutlinedInput
            id="outlined-email"
            placeholder="name@happy.com"
            type="email"
            autoComplete="email"
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* Password Input with Static Label */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-adornment-password"
            sx={{ mb: 1, color: "text.primary" }}
          >
            رمز عبور
          </Typography>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 1 }}
        >
          ورود به حساب
        </Button>

        {/* Sign up link */}
        <Typography align="center" color="text.secondary">
          عضو نیستید؟{" "}
          <Link
            component={RouterLink}
            to="/signup-step1"
            sx={{ color: "primary.main", textDecoration: "none", mr:1}}
          >
            ایجاد حساب
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
