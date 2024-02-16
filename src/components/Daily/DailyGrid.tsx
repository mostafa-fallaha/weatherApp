import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Daily } from "../../hooks/useGeoCode";
import DailyCard from "./DailyCard";

interface Props {
  daily_forecast: Daily[];
}

function DailyGrid({ daily_forecast }: Props) {
  return (
    <Box marginTop={"5%"} marginBottom={"2%"}>
      <Text fontSize={25} fontWeight={800} marginLeft={"5%"}>
        Next 7 days Forecast
      </Text>
      <HStack marginTop={"1%"} justifyContent={"center"}>
        {daily_forecast.slice(1).map((day) => (
          <Link to="/day-details" state={{ day: day }} key={day.dt}>
            <DailyCard day={day} />
          </Link>
        ))}
      </HStack>
    </Box>
  );
}

export default DailyGrid;
