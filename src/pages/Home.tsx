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
            Unterhalts-
          </Box>{" "}
          oder{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Sorgerechtsstreit
          </Box>
          . Ich - Rechtsanwalt Jonas Freitag - bin in dieser schwierigen
          Lebenssituation für Sie da! Meine Kanzlei befindet sich in zentraler
          Lage in Lüneburg. Ich bin schwerpunktmäßig außergerichtlich und
          gerichtlich im Bereich des{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Familienrechts
          </Box>{" "}
          tätig.
        </Typography>
        <br />
        {/* <Typography mt={1}>
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
        </List> */}
        <Typography>
          Vor meiner Tätigkeit als Rechtsanwalt war ich mehrere Jahre als
          Staatsanwalt und Richter – und dabei größtenteils als Familienrichter
          – tätig. Insgesamt kann ich{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            auf etwa 900 familiengerichtliche Verfahren{" "}
          </Box>{" "}
          zurückblicken. Meine dabei gewonnenen Kenntnisse und Erfahrungen setze
          ich nun für meine Mandanten gewinnbringend ein!
          {/* Im September 2021 wurde ich
          auf Lebenszeit als Richter am Amtsgericht ernannt. Insgesamt kann ich
          auf etwa{" "}
          
            1.000 familiengerichtliche Verfahren
         
          zurückblicken. Meine dabei gewonnenen Kenntnisse und Erfahrungen setze
          ich für meine Mandanten gewinnbringend ein! */}
        </Typography>
      </Box>
    </Box>
  );
};
