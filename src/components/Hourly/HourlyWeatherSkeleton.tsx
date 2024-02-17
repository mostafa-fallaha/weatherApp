import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

function HourlyWeatherSkeleton() {
  return (
    <Box height="10vh" backgroundColor="none" borderBottom="1px solid #3b7094">
      <Skeleton />
      <SkeletonText marginTop={5} />
    </Box>
  );
}

export default HourlyWeatherSkeleton;
