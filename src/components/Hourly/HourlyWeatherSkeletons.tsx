import { HStack } from "@chakra-ui/react";
import HourlyWeatherSkeleton from "./HourlyWeatherSkeleton";

function HourlyWeatherSkeletons() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <HStack flexWrap={"wrap"} marginTop={"6%"} justifyContent={"center"}>
      {skeletons.map((s) => (
        <HourlyWeatherSkeleton key={s} />
      ))}
    </HStack>
  );
}

export default HourlyWeatherSkeletons;
