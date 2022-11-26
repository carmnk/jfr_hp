import { Box, Dialog, Link, Modal, Typography } from "@mui/material";
import React from "react";
import lawImage from "../assets/law.jpg";
import { VitaItems } from "../content/vitaItems";
import gleamDoc from "../assets/jfr_anerkennung.jpeg";

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
  const [openModal, setOpenModal] = React.useState(false);
  const toggleGleamModal = React.useCallback(() => {
    setOpenModal((current) => !current);
  }, []);

  return (
    <>
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
        {/* {VitaItems?.map((item) => (
        <VitaItem {...item} />
      ))} */}
        <Typography>
          Nach meinem ersten juristischen Staatsexamen im Jahr 2014, für das ich
          von der (damaligen) hessischen Justizministerin ausgezeichnet wurde{" "}
          <Link onClick={toggleGleamModal}>
            (siehe hier die Anerkennungsurkunde)
          </Link>
          , arbeitete ich etwa ein Jahr als wissenschaftlicher Mitarbeiter am
          Institut für Verfahrensrecht der Universität Marburg. Vor und nach
          meiner Zeit als Staatsanwalt und Richter war und bin ich zudem für
          Rechtsanwälte beim Bundesgerichtshof als wissenschaftlicher
          Mitarbeiter (größtenteils auf selbständiger Basis) tätig. Eine
          passende Beschreibung meiner Tätigkeit findet sich{" "}
          <Link
            href="https://www.azur-online.de/beruf-karriere/die-freiheit-der-kellerasseln/"
            target="_blank"
          >
            hier
          </Link>
          . <br />
          <br />
          Zwischen Dezember 2015 und Dezember 2017 absolvierte ich mein
          Referendariat im Oberlandesgerichtsbezirk Braunschweig und beendete
          dies mit der erfolgreichen Absolvierung des zweiten juristischen
          Staatsexamens. Nach meiner Tätigkeit als Staatsanwalt (Februar 2018
          bis Juni 2019) arbeitete ich als Richter, überwiegend und
          schwerpunktmäßig als Familienrichter, an den Amtsgerichten Wolfsburg
          und Goslar. Als Richter am Amtsgericht wurde ich „auf Lebenszeit“ im
          September 2021 ernannt. Auf meinen eigenen Antrag erfolgte meine
          Entlassung aus dem Richterverhältnis mit Ablauf des Monats Juni 2022.
          Seit Januar 2019 bin ich zudem Mitglied des Justizprüfungsamts im
          Niedersächsischen Justizministerium. Seit meiner Zulassung im November
          2022 bin ich selbständiger Rechtsanwalt in Lüneburg sowie Mitglied der
          Rechtsanwaltskammer Celle und damit vertretungsbefugt vor allen Amts-,
          Land- und Oberlandesgerichten.
        </Typography>
      </Box>
      <Dialog open={openModal} onClose={toggleGleamModal}>
        <Box component="img" src={gleamDoc} alt="Anerkennungsurkunde" />
      </Dialog>
    </>
  );
};
