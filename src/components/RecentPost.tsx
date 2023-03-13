import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  active?: boolean;
}

const RecentPost = ({ active }: Props) => {
  return (
    <Stack
      direction="row"
      padding={2}
      marginBottom={1}
      sx={{
        backgroundColor: active ? "hsl(210, 60%, 98%)" : "",
        borderRadius: 2,
        color: "hsl(219, 12%, 42%)",
      }}
      spacing={2}
    >
      <img
        src="./images/avatar-mark-webber.webp"
        alt=""
        width="50px"
        height="50px"
      />
      <Box>
        <Typography variant="body1" component="p" marginBottom={0.5}>
          <Link
            href="#"
            underline="none"
            color="black"
            sx={{
              "&:hover": {
                color: "hsl(219, 85%, 26%)",
              },
            }}
          >
            <strong>Mark Webber</strong>
          </Link>{" "}
          reacted to your recent post{" "}
          <Link
            href="#"
            underline="none"
            color="hsl(219, 12%, 42%)"
            sx={{
              "&:hover": {
                color: "hsl(219, 85%, 26%)",
              },
            }}
          >
            <strong>My first tournament today!</strong>
          </Link>{" "}
          {active ? <span className="active-circle"></span> : ""}
        </Typography>
        <Typography variant="body2" component="p" color="hsl(219, 14%, 63%)">
          1m ago
        </Typography>
      </Box>
    </Stack>
  );
};

export default RecentPost;
