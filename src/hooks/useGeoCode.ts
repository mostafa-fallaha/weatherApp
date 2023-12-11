import axios, { CanceledError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export interface Place {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

const useGeoCode = (city: string) => {
  //   const [data, setData] = useState<Place[]>([]);
  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();
  //   const [name, setName] = useState<string>();
  //   const [country, setCounty] = useState<string>();
  //   const [state, setState] = useState<string>();

  useEffect(() => {
    const controler = new AbortController();
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7bc803e085054f46ebb29309b36d9fff`,
        { signal: controler.signal }
      )
      .then((res: AxiosResponse<Place[]>) => {
        // setCounty(res.data[0].country);
        // setName(res.data[0].name);
        // setState(res.data[0].state);
        setLat(res.data[0].lat);
        setLon(res.data[0].lon);
        // console.log(res.data[0].lat);
        // setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });

    return () => controler.abort();
  }, []);

  return { lat, lon };
};

export default useGeoCode;
