import useGeoCode from "../../hooks/useGeoCode";
import DailyGrid from "./DailyGrid";
import DailySkeletons from "./DailySkeletons";

interface Props {
  city: string;
  widD: number;
}

function DailyContainer({ city, widD }: Props) {
  const { dailyForecast, isLoading } = useGeoCode(city);
  if (isLoading || !dailyForecast) return <DailySkeletons />;
  return (
    <div>
      <DailyGrid daily_forecast={dailyForecast} widD={widD} />
    </div>
  );
}

export default DailyContainer;
