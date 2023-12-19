import { Box, HStack, Text } from "@chakra-ui/react";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { Hourly } from "../hooks/useGeoCode";

interface Props {
  hourly_forecast: Hourly[];
}

function HourlyWeatherGrid({ hourly_forecast }: Props) {
  return (
    <Box marginTop={"1%"}>
      <Text marginLeft={"5%"} fontSize={20}>
        Next 12 hour Forecast
      </Text>
      <HStack flexWrap={"wrap"} marginTop={"1%"} justifyContent={"center"}>
        {hourly_forecast.slice(0, 12).map((hour) => (
          <HourlyWeatherCard hour={hour} key={hour.weather[0].id + hour.dt} />
        ))}
      </HStack>
    </Box>
  );
}

export default HourlyWeatherGrid;
