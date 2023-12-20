import { HStack, Text } from "@chakra-ui/react";
import useGeoCode from "../hooks/useGeoCode";

interface Props {
  cityName: string;
}

function First({ cityName }: Props) {
  const { place } = useGeoCode(cityName);

  const index = place.indexOf("/");
  const location = place.slice(index + 1) + ", " + place.slice(0, index);

  return (
    <HStack width={"100%"} justifyContent={"center"} alignContent={"center"}>
      <Text fontSize={30} fontWeight={900}>
        {location}
      </Text>
    </HStack>
  );
}

export default First;
