import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { ConvertingServices } from "../services/converting-services";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface DataDetails {
  dt: number;
  sunrise: number;
  sunriseDate: string;
  sunset: number;
  sunsetDate: string;
  temp: number;
  humidity: number;
  clouds: number;
  wind_speed: number;
  weather: Weather[];
}

interface AllData {
  timezone: string;
  data: DataDetails[];
}

const useGeoCode = (city: string) => {
  const apiKey = "7bc803e085054f46ebb29309b36d9fff";
  const convert = new ConvertingServices(1);
  const currDate = convert.DateToUnix();
  const [data, setData] = useState<DataDetails[]>([]);

  useEffect(() => {
    const controler = new AbortController();
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
        { signal: controler.signal }
      )
      .then((res) => {
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;

        return axios.get<AllData>(
          `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${currDate}&appid=${apiKey}&units=metric`,
          { signal: controler.signal }
        );
      })
      .then((res) => {
        console.log(res.data);
        const newData: DataDetails[] = res.data.data;
        newData[0].sunriseDate = convert.UnixToDate(newData[0].sunrise);
        newData[0].sunsetDate = convert.UnixToDate(newData[0].sunset);
        setData(newData);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });

    return () => controler.abort();
  }, [city]);

  return { data };
};

export default useGeoCode;
