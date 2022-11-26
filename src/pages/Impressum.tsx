import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Impressum = () => {
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
        Impressum
      </Typography>
      <Stack pt={2} gap={0.5}>
        <Typography>
          {" "}
          Verantwortlich: Jonas Freitag, Vor dem Bardowicker Tore 6a, 21339
          Lüneburg
        </Typography>

        <Typography>
          E-Mail: mail@KanzleiFreitag.de Tel.: 04131 / 9925260 Fax: 04131 /
          9925261 URL: www.KanzleiFreitag.de
        </Typography>
        <Typography>
          Mitglied der Rechtsanwaltskammer Celle, Bahnhofstraße 5, 29221 Celle
        </Typography>
        <Typography>
          Aufsicht: Rechtsanwaltskammer Celle, Bahnhofstraße 5, 29221 Celle
        </Typography>
        <Typography>
          Berufshaftpflichtversicherung: Gothaer Allgemeine Versicherung AG,
          Gothaer Allee 1, 50969 Köln
        </Typography>
        <Typography>
          Berufsrechtliche Regelungen: • BRAO (Bundesrechtsanwaltsordnung) •
          BORA (Berufsordnung für Rechtsanwälte) • CCBE (Berufsregeln der
          Rechtsanwälte der Europäischen Union) • RVG
          (Rechtsanwaltsvergütungsgesetz)
        </Typography>
        <Typography>
          Die Vorschriften sind abgedruckt unter: www.brak.de{" "}
        </Typography>
      </Stack>
    </Box>
  );
};
