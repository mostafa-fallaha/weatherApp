import axios from "axios";
import { useEffect } from "react";

const useData = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=52.2297&lon=21.0122&dt=1645888976&appid=7bc803e085054f46ebb29309b36d9fff`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, []);
};

export default useData;
