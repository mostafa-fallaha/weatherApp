import { Box, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import backimg from "../public/blue.jpg";
import "./App.css";
import SearchTimeZone from "./components/SearchTimeZone";
import Second from "./components/Second";
import First from "./components/TimeZoneTitle";

function App() {
  const [city, setCity] = useState("London");
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
        <HStack justifyContent={"space-evenly"}>
          <Image
            src="https://openweathermap.org/img/wn/02d@2x.png"
            width={100}
          />
          <SearchTimeZone onSearch={(str) => setCity(str)} />
          <Image
            src="https://openweathermap.org/img/wn/11d@2x.png"
            width={100}
          />
        </HStack>

        <First cityName={city} />
        <Second cityName={city} />
      </Box>
    </>
  );
}

export default App;
