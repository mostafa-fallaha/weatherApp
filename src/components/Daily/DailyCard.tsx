import { Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Daily } from "../../hooks/useGeoCode";
import { ConvertingServices } from "../../services/converting-services";
import getWeatherIcon from "../../services/get-weather-icon";
interface Props {
  day: Daily;
}
function DailyCard({ day }: Props) {
  const date = new Date(day.dt * 1000);
  const d = date.getDay();
  const convert = new ConvertingServices(d);

  return (
    <Card
      width={{ base: "15vh", sm2: "17vh", md2: "20vh", lg: "22vh" }}
      textAlign={"center"}
      height={{
        base: "14svh",
        sm2: "15svh",
        md: "17svh",
        md2: "19.5svh",
        lg: "20svh",
      }}
      backgroundColor={"none"}
      border={"1px solid #81aeca"}
      transition="0.5s"
      padding={{ base: "2%" }}
    >
      <Text
        fontWeight={700}
        fontSize={{ base: 10, sm: 11, sm2: 12, md: 11, md2: 13, lg: 18 }}
      >
        {convert.UnixToDayName(d)}
      </Text>
      <HStack justifyContent={"space-evenly"} marginTop={2}>
        <Image
          src={getWeatherIcon(day.weather[0].icon)}
          width={{ base: "40px", md: "50px", lg: 75 }}
          alignSelf={"center"}
        />
        <VStack>
          <Text
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 11, md2: 12, lg: 18 }}
            fontWeight={700}
          >
            {day.temp.day.toFixed(1)}
            {`\u00B0C`}
          </Text>
          <Text
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 11, md2: 12, lg: 18 }}
          >
            {day.weather[0].description}
          </Text>
        </VStack>
      </HStack>
    </Card>
  );
}

export default DailyCard;
