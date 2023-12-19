import { HStack, Image, Text } from "@chakra-ui/react";
import useGeoCode from "../hooks/useGeoCode";

function Second() {
  const { current } = useGeoCode("London");
  return (
    <>
      <HStack>
        {current && (
          <Image
            src={
              "https://openweathermap.org/img/wn/" +
              current.weather[0].icon +
              "@2x.png"
            }
            width={150}
            key={current.weather[0].id}
          />
        )}
      </HStack>
      {current && (
        <Text key={current.weather[0].id}>
          {current.weather[0].description}
        </Text>
      )}
    </>
  );
}

export default Second;
