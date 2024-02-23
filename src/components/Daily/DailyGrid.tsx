import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Daily } from "../../hooks/useGeoCode";
import DailyCard from "./DailyCard";

interface Props {
  daily_forecast: Daily[];
}

function DailyGrid({ daily_forecast }: Props) {
  return (
    <Box
      marginTop={{ base: "5%", md: "2%", lg: "1%" }}
      marginBottom={{ base: "5%" }}
      width={{ base: "100%", md: "30%", lg: "30%" }}
    >
      <Text
        fontSize={{ base: 15, md: 20, lg: 25 }}
        fontWeight={800}
        width={{ base: "100%" }}
        marginLeft={{ base: "3%", sm: "10%", sm2: "10%", md: "3%", lg: "12%" }}
      >
        Next 6 days Forecast
      </Text>
      <Box
        display="flex"
        marginTop={"6%"}
        flexWrap="wrap"
        gap="1"
        width={{ base: "100%" }}
        justifyContent={{ base: "center" }}
      >
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
