import { Box } from "@chakra-ui/react";
import "./App.css";
import backimg from "../public/blue.jpg";
import First from "./components/First";
import Second from "./components/Second";
import SearchTimeZone from "./components/SearchTimeZone";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("London");
  return (
    <>
      <SearchTimeZone onSearch={(str) => setCity(str)} />
      <Box
        backgroundImage={backimg}
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <First cityName={city} />
        <Second cityName={city} />
      </Box>
    </>
  );
}

export default App;
