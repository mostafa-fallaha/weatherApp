import { Box } from "@chakra-ui/react";
import DailySkeleton from "./DailySkeleton";

function DailySkeletons() {
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Box display="flex" marginTop={"5.5%"} flexWrap="wrap" width="50vh" gap="1">
      {skeletons.map((s) => (
        <DailySkeleton key={s} />
      ))}
    </Box>
  );
}

export default DailySkeletons;
