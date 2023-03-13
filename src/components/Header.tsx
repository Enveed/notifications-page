import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={4}
    >
      <Box>
        <Typography variant="h6" component="h1">
          Notifications{" "}
          <Typography
            variant="subtitle2"
            component="span"
            sx={{
              backgroundColor: "hsl(219, 85%, 26%)",
              color: "white",
              py: 0.5,
              px: 1.5,
              borderRadius: 2,
              ml: 2,
            }}
          >
            3
          </Typography>
        </Typography>
      </Box>
      <Link
        href="#"
        underline="none"
        sx={{
          color: "hsl(219, 85%, 26%)",
        }}
      >
        Mark all as read
      </Link>
    </Stack>
  );
};

export default Header;
