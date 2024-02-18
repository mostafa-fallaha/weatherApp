import useGeoCode from "../../hooks/useGeoCode";
import HourlyWeatherGrid from "./HourlyWeatherGrid";
import HourlyWeatherSkeletons from "./HourlyWeatherSkeletons";

interface Props {
  city: string;
  widH: number;
}

function HourlyWeatherContainer({ city, widH }: Props) {
  const { hourlyForecast, current, isLoading } = useGeoCode(city);

  if (isLoading) return <HourlyWeatherSkeletons />;

  if (!hourlyForecast || !current) return <HourlyWeatherSkeletons />;

  return (
    <HourlyWeatherGrid
      hourly_forecast={hourlyForecast}
      current={current}
      widH={widH}
    />
  );
}

export default HourlyWeatherContainer;
