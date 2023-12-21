import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import backimg from "../public/blue.jpg";
import "./App.css";
import HourlyWeatherContainer from "./components/HourlyWeatherContainer";
import NavBar from "./components/NavBar";
import TimeZoneTitle from "./components/TimeZoneTitle";

function App() {
  const [city, setCity] = useState("Nabatieh");
  return (
    <Box
      backgroundImage={backimg}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
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
            <HourlyWeatherContainer city={city} />
          </GridItem>
        </Show>

        <Show below="sm">
          <TimeZoneTitle cityName={city} />
          <div>base</div>
        </Show>
      </Grid>
    </Box>
  );
}

export default App;
