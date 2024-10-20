import { Typography } from "@mui/material";
import React from "react";

function CustomeLabel({htmlFor}) {
  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      sx={{ mb: 1, color: "text.primary", mr: 1 }}
    >
      نام
    </Typography>
  );
}

export default CustomeLabel;
