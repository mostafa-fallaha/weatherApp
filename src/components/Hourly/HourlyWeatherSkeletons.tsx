import { Box } from "@chakra-ui/react";
import HourlyWeatherSkeleton from "./HourlyWeatherSkeleton";

function HourlyWeatherSkeletons() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box
      width="65%"
      overflowX="auto"
      height="60svh"
      marginLeft="4%"
      marginTop="6%"
      border="1px solid #81aeca"
    >
      {skeletons.map((s) => (
        <HourlyWeatherSkeleton key={s} />
      ))}
    </Box>
  );
}

export default HourlyWeatherSkeletons;
