import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  active?: boolean;
}

const PrivateMessage = ({ active = false }: Props) => {
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
        src="./images/avatar-rizky-hasanuddin.webp"
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
            <strong>Rizky Hasanuddin</strong>
          </Link>{" "}
          sent you a private message{" "}
          {active ? <span className="active-circle"></span> : ""}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="hsl(219, 14%, 63%)"
          marginBottom={1}
        >
          5 days ago
        </Typography>
        <Box padding={2} bgcolor="hsl(211, 68%, 94%)" borderRadius={2}>
          <Typography variant="body1" component="p">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default PrivateMessage;
