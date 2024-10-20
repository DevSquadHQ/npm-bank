import { Typography } from "@mui/material";

function AppTitle() {
  return (
    //Auth Title outside the form box
    <Typography
      variant="h3"
      component="h2"
      color="text.primary"
      align="center"
      sx={{ mb: 8 }}
    >
      اینترنت بانک من
    </Typography>
  );
}

export default AppTitle;
