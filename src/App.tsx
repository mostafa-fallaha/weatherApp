import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContainerAll from "./components/ContainerAll";
import DayDetails from "./components/Daily/DayDetails";
import NavBar from "./components/NavBar";
import TimeZoneTitle from "./components/TimeZoneTitle";

function App() {
  const [city, setCity] = useState("Nabatieh");
  return (
    <Box height="100lvh" justifyContent="center" alignItems="center">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav" "main"`,
          lg: `"nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(str) => setCity(str)} />
        </GridItem>

        <Show above="lg">
          <GridItem area="main">
            <TimeZoneTitle cityName={city} />
            <BrowserRouter>
              <Routes>
                <Route
                  path=""
                  element={<ContainerAll city={city} widH={60} widD={50} />}
                />
                <Route path="/day-details" element={<DayDetails />} />
              </Routes>
            </BrowserRouter>
          </GridItem>
        </Show>

        <Show below="780px">
          <GridItem area="main">
            <TimeZoneTitle cityName={city} />
            <BrowserRouter>
              <Routes>
                <Route
                  path=""
                  element={<ContainerAll city={city} widH={100} widD={80} />}
                />
                <Route path="/day-details" element={<DayDetails />} />
              </Routes>
            </BrowserRouter>
          </GridItem>
        </Show>
      </Grid>
    </Box>
  );
}

export default App;
