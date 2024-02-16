import { Box, HStack, Text } from "@chakra-ui/react";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { Current, Hourly } from "../../hooks/useGeoCode";

interface Props {
  hourly_forecast: Hourly[];
  current: Current;
}

function HourlyWeatherGrid({ hourly_forecast, current }: Props) {
  const date = new Date(current.sunrise * 1000);
  let h = date.getHours();
  h = h > 12 ? h - 12 : h;
  const m = date.getMinutes();

  const date2 = new Date(current.sunset * 1000);
  let h2 = date2.getHours();
  h2 = h2 > 12 ? h2 - 12 : h2;
  const m2 = date2.getMinutes();

  return (
    <Box marginTop={"1%"}>
      <Text marginLeft={"5%"} fontSize={25} fontWeight={800}>
        Next 12 hour Forecast
      </Text>
      <HStack marginLeft={"5%"}>
        <Text color={"#f4acb7"} fontWeight={600}>
          {m < 10
            ? "sunrise: " + h + ":" + "0" + m + " am,"
            : "sunrise: " + h + ":" + m + " am, "}
        </Text>
        <Text color={"#fcca46"} fontWeight={600}>
          {m2 < 10
            ? "sunset: " + h2 + ":" + "0" + m2 + " pm"
            : "sunset: " + h2 + ":" + m2 + " pm"}
        </Text>
      </HStack>
      <HStack flexWrap={"wrap"} marginTop={"1%"} justifyContent={"center"}>
        {hourly_forecast.slice(0, 12).map((hour) => (
          <HourlyWeatherCard hour={hour} key={hour.weather[0].id + hour.dt} />
        ))}
      </HStack>
    </Box>
  );
}

export default HourlyWeatherGrid;
