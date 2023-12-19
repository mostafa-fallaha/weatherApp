import { HStack, Image, Text } from "@chakra-ui/react";
import useGeoCode from "../hooks/useGeoCode";

function Second() {
  const { data } = useGeoCode("London");
  return (
    <>
      <HStack>
        {data.map((d) => (
          <Image
            src={
              "https://openweathermap.org/img/wn/" +
              d.weather[0].icon +
              "@2x.png"
            }
            width={150}
            key={d.weather[0].id}
          />
        ))}
      </HStack>
      {data.map((d) => (
        <Text key={d.weather[0].id}>{d.weather[0].description}</Text>
      ))}
    </>
  );
}

export default Second;
