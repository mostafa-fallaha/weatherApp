import "./App.css";
import useGeoCode from "./hooks/useGeoCode";

function App() {
  const { lat, lon } = useGeoCode("Paris");
  // console.log(lat, lon);

  return (
    <div>
      <ul>
        <li key={lat}>{lat}</li>
        <li key={lon}>{lon}</li>
      </ul>
    </div>
  );
}

export default App;
