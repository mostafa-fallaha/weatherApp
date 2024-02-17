import { Text } from "@chakra-ui/react";
import useGeoCode from "../../hooks/useGeoCode";
import DailyGrid from "./DailyGrid";

interface Props {
  city: string;
}

function DailyContainer({ city }: Props) {
  const { dailyForecast, isLoading } = useGeoCode(city);
  if (isLoading || !dailyForecast)
    return (
      <Text marginLeft={20} marginTop={5}>
        Loading...
      </Text>
    );
  return (
    <div>
      <DailyGrid daily_forecast={dailyForecast} />
    </div>
  );
}

export default DailyContainer;
