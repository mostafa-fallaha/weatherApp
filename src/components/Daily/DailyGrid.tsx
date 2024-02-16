import { Daily } from "../../hooks/useGeoCode";

interface Props {
  daily_forecast: Daily[];
}

function DailyGrid({ daily_forecast }: Props) {
  return (
    <ul>
      {daily_forecast.map((d) => (
        <li>
          sunrize: {d.sunriseDate} - sunset: {d.sunsetDate}
        </li>
      ))}
    </ul>
  );
}

export default DailyGrid;
