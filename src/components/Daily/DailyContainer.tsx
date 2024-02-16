import useGeoCode from "../../hooks/useGeoCode";
import HourlyWeatherSkeletons from "../Hourly/HourlyWeatherSkeletons";
import DailyGrid from "./DailyGrid";

interface Props {
  city: string;
}

function DailyContainer({ city }: Props) {
  const { dailyForecast, isLoading } = useGeoCode(city);
  if (isLoading || !dailyForecast) return <HourlyWeatherSkeletons />;
  return (
    <div>
      <DailyGrid daily_forecast={dailyForecast} />
    </div>
  );
}

export default DailyContainer;
