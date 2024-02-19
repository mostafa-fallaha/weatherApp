import useGeoCode from "../../hooks/useGeoCode";
import DailyGrid from "./DailyGrid";
import DailySkeletons from "./DailySkeletons";

interface Props {
  city: string;
}

function DailyContainer({ city }: Props) {
  const { dailyForecast, isLoading } = useGeoCode(city);
  if (isLoading || !dailyForecast) return <DailySkeletons />;
  return <DailyGrid daily_forecast={dailyForecast} />;
}

export default DailyContainer;
