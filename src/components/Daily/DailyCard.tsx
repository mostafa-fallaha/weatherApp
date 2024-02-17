import { Card, CardBody, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Daily } from "../../hooks/useGeoCode";
import getWeatherIcon from "../../services/get-weather-icon";
import { ConvertingServices } from "../../services/converting-services";
interface Props {
  day: Daily;
}
function DailyCard({ day }: Props) {
  const date = new Date(day.dt * 1000);
  const d = date.getDay();
  const convert = new ConvertingServices(d);

  return (
    <Card
      width={190}
      textAlign={"center"}
      height={220}
      backgroundColor={"none"}
      border={"1px solid #81aeca"}
      _hover={{ width: "200px" }}
      transition="0.5s"
    >
      <Text fontWeight={700} fontSize={20}>
        {convert.UnixToDayName(d)}
      </Text>
      <HStack justifyContent={"space-evenly"} marginTop={2}>
        <Image
          src={getWeatherIcon(day.weather[0].icon)}
          width={75}
          alignSelf={"center"}
        />
        <VStack>
          <Text fontSize={20} fontWeight={700}>
            {day.temp.day.toFixed(1)}
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
      </CardBody>
    </Card>
  );
}

export default DailyCard;
