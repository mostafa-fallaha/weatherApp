import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { ConvertingServices } from "../services/converting-services";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Temperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface Current {
  dt: number;
  sunrise: number;
  sunriseDate: string;
  sunset: number;
  sunsetDate: string;
  temp: number;
  pressure: number;
  humidity: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
}

export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
}

interface Daily {
  dt: number;
  sunrise: number;
  sunriseDate: string;
  sunset: number;
  sunsetDate: string;
  summary: string;
  temp: Temperature;
  pressure: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  rain: number;
}

interface AllData {
  timezone: string;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

const useGeoCode = (city: string) => {
  const apiKey = "7bc803e085054f46ebb29309b36d9fff";
  const convert = new ConvertingServices(1);
  const [current, setCurrent] = useState<Current | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<Hourly[] | null>(null);
  const [dailyForecast, setDailyForecast] = useState<Daily[] | null>(null);
  const [place, setPlace] = useState("");

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
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
          { signal: controler.signal }
        );
      })
      .then((res) => {
        console.log(res.data);

        const newCurrent: Current = res.data.current;
        newCurrent.sunriseDate = convert.UnixToDate(newCurrent.sunrise);
        newCurrent.sunsetDate = convert.UnixToDate(newCurrent.sunset);
        setCurrent(newCurrent);

        const newDaily: Daily[] = res.data.daily;
        newDaily.map((n) => {
          n.sunriseDate = convert.UnixToDate(n.sunrise);
          n.sunsetDate = convert.UnixToDate(n.sunset);
        });
        setDailyForecast(newDaily);

        setHourlyForecast(res.data.hourly);

        setPlace(res.data.timezone);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });

    return () => controler.abort();
  }, [city]);

  return { current, hourlyForecast, dailyForecast, place };
};

export default useGeoCode;
