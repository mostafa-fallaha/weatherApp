import { HStack, Text } from "@chakra-ui/react";
import useGeoCode from "../hooks/useGeoCode";

function First() {
  const { place } = useGeoCode("London");

  const index = place.indexOf("/");
  const location = place.slice(index + 1) + ", " + place.slice(0, index);

  return (
    <HStack width={"100%"} justifyContent={"center"} alignContent={"center"}>
      <Text fontSize={25}>{location}</Text>
    </HStack>
  );
}

export default First;
