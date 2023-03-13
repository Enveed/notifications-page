import { Box, Paper } from "@mui/material";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecentPost from "./components/RecentPost";
import FollowNoti from "./components/FollowNoti";
import GroupJoining from "./components/GroupJoining";
import PrivateMessage from "./components/PrivateMessage";
import PictureComment from "./components/PictureComment";
import RecentPost2 from "./components/RecentPost2";
import LeaveGroup from "./components/LeaveGroup";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            p: 3,
            maxWidth: "650px",
          }}
          elevation={3}
        >
          <Header />
          <RecentPost active={true} />
          <FollowNoti active={true} />
          <GroupJoining active={true} />
          <PrivateMessage />
          <PictureComment />
          <RecentPost2 />
          <LeaveGroup />
        </Paper>
      </Box>
    </div>
  );
}

export default App;
