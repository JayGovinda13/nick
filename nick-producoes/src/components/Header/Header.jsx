import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "black",
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src="/assets/logoBranco.png"
            position="relative"
            height="5cm"
            href="./src/pages/Home"
          />
          <Box
            sx={{ justifyContent: "flex-end", justifyContent: "space-between", alignItems: 'center', alignContent: 'space-around'  }}
          >
            <Button
              href="./src/pages/QuemSomos.jsx"
              variant="outlined"
              color="error"
              position="relative"
            >
              Quem Somos
            </Button>
            <Button variant="outlined" color="error" position="relative">
              Nossos Serviços
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
