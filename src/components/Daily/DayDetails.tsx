import { Text } from "@chakra-ui/react";
import { Daily } from "../../hooks/useGeoCode";
import { useLocation } from "react-router-dom";

interface DayState {
  day: Daily; // Define the shape of day object here
}

function DayDetails() {
  const location = useLocation();
  const { day } = location.state as DayState;
  return (
    <div>
      <Text>{day.temp.day}</Text>
    </div>
  );
}

export default DayDetails;
