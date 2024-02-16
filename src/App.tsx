import { Box, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import HourlyWeatherContainer from "./components/Hourly/HourlyWeatherContainer";
import NavBar from "./components/NavBar";
import TimeZoneTitle from "./components/TimeZoneTitle";
import DailyContainer from "./components/Daily/DailyContainer";

function App() {
  const [city, setCity] = useState("Nabatieh");
  return (
    <Box
      // backgroundImage={backimg}
      // backgroundSize="cover"
      // backgroundPosition="center"
      // backgroundColor={"#1d3557"}
      height="100lvh"
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
            <DailyContainer city={city} />
          </GridItem>
        </Show>

        <Show below="sm">
          <TimeZoneTitle cityName={city} />
          <Text>we're working on it</Text>
        </Show>
      </Grid>
    </Box>
  );
}

export default App;
