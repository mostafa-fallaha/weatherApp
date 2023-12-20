import useGeoCode from "../hooks/useGeoCode";
import HourlyWeatherGrid from "./HourlyWeatherGrid";
import HourlyWeatherSkeletons from "./HourlyWeatherSkeletons";

interface Props {
  city: string;
}

function HourlyWeatherContainer({ city }: Props) {
  const { hourlyForecast, current } = useGeoCode(city);

  if (!hourlyForecast || !current) return <HourlyWeatherSkeletons />;

  return (
    <HourlyWeatherGrid hourly_forecast={hourlyForecast} current={current} />
  );
}

export default HourlyWeatherContainer;
