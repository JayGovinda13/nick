import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

function BackgroundImagePage() {
  return (
    <Box
      style={{
        backgroundColor: "black",
        height: "720px",
        width: "1440px",
        display: 'grid',
        alignItems: "flex-start" 
      }}
    >
      <Box sx={{display:"block", alignItems: "flex-start", justifyContent: 'space-around' }}>
      <Box
        component="img"
        src="/assets/logoBranco.png"
        height="35em"
        sx={{backgroundColor:"black", alignItems: "flex-start", }}
      />
      <Button variant="outlined" color="error" position="relative" href="https://wa.me/5511951423731">Faça um Orçamento</Button>
      </Box>
      <Box>
        <Typography sx={{ font:"Roboto", color: "white", alignItems: "flex-start" }}>
        </Typography>
      </Box>
    </Box>
  );
}

export default BackgroundImagePage;
