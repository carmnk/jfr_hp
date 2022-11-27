import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const Datenschutz = () => {
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
        Datenschutz
      </Typography>
      <Stack pt={2}>
        <Typography>
          Bei Aufruf meines Webangebots www.KanzleiFreitag.de werden von meinem
          Domain-Hoster{" "}
          <Link href="https://www.united-domains.de/" target="_blank">
            united-domains AG
          </Link>{" "}
          aus Sicherheitsgründen Zugriffe für maximal 14 Tage in Form des
          standard Apache LogFormats gespeichert: Zieldomain, IP, Datum+Zeit,
          Methode, Referrer (falls existent), Clientversion
          <br /> Spätestens nach 14 Tagen werden die Zugriffsdaten wieder
          gelöscht (auch etwaige Backups dieser Daten sind dann gelöscht).
          <br /> Die kurzzeitige Speicherung der Daten ist zur Wahrung der
          berechtigten Interessen des Verantwortlichen und Dritter erforderlich
          (Art. 6 Abs. 1 f) DSGVO). <br />
          Ich erhebe im Einzelfall personenbezogene Daten, namentlich Name,
          Anschrift, Telefonnummer oder E-Mail-Adresse, nur dann, wenn mir diese
          Daten freiwillig – z.B. durch Kontaktanfragen – zur Verfügung gestellt
          werden und ich aufgrund der gegebenen Einwilligung oder nach
          gesetzlichen Regelung zur Verarbeitung, Speicherung und Nutzung
          berechtigt oder verpflichtet bin oder die Daten zur Abwicklung des
          Vertragsverhältnisses erforderlich sind und kein Grund zur Annahme
          besteht, dass ein überwiegend schutzwürdiges Interesse an der
          Nichtweitergabe der Daten besteht (Art. 6 Abs. 1 S. 1 lit. a, b, c, f
          DSGVO). Die überlassenen Daten verwende ich nur für den Zweck, zu dem
          sie mir überlassen worden sind. Ihre Verarbeitung erfolgt nach den
          gesetzlichen Vorschriften. Ihre Daten werden nach Erledigung der
          Anfrage und Ablauf gesetzlicher Aufbewahrungspflichten gelöscht.
          <br /> Sie haben das Recht,
          <br /> - gem. Art. 15 DSGVO Auskunft über Ihre Daten zu verlangen
          <br /> - nach Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
          oder Vervollständigung der gespeicherten personenbezogenen Daten zu
          verlangen
          <br /> - gem. Art. 18 DSGVO die Einschränkung der Verarbeitung der
          personenbezogenen Daten zu verlangen, soweit deren Richtigkeit von
          Ihnen bestritten wird, soweit die Verarbeitung unrechtmäßig ist und
          Sie die Löschung der personenbezogenen Daten ablehnen, schließlich
          soweit ich die Daten nicht mehr benötige
          <br /> - gem. Art. 20 DSGVO die personenbezogenen Daten, die Sie
          bereitgestellt haben, in maschinenlesbarem Format zu erhalten oder
          deren Übermittlung an einen anderen Verantwortlichen zu verlangen
          <br /> - gem. Art. 7 Abs. 3 DSGVO die einmal erteilte Einwilligung mir
          gegenüber zu widerrufen mit der Folge, dass ich die Datenverarbeitung,
          die auf der Einwilligung beruhte, für die Zukunft nicht mehr fortführe
          <br /> - gem. Art. 77 DSGVO sich an die Aufsichtsbehörde meiner
          Kanzlei zu wenden (Landesdatenschutzbeauftragte von Niedersachsen).
          <br />
          Einen Datenschutzbeauftragten muss ich nach § 38 Abs. 1 Satz 1 BDSG
          nicht benennen.
        </Typography>
      </Stack>
    </Box>
  );
};
