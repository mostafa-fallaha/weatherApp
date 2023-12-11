import "./App.css";
import useGeoCode from "./hooks/useGeoCode";

function App() {
  const { data } = useGeoCode("Beirut");

  return (
    <div>
      <ul>
        {data.map((d) => (
          <li key={d.weather[0].id}>
            {d.clouds} <br />
            {d.temp} <br />
            {d.humidity} <br />
            {d.wind_speed} <br />
            {d.sunriseDate} <br />
            {d.sunsetDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
