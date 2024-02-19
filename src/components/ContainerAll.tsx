import { Box } from "@chakra-ui/react";
import DailyContainer from "./Daily/DailyContainer";
import HourlyWeatherContainer from "./Hourly/HourlyWeatherContainer";
interface Props {
  city: string;
}
function ContainerAll({ city }: Props) {
  return (
    <Box
      display={"flex"}
      justifyContent="space-evenly"
      flexWrap="wrap"
      width={"100%"}
    >
      <HourlyWeatherContainer city={city} />
      <DailyContainer city={city} />
    </Box>
  );
}

export default ContainerAll;
