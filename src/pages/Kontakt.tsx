import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { VitaItems } from "../content/vitaItems";
import whatsapp from "../assets/whatsapp.jpeg";

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
      <Box pt={2}>
        <Typography>
          Ich bin gerne für Sie da! Vereinbaren Sie einen Beratungstermin.
          Parkmöglichkeiten sind vor meiner Kanzlei vorhanden.
        </Typography>
        <br />
        <Typography>
          Sie können mich <b>rund um die Uhr</b> per <b>Telefon</b>,{" "}
          <b>E-Mail</b> oder <b>WhatsApp</b> kontaktieren. Am Telefon erreichen
          Sie entweder mich oder meine freundliche Bürohilfe oder es besteht die
          Möglichkeit zum Hinterlassen einer Nachricht. Wenn Sie mich nicht
          direkt erreichen, rufe ich Sie umgehend zurück. Hinterlassen Sie dafür
          bitte Ihren Namen und Ihre Telefonnummer.
        </Typography>
        <br />
        {/* <Typography fontWeight={700}>Kanzlei Freitag</Typography>{" "}
        <Typography>Vor dem Bardowicker Tore 6a (rechter Eingang)</Typography>{" "}
        <Typography>
          21339 Lüneburg <br />
          (gegenüber der Shell-Tankstelle)
        </Typography> */}
        <Link fontWeight={700} href="tel:041319925260"> Tel.: 04131 / 9925260</Link>
        <Typography> Fax: 04131 / 9925261</Typography>
        <br />
        <Typography fontWeight={700}>
          {" "}
          E-Mail:{" "}
          <Link href="mailto:mail@KanzleiFreitag.de">
            mail@KanzleiFreitag.de
          </Link>
        </Typography>
        <Stack mt={1} direction="row" alignItems="center" gap={1}>
          <Typography fontWeight={700} component="span">
            {" "}
            WhatsApp:{" "}
          </Typography>
          <a
            href="https://api.whatsapp.com/send?phone=49xxxyyyyyyyy"
            title="Senden Sie uns Nachricht über WhatsApp"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              // border="0"
              width={32}
              // height="39"
            ></img>
          </a>
        </Stack>
        <Typography variant="caption">
          <b>DSVGO Hinweis:</b>{" "}
          <i>
            Mit dem Klicken auf dem WhatsApp Button erklären Sie sich damit
            einverstanden, dass Ihre Daten (insbesondere Telefonnummer und Name)
            an Facebook und WhatsApp weitergegeben werden. WhatsApp Inc. teilt
            Informationen weltweit, sowohl intern mit den Facebook-Unternehmen
            als auch extern mit Unternehmen, Dienstleistern und Partnern und
            außerdem mit jenen, mit denen du weltweit kommunizierst. Deine
            Informationen können für die in dieser Datenschutzrichtlinie{" "}
            <Link href="https://www.whatsapp.com/legal/#privacy-policy">
              https://www.whatsapp.com/legal/#privacy-policy
            </Link>{" "}
            (externer Link) beschriebenen Zwecke beispielsweise in die USA oder
            andere Drittländer übertragen oder übermittelt bzw. dort gespeichert
            und verarbeitet werden.
          </i>
        </Typography>
      </Box>
    </Box>
  );
};
