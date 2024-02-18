import { Box, HStack, Text } from "@chakra-ui/react";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { Current, Hourly } from "../../hooks/useGeoCode";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

interface Props {
  hourly_forecast: Hourly[];
  current: Current;
  widH: number;
}

function HourlyWeatherGrid({ hourly_forecast, current, widH }: Props) {
  return (
    <Box marginTop={"1%"} width={widH + "%"}>
      <Text fontSize={25} fontWeight={800} width="70vh">
        Next 12 hour Forecast
      </Text>
      <HStack width="70vh">
        <abbr title="sunrise">
          <BsSunriseFill />
        </abbr>
        <Text color={"#f4acb7"} fontWeight={600} marginRight="0.5%">
          {current.sunriseDate + " am,"}
        </Text>
        <abbr title="sunset">
          <BsSunsetFill />
        </abbr>
        <Text color={"#fcca46"} fontWeight={600}>
          {current.sunsetDate + " pm"}
        </Text>
      </HStack>
      <Box
        // width="65%"
        overflowX="auto"
        height="60svh"
        marginTop="1%"
        border="1px solid #81aeca"
      >
        {hourly_forecast.slice(0, 12).map((hour) => (
          <HourlyWeatherCard hour={hour} key={hour.weather[0].id + hour.dt} />
        ))}
      </Box>
    </Box>
  );
}

export default HourlyWeatherGrid;
