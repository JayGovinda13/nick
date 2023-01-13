import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Box component="img" src="/assets/logoBranco.png" position="fixed" height="5cm"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
