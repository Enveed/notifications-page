import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  active?: boolean;
}

const PictureComment = ({ active = false }: Props) => {
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
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={2}>
        <img
          src="./images/avatar-kimberly-smith.webp"
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
              <strong>Kimberly Smith</strong>
            </Link>{" "}
            commented on your picture{" "}
            {active ? <span className="active-circle"></span> : ""}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="hsl(219, 14%, 63%)"
            marginBottom={1}
          >
            1 week ago
          </Typography>
        </Box>
      </Stack>
      <Link href="">
        <img
          src="./images/image-chess.webp"
          width="50px"
          height="50px"
          alt="chess.webp"
        />
      </Link>
    </Stack>
  );
};

export default PictureComment;
