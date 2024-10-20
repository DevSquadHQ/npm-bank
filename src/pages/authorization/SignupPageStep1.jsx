import React from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  OutlinedInput,
  Link,
  FormHelperText,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupPageStep1 = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm({ mode: "onBlur" });


// *********************** IranianNationalCode validation **********************

  const validateIranianNationalCode = (code) => {

    if (!/^\d*$/.test(code)) {
      return "کد ملی نباید شامل حروف باشد";
    }


    if (code.length !== 10) {
      return "کد ملی باید دقیقا ۱۰ رقم باشد";
    }

    const digits = code.split("").map(Number);
    const checkDigit = digits.pop();
    const s = digits.reduce(
      (sum, digit, index) => sum + digit * (10 - index),
      0
    );
    const R = s % 11;

    return (R < 2 && checkDigit === R) || (R >= 2 && checkDigit === 11 - R)
      ? true
      : "کد ملی نامعتبر است";
  };

  // ******************************* OnSubmit Func **********************
  const onSubmit = (data) => {
    // Pass data to the next page via navigation state
    console.log(data);
    navigate("/signup-step2", { state: { step1Data: data } });
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
            {...register("firstName", {
              required: "لطفا نام خود را وارد کنید",
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/, 
                message: "لطفا فقط از حروف فارسی استفاده کنید", 
              },
            })}
            sx={{
              backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.firstName ? "error.main" : "inherit", 
              },
            }}
          />
          {errors.firstName && (
            <FormHelperText error>{errors.firstName.message}</FormHelperText> 
          )}
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
            {...register("lastName", {
              required: "لطفا نام خانوادگی خود را وارد کنید", 
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/, 
                message: "لطفا فقط از حروف فارسی استفاده کنید", 
              },
            })}
            sx={{
              backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.lastName ? "error.main" : "inherit", 
              },
            }}
          />
          {errors.lastName && (
            <FormHelperText error>{errors.lastName.message}</FormHelperText> 
          )}
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
            {...register("nationalCode", {
              required: "لطفا کد ملی خود را وارد کنید",
              validate: validateIranianNationalCode, 
            })}
            sx={{
              backgroundColor: "custom.inputBackground",
              "& fieldset": {
                borderColor: errors.nationalCode ? "error.main" : "inherit", 
              },
            }}
          />
          {errors.nationalCode && (
            <FormHelperText error>{errors.nationalCode.message}</FormHelperText> 
          )}
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
            sx={{ color: "primary.main", textDecoration: "none", mr: 1 }}
          >
            ورود به حساب
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPageStep1;
