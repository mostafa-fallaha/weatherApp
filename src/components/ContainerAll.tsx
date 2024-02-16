import DailyContainer from "./Daily/DailyContainer";
import HourlyWeatherContainer from "./Hourly/HourlyWeatherContainer";
import TimeZoneTitle from "./TimeZoneTitle";
interface Props {
  city: string;
}
function ContainerAll({ city }: Props) {
  return (
    <div>
      <TimeZoneTitle cityName={city} />
      <HourlyWeatherContainer city={city} />
      <DailyContainer city={city} />
    </div>
  );
}

export default ContainerAll;
