import { Box, HStack, Text } from "@chakra-ui/react";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { Current, Hourly } from "../../hooks/useGeoCode";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

interface Props {
  hourly_forecast: Hourly[];
  current: Current;
}

function HourlyWeatherGrid({ hourly_forecast, current }: Props) {
  return (
    <Box marginTop={"1%"} width={{ base: "100%", md: "60%" }}>
      <Text
        fontSize={{ base: 14, lg: 25 }}
        fontWeight={800}
        width={{ base: "90%", md: "70vh", lg: "70vh" }}
        marginLeft={{ base: "3%", lg: "1%" }}
      >
        Next 12 hour Forecast
      </Text>
      <HStack
        width={{ base: "90%", lg: "70vh" }}
        marginLeft={{ base: "3%", lg: "1%" }}
      >
        <abbr title="sunrise">
          <BsSunriseFill />
        </abbr>
        <Text
          fontSize={{ base: 13, lg: 17 }}
          color={"#f4acb7"}
          fontWeight={600}
          marginRight="0.5%"
        >
          {current.sunriseDate + " am,"}
        </Text>
        <abbr title="sunset">
          <BsSunsetFill />
        </abbr>
        <Text
          fontSize={{ base: 13, lg: 17 }}
          color={"#fcca46"}
          fontWeight={600}
        >
          {current.sunsetDate + " pm"}
        </Text>
      </HStack>
      <Box
        width={{ base: "100%" }}
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
