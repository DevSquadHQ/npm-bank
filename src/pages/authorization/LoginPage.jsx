import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, InputAdornment, Typography, FormControl, OutlinedInput, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  const handleSignUp = () => {
    navigate('/signup-step1'); // Redirect to signup page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submit logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'background.default',
        direction: 'rtl', // Enable RTL layout
      }}
    >
      {/* Title outside the form box */}
      <Typography
        variant="h4"
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
          p: 3,
          backgroundColor: 'custom.authBox',
          borderRadius: 2,
          width: '320px',
          boxShadow: 3,
          direction: 'rtl', // Form content direction RTL
        }}
      >
        <Typography variant="h5" color="text.primary" align="center" mb={5}>
          ورود به حساب کاربری
        </Typography>

        {/* Email Input with Label Outside */}
        <Typography color="text.primary" sx={{ mb: 2 }}>
          پست الکترونیکی
        </Typography>
        <TextField
          fullWidth
          required
          placeholder="name@happy.com"
          type="email"
          autoComplete="email"
        //   variant="outlined"
          sx={{ backgroundColor: 'custom.inputBackground', mb: 2 }}
        />

        {/* Password Input with Label Outside */}
        <Typography color="text.primary" sx={{ mb: 2 }}>
          رمز عبور
        </Typography>
        <FormControl fullWidth required sx={{ mb: 2 }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ backgroundColor: 'custom.inputBackground' }}
          />
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, mb: 1 }}
        >
          ورود به حساب
        </Button>

        {/* Sign up link */}
        <Typography align="center" color="text.secondary">
          عضو نیستید؟{' '}
          <Button onClick={handleSignUp} sx={{ color: 'primary.main' }}>
            ایجاد حساب
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
