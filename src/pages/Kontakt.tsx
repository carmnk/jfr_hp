import { Box, Typography } from "@mui/material";
import React from "react";
import { VitaItems } from "../content/vitaItems";

export const Kontakt = () => {
  return (
    <Box
      sx={
        {
          // background: `#eef2f5`,
          // height: 120,
        }
      }
    >
      <Typography variant="h5" pt={2} pb={2} textAlign="center">
        Kontakt
      </Typography>
      <Box pt={2} textAlign="center">
        <Typography fontWeight={700}>Kanzlei Freitag</Typography>{" "}
        <Typography>Vor dem Bardowicker Tore 6a (rechter Eingang)</Typography>{" "}
        <Typography>
          21339 Lüneburg <br />
          (gegenüber der Shell-Tankstelle)
        </Typography>
        <Typography fontWeight={700}> Tel.: 04131 / 9925260</Typography>
        <Typography> Fax: 04131 / 9925261</Typography>
        <Typography fontWeight={700}>
          {" "}
          E-Mail: mail@KanzleiFreitag.de
        </Typography>
      </Box>
    </Box>
  );
};
