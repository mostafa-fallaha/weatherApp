import { Box } from "@chakra-ui/react";
import DailyContainer from "./Daily/DailyContainer";
import HourlyWeatherContainer from "./Hourly/HourlyWeatherContainer";
interface Props {
  city: string;
  widH: number;
  widD: number;
}
function ContainerAll({ city, widH, widD }: Props) {
  return (
    <Box display={"flex"} justifyContent="space-evenly" flexWrap="wrap">
      <HourlyWeatherContainer city={city} widH={widH} />
      <DailyContainer city={city} widD={widD} />
    </Box>
  );
}

export default ContainerAll;
