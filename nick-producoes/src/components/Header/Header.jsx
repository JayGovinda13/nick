import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { positions } from '@mui/system';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Box
            component="img"
            src="/assets/logoBranco.png"
            position="relative"
            height="5cm"
          />
          <Button href="./src/pages/QuemSomos.jsx" variant="outlined" color="error" position="relative">
            Quem Somos
          </Button>
          <Button variant="outlined" color="error" position="relative">
            Nossos Serviços
          </Button>
          <Button variant="outlined" color="error" position="relative">
            Faça um Orçamento
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
