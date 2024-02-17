import DailyContainer from "./Daily/DailyContainer";
import HourlyWeatherContainer from "./Hourly/HourlyWeatherContainer";
interface Props {
  city: string;
}
function ContainerAll({ city }: Props) {
  return (
    <div>
      <HourlyWeatherContainer city={city} />
      <DailyContainer city={city} />
    </div>
  );
}

export default ContainerAll;
