import React from "react";
import { Button, TableFooter, Typography } from "@mui/material";

const Footer = () => {
  return (
    <TableFooter
      sx={{
        backgroundColor: "black",
        display: "grid",
        gridTemplateRows: 'repeat(3, 1fr)',
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Typography sx={{ color: "white", fontFamily:"Sans-Serif", fontSize:"2em" }}>Aguardamos seu contato!</Typography>
      <Typography sx={{ color: "white"}}>comercial@nickproducoes.com.br</Typography>
      <Button
        href="https://wa.me/5511912952103"
        variant="outlined"
        color="error"
        position="relative"
      >
        Fale Agora
      </Button>
    </TableFooter>
  );
};

export default Footer;
