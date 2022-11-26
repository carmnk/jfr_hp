import { Box, Typography } from "@mui/material";
import React from "react";
import lawImage from "../assets/law.jpg";
import { VitaItems } from "../content/vitaItems";

type VitaItemProps = { header: string; text: string };
const VitaItem = (props: VitaItemProps) => {
  const { header, text } = props;
  return (
    <Box pt={2}>
      <Typography fontWeight={700}>{header}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};

export const Vita = () => {
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
        Vita von Rechtsanwalt Freitag
      </Typography>
      {VitaItems?.map((item) => (
        <VitaItem {...item} />
      ))}
    </Box>
  );
};
