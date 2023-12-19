import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import { Hourly } from "../hooks/useGeoCode";
import getWeatherIcon from "../services/get-weather-icon";

interface Props {
  hour: Hourly;
}

function HourlyWeatherCard({ hour }: Props) {
  const date = new Date(hour.dt * 1000);
  const hourIndex = date.getHours();

  return (
    <Card
      width={220}
      textAlign={"center"}
      height={250}
      backgroundColor={"#3b779f"}
    >
      <Text>
        {hourIndex === 0 ? 12 : hourIndex > 12 ? hourIndex - 12 : hourIndex}
        {hourIndex < 12 ? " am" : " pm"}
      </Text>
      <HStack justifyContent={"space-evenly"}>
        <Image
          src={getWeatherIcon(hour.weather[0].icon)}
          key={hour.weather[0].id}
          width={75}
          alignSelf={"center"}
          marginBottom={0}
        />
        <Text color={hour.temp < 10 ? "#0BC5EA" : "orange"} fontSize={20}>
          {hour.temp}
          {`\u00B0C`}
        </Text>
      </HStack>

      <CardBody>
        <Text>{hour.weather[0].description}</Text>
        <Text>feels like: {hour.feels_like}</Text>
        <Text>humidity: {hour.humidity}</Text>
        <Text>wind speed: {hour.wind_speed}</Text>
      </CardBody>
    </Card>
  );
}

export default HourlyWeatherCard;
