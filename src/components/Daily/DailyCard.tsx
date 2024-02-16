import { Card, CardBody, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Daily } from "../../hooks/useGeoCode";
import getWeatherIcon from "../../services/get-weather-icon";
interface Props {
  day: Daily;
}
function DailyCard({ day }: Props) {
  const date = new Date(day.dt * 1000);
  const d = date.getDay();
  const dayName = (id: number) => {
    return id == 0
      ? "Sunday"
      : id == 1
      ? "Monday"
      : id == 2
      ? "Tuesday"
      : id == 3
      ? "Wednesday"
      : id == 4
      ? "Thursday"
      : id == 5
      ? "Friday"
      : "Saturday";
  };
  return (
    <Card
      width={190}
      textAlign={"center"}
      height={220}
      backgroundColor={"none"}
      border={"1px solid #3b779f"}
    >
      <Text fontWeight={700} fontSize={20}>
        {dayName(d)}
      </Text>
      <HStack justifyContent={"space-evenly"} marginTop={2}>
        <Image
          src={getWeatherIcon(day.weather[0].icon)}
          width={75}
          alignSelf={"center"}
        />
        <VStack>
          <Text
            color={
              day.temp.day < 10
                ? "#0096c7"
                : day.temp.day < 20
                ? "#ffba08"
                : "#fe7f2d"
            }
            fontSize={20}
            fontWeight={700}
          >
            {day.temp.day}
            {`\u00B0C`}
          </Text>
          <Text fontSize={13}>{day.weather[0].description}</Text>
        </VStack>
      </HStack>
      <CardBody>
        <HStack>
          <Text fontSize={14} fontWeight={500}>
            {day.summary}
          </Text>
        </HStack>
        {/* <HStack justifyContent={"space-between"} marginTop={"5%"}>
          <Text>
            rain <br /> <b>{day.rain}</b>
          </Text>
          <Text>
            wind speed <br /> <b>{day.wind_speed} m/s</b>
          </Text>
        </HStack> */}
      </CardBody>
    </Card>
  );
}

export default DailyCard;
