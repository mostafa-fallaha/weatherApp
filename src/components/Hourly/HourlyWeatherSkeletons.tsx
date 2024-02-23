import { Box } from "@chakra-ui/react";
import HourlyWeatherSkeleton from "./HourlyWeatherSkeleton";

function HourlyWeatherSkeletons() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box
      width={{ base: "100%", md: "60%", lg: "60%" }}
      overflowX="auto"
      height="60svh"
      marginTop={{ base: "13%", md: "7%", md2: "6%", lg: "6%" }}
      border="1px solid #81aeca"
    >
      {skeletons.map((s) => (
        <HourlyWeatherSkeleton key={s} />
      ))}
    </Box>
  );
}

export default HourlyWeatherSkeletons;
