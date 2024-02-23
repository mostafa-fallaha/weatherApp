import { Box } from "@chakra-ui/react";
import DailySkeleton from "./DailySkeleton";

function DailySkeletons() {
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Box
      display="flex"
      marginTop={{ base: "17%", sm2: "15.5%", md: "6%", md2: "6%", lg: "5.5%" }}
      marginLeft={{ base: "6%", sm2: "9.5%", md: "0%", lg: "0%" }}
      flexWrap="wrap"
      width={{ base: "50vh", sm2: "60vh", md: "30%", lg: "50vh" }}
      gap="1"
    >
      {skeletons.map((s) => (
        <DailySkeleton key={s} />
      ))}
    </Box>
  );
}

export default DailySkeletons;
