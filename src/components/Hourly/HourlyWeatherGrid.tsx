import { Box, HStack, Text } from "@chakra-ui/react";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { Current, Hourly } from "../../hooks/useGeoCode";

interface Props {
  hourly_forecast: Hourly[];
  current: Current;
}

function HourlyWeatherGrid({ hourly_forecast, current }: Props) {
  return (
    <Box marginTop={"1%"}>
      <Text marginLeft={"5%"} fontSize={25} fontWeight={800}>
        Next 12 hour Forecast
      </Text>
      <HStack marginLeft={"5%"}>
        <Text color={"#f4acb7"} fontWeight={600}>
          {"sunrise: " + current.sunriseDate + " am,"}
        </Text>
        <Text color={"#fcca46"} fontWeight={600}>
          {"sunset: " + current.sunsetDate + " pm"}
        </Text>
      </HStack>
      {/* <div
        style={{
          overflowX: "auto",
          height: "460px",
          marginLeft: "4%",
          marginTop: "1%",
          backgroundColor: "#00121c",
        }}
      >
        {hourly_forecast.slice(0, 12).map((hour) => (
          <HourlyWeatherCard hour={hour} key={hour.weather[0].id + hour.dt} />
        ))}
      </div> */}
      <Box
        width="1217px"
        overflowX="auto"
        height="460px"
        marginLeft="4%"
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
