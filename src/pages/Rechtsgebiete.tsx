import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { VitaItems } from "../content/vitaItems";

export const Rechtsgebiete = () => {
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
        Rechtsgebiete
      </Typography>
      <Box pt={2}>
        <Typography>
          Ich bin schwerpunktmäßig außergerichtlich und gerichtlich im Bereich
          des{" "}
          <Typography fontWeight={700} component="span">
            Familienrechts
          </Typography>{" "}
          tätig.
          <br />
          <br /> Ich übernehme die Vertretung unter anderem in folgenden
          Bereichen:
          <List>
            <ListItem>
              <div>
                - <b>Scheidung</b> (einschließlich Versorgungsausgleich, ggfs.
                Güterrecht und Vermögensauseinandersetzung, Zuweisung der
                Ehewohnung und Hausratsaufteilung etc.)
              </div>
            </ListItem>
            <ListItem>
              <div>
                -{" "}
                <Typography fontWeight={700} component="span">
                  Unterhalt
                </Typography>{" "}
                (Trennungsunterhalt, nachehelicher Unterhalt, Kindesunterhalt
                etc.)
              </div>
            </ListItem>
            <ListItem>
              <div>
                -{" "}
                <Typography fontWeight={700} component="span">
                  Sorgerecht
                </Typography>{" "}
                und{" "}
                <Typography fontWeight={700} component="span">
                  Umgangsrecht
                </Typography>
              </div>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Box>
  );
};
