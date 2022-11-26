import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import lawImage from "../assets/law.jpg";

export const Home = () => {
  return (
    <Box>
      <Typography variant="h5" pt={2} pb={2} textAlign="center">
        Rechtsanwaltskanzlei für Familienrecht
      </Typography>
      <Box pt={2}>
        <Typography>
          Ob{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Scheidung
          </Box>
          ,{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Unterhalt
          </Box>{" "}
          oder{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Sorgerecht
          </Box>
          . Ich - Rechtsanwalt Jonas Freitag - bin in dieser schwierigen
          Lebenssituation für Sie da! Meine Kanzlei befindet sich in zentraler
          Lage in Lüneburg mit Parkmöglichkeiten. Ich bin schwerpunktmäßig
          außergerichtlich und gerichtlich im Bereich des{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Familienrechts
          </Box>{" "}
          tätig.
        </Typography>
        <Typography mt={1}>
          Ich übernehme die Vertretung unter anderem in folgenden Bereichen:
        </Typography>
        <List>
          <ListItem>
            - Scheidung (einschließlich Versorgungsausgleich, ggfs.
            Vermögensauseinandersetzung etc.)
          </ListItem>
          <ListItem>
            - Unterhalt (Trennungsunterhalt, nachehelicher Unterhalt,
            Kindesunterhalt etc.)
          </ListItem>
          <ListItem>- Sorgerecht und Umgangsrecht</ListItem>
        </List>
        <Typography>
          Vor meiner Tätigkeit als Rechtsanwalt arbeitete ich längere Zeit - bis
          einschließlich Juni 2022 - schwerpunktmäßig als{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Familienrichter
          </Box>{" "}
          an den Amtsgerichten Wolfsburg und Goslar. Im September 2021 wurde ich
          auf Lebenszeit als Richter am Amtsgericht ernannt. Insgesamt kann ich
          auf etwa{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            1.000 familiengerichtliche Verfahren
          </Box>{" "}
          zurückblicken. Meine dabei gewonnenen Kenntnisse und Erfahrungen setze
          ich für meine Mandanten gewinnbringend ein!
        </Typography>
      </Box>
    </Box>
  );
};
