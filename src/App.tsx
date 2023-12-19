import { Box } from "@chakra-ui/react";
import "./App.css";
// import useGeoCode from "./hooks/useGeoCode";
import backimg from "../public/blue.jpg";
import First from "./components/First";
// import Second from "./components/Second";

function App() {
  // const { data } = useGeoCode("London");

  return (
    <Box
      backgroundImage={backimg}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <First />
      {/* <Second /> */}
      {/* <div>
        <ul>
          {data.map((d) => (
            <li key={d.weather[0].id}>
              {d.clouds} <br />
              {d.temp} <br />
              {d.humidity} <br />
              {d.wind_speed} <br />
              {d.sunriseDate} <br />
              {d.sunsetDate} <br />
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  d.weather[0].icon +
                  "@2x.png"
                }
              />
            </li>
          ))}
        </ul>
      </div> */}
    </Box>
  );
}

export default App;
