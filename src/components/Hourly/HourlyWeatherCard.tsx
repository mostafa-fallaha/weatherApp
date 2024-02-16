import { Card, CardBody, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Hourly } from "../../hooks/useGeoCode";
import getWeatherIcon from "../../services/get-weather-icon";

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
      height={230}
      backgroundColor={"none"}
      border={"1px solid #3b779f"}
    >
      <Text fontWeight={800}>
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
        <VStack>
          <Text
            color={
              hour.temp < 10
                ? "#0096c7"
                : hour.temp < 20
                ? "#ffba08"
                : "#fe7f2d"
            }
            fontSize={20}
            fontWeight={700}
          >
            {hour.temp}
            {`\u00B0C`}
          </Text>
          <Text fontSize={13}>{hour.weather[0].description}</Text>
        </VStack>
      </HStack>

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={14}>
            feels like <br />{" "}
            <b>
              {hour.feels_like} {`\u00B0C`}
            </b>
          </Text>
          <Text fontSize={14}>
            wind speed
            <br /> <b>{hour.wind_speed} m/s</b>
          </Text>
        </HStack>

        <HStack justifyContent={"space-between"} marginTop={1}>
          <Text fontSize={14}>
            humidity <br /> <b>{hour.humidity} %</b>
          </Text>
          <Text fontSize={14}>
            pressure <br /> <b>{hour.pressure} hPa</b>
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default HourlyWeatherCard;
