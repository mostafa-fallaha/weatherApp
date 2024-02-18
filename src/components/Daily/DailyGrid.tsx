import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Daily } from "../../hooks/useGeoCode";
import DailyCard from "./DailyCard";

interface Props {
  daily_forecast: Daily[];
}

function DailyGrid({ daily_forecast }: Props) {
  return (
    <Box marginTop={"5%"} marginBottom={"2%"}>
      <Text fontSize={25} fontWeight={800} width="50vh">
        Next 6 days Forecast
      </Text>
      <Box display="flex" marginTop={"6%"} flexWrap="wrap" width="50vh" gap="1">
        {daily_forecast.slice(1, 7).map((day) => (
          <Link to="/day-details" state={{ day: day }} key={day.dt}>
            <DailyCard day={day} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default DailyGrid;
