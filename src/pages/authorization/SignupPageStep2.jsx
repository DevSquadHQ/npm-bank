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
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-multi-date-picker"; 
import persian from "react-date-object/calendars/persian"; 
import persian_fa from "react-date-object/locales/persian_fa"; 
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/layouts/prime.css";
import "/src/components/pickerStyle.css";
import { Controller, useForm } from "react-hook-form";

const SignupPageStep2 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  

  const { state } = useLocation();
  const { register, handleSubmit ,formState: { errors},trigger,control} = useForm({ mode: "onBlur" });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();



  // ************************checking if the user is under 18 **********************

  const validateBirthdate = (value) => {
    if (!value) {
      return "لطفا تاریخ تولد خود را وارد کنید";
    }
    const birthDate = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return age - 1 >= 18 ? true : "سن شما باید حداقل ۱۸ سال باشد";
    }
    return age >= 18 ? true : "سن شما باید حداقل ۱۸ سال باشد";
  };

  // ******************************* OnSubmit Func **********************
  const onSubmit = (data) => {
    const finalData = {
      ...state.step1Data,
      birthdate: data.birthdate?.format?.("D MMMM YYYY"),
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
    };

    console.log("Final Data: ", finalData); // Log final data
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
        direction: "rtl", 
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
        noValidate
        onSubmit={handleSubmit(onSubmit)}
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

        {/* Birthdate Input */}
        <FormControl fullWidth required variant="outlined">
          <Typography
            component="label"
            htmlFor="outlined-birthdate"
            sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
          >
            تاریخ تولد
          </Typography>

          <Controller
            name="birthdate"
            control={control}
            rules={{ validate: validateBirthdate }} // Use the custom validation for age
            render={({ field: { onChange,onBlur, value }, fieldState: { error } }) => (
              <>
                <DatePicker
                  render={<InputIcon />}
                  value={value || ""}
                  onChange={(date) => {
                    onChange(date); 
                    onBlur(); 
                  }}
                  calendar={persian} // Persian calendar
                  locale={persian_fa} // Persian locale
                  format="D MMMM YYYY" // Date format
                />
                {error && <FormHelperText error>{error.message}</FormHelperText>}
              </>
            )}
          />

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
            {...register("phoneNumber", {
              required: "لطفا شماره موبایل خود را وارد کنید",
              pattern: {
                value: /^(09|\+989)\d{9}$/, // Your regex
                message: "شماره موبایل نامعتبر است",
              },
            })}
            sx={{ backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.phoneNumber ? "error.main" : "inherit", 
              },
             }}
            inputProps={{
              style: { textAlign: "right" }
            }}
          />
           {errors.phoneNumber && (
            <FormHelperText error>{errors.phoneNumber.message}</FormHelperText>
          )}
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
            {...register("email", {
              required: "لطفا ایمیل خود را وارد کنید",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "ایمیل نامعتبر است",
              },
            })}
            sx={{ backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.email ? "error.main" : "inherit", 
              },
             }}
          />
          {errors.email && (
            <FormHelperText error>{errors.email.message}</FormHelperText>
          )}
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
            {...register("password", {
              required: "لطفا رمز عبور خود را وارد کنید",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                message:
                  "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، کوچک، اعداد و کاراکترهای خاص باشد",
              },
              onChange: (e) => {
                trigger("password"); 
              },
            })}
            sx={{ backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.password ? "error.main" : "inherit", 
              },
             }}
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
          {errors.password && (
            <FormHelperText error>{errors.password.message}</FormHelperText>
          )}
        </FormControl>

        {/* Register Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: -1 }}
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
