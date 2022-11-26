import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Link,
  Box,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
  Button,
} from "@mui/material";
import { Routes, useLocation, useNavigate } from "react-router-dom";
// import lawImage from "./assets/law.jpg";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Vita } from "./pages/Vita";
import lawImage from "./assets/law.jpg";
import { Kontakt } from "./pages/Kontakt";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { Rechtsgebiete } from "./pages/Rechtsgebiete";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  // Router
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = React.useCallback((newValue: any) => {
    // console.log(e, f);
    navigate(newValue);
    setCurrentLocation(newValue);
  }, []);

  const [currentLocation, setCurrentLocation] = React.useState(
    location?.pathname
  );

  const isMinVW = useMediaQuery("(min-width:425px)");

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/vita",
  //     element: <App />,
  //   },
  //   {
  //     path: "/kontakt",
  //     element: <App />,
  //   },
  // ]);

  const heightFooter = 50;

  console.log(location?.pathname);

  return (
    <Box height="100%" sx={{ overflowY: "auto", position: "relative" }}>
      <Box minHeight="calc(100% - 50px)">
        <Typography
          variant="h6"
          textAlign="center"
          paddingTop={2}
          fontWeight={700}
        >
          Kanzlei Freitag
        </Typography>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            pt: 2,
            position: "relative",
            // height: "100%",
          }}
        >
          <Tabs
            value={currentLocation}
            // onChange={(e, f) => {
            //   handleNavigate(e, f);
            // }}
            variant={isMinVW ? undefined : "scrollable"}
            scrollButtons="auto"
            centered
            aria-label="basic tabs example"
          >
            <Tab
              label="Kanzlei"
              value="/"
              onClick={() => {
                handleNavigate("/");
              }}
            />
            <Tab
              label="Vita"
              value="/vita"
              onClick={() => {
                handleNavigate("/vita");
              }}
            />
            <Tab
              label="Rechtsgebiete"
              value="/rechtsgebiete"
              onClick={() => {
                handleNavigate("/rechtsgebiete");
              }}
            />
            <Tab
              label="Kontakt"
              value="/kontakt"
              onClick={() => {
                handleNavigate("/kontakt");
              }}
            />
            {/* {...a11yProps(2)} */}
          </Tabs>

          <Box>
            <Box
              sx={{
                backgroundImage: `url(${lawImage})`,
                height: 120,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box pt={2} pb={2} sx={{ overFlowY: "scroll" }}>
              <Container maxWidth="md">
                <Routes>
                  <Route path="/*" element={<Home />}></Route>
                  <Route path="/vita" element={<Vita />} />
                  <Route path="/rechtsgebiete" element={<Rechtsgebiete />} />
                  <Route path="/kontakt" element={<Kontakt />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="/datenschutz" element={<Datenschutz />} />
                </Routes>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>

      <Stack
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="center"
        height={heightFooter}
        bgcolor="#eef2f5"
        position="relative"
      >
        <Button
          variant="text"
          onClick={() => {
            handleNavigate("/impressum");
            setCurrentLocation("/impressum");
          }}
        >
          Impressum
        </Button>

        <Button
          variant="text"
          onClick={() => {
            handleNavigate("/datenschutz");
            setCurrentLocation("/datenschutz");
          }}
        >
          Datenschutz
        </Button>
      </Stack>
    </Box>
  );
}

export default App;
