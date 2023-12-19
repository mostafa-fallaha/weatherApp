import useGeoCode from "../hooks/useGeoCode";
import HourlyWeatherGrid from "./HourlyWeatherGrid";
import HourlyWeatherSkeletons from "./HourlyWeatherSkeletons";

interface Props {
  city: string;
}

function HourlyWeatherContainer({ city }: Props) {
  const { hourlyForecast } = useGeoCode(city);

  if (!hourlyForecast) return <HourlyWeatherSkeletons />;

  return <HourlyWeatherGrid hourly_forecast={hourlyForecast} />;
}

export default HourlyWeatherContainer;
