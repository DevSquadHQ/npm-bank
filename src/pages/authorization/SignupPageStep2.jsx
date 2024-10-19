import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { differenceInYears } from 'date-fns';

const SignupPageStep2 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [birthdate, setBirthdate] = useState(null);
  const [age, setAge] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // const handleDateChange = (newValue) => {
  //   setBirthdate(newValue);
  //   if (newValue) {
  //     const userAge = differenceInYears(new Date(), new Date(newValue));
  //     setAge(userAge);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
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

        {/* Birthdate Input (MUI DatePicker) */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-birthdate"
            sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
          >
            تاریخ تولد {age ? `(${age} ساله)` : ""}
          </Typography>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="انتخاب تاریخ"
              value={birthdate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <OutlinedInput
                  {...params}
                  id="outlined-birthdate"
                  sx={{ backgroundColor: "custom.inputBackground" }}
                />
              )}
            />
          </LocalizationProvider> */}
        </FormControl>

        {/* Phone Number Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-phone"
            sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
          >
            شماره موبایل
          </Typography>
          <OutlinedInput
            id="outlined-phone"
            placeholder="مثال ۰۹۱۲۱۲۱۲۱۲۱"
            type="tel"
            sx={{backgroundColor: "custom.inputBackground"}}
            inputProps={{
              style: { textAlign: "right" }, // Ensures the input value and placeholder are right-aligned
            }}
          />
        </FormControl>

        {/* Email Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-email"
            sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
          >
            ایمیل
          </Typography>
          <OutlinedInput
            id="outlined-email"
            placeholder="لطفا ایمیل خود را وارد کنید"
            type="email"
            sx={{ backgroundColor: "custom.inputBackground" }}
          />
        </FormControl>

        {/* Password Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-password"
            sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
          >
            رمز عبور
          </Typography>
          <OutlinedInput
            id="outlined-password"
            type={showPassword ? "text" : "password"}
            sx={{ backgroundColor: "custom.inputBackground" }}
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
            placeholder="لطفا رمز عبور خود را وارد کنید"
          />
        </FormControl>

        {/* Register Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2,mb:-1 }}
        >
          ثبت نام
        </Button>

        {/* Back Button */}
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={() => navigate("/signup-step1")}
        >
          بازگشت
        </Button>

        {/* Login Link */}
        <Typography align="center" color="text.secondary">
          حساب کاربری دارید؟{" "}
          <Link
            component={RouterLink}
            to="/login"
            sx={{ color: "primary.main", textDecoration: "none", mr: 1 }}
          >
            ورود به حساب
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPageStep2;
