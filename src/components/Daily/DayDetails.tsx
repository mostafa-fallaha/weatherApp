import { Box, Text } from "@chakra-ui/react";
import { Daily } from "../../hooks/useGeoCode";
import { useLocation } from "react-router-dom";
import { ConvertingServices } from "../../services/converting-services";

interface DayState {
  day: Daily; // Define the shape of day object here
}

function DayDetails() {
  const location = useLocation();
  const { day } = location.state as DayState;
  const date = new Date(day.dt * 1000);
  const d = date.getDay();
  const convert = new ConvertingServices(d);
  return (
    <Box marginLeft={20} marginTop={5}>
      <Text fontSize={25} fontWeight={800}>
        {convert.UnixToDayName(d)}
      </Text>
      <Text marginTop={5} fontSize={17}>
        {day.summary}
      </Text>

      <Text marginTop={5} fontSize={17}>
        {day.alerts && day.alerts[0].description}
      </Text>
    </Box>
  );
}

export default DayDetails;
