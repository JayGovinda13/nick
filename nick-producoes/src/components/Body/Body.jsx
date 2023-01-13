import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";


function BackgroundImagePage() {
  return (
    <Box
      style={{
        backgroundColor: "black",
        height:"720px",
        width:"1440px",
        position:"static",
      }}
    >
        <Box component="img" src="/assets/fundo.png" height="20em" position="relative"/>
        <Typography sx={{ color:"white"}} position="relative">
        A Nick Te Poem no Mapa
        </Typography>
    </Box>
  );
}

export default BackgroundImagePage;
