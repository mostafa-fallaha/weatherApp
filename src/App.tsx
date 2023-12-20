import { Box } from "@chakra-ui/react";
import { useState } from "react";
import backimg from "../public/blue.jpg";
import "./App.css";
import HourlyWeatherContainer from "./components/HourlyWeatherContainer";
import NavBar from "./components/NavBAR";
import TimeZoneTitle from "./components/TimeZoneTitle";

function App() {
  const [city, setCity] = useState("Nabatieh");
  return (
    <>
      <Box
        backgroundImage={backimg}
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <NavBar onSearch={(str) => setCity(str)} />

        <TimeZoneTitle cityName={city} />
        <HourlyWeatherContainer city={city} />
      </Box>
    </>
  );
}

export default App;
