import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { FaCloud } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { TbWind } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { Daily } from "../../hooks/useGeoCode";
import { ConvertingServices } from "../../services/converting-services";
import DetailCard from "./DetailCard";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

interface DayState {
  day: Daily; // Define the shape of day object here
}

function DayDetails() {
  const location = useLocation();
  const { day } = location.state as DayState;
  const date = new Date(day.dt * 1000);
  const d = date.getDay();
  const convert = new ConvertingServices(d);
  return (
    <>
      <Box marginLeft="6%" marginTop="1%">
        <HStack>
          <Text fontSize="2em" fontWeight={800}>
            {convert.UnixToDayName(d)}
          </Text>
          <Text marginLeft="1%" marginTop="0.5%">
            {date.toISOString().slice(0, 10)}
          </Text>
        </HStack>

        <HStack>
          <abbr title="sunrise">
            <BsSunriseFill />
          </abbr>
          <Text color={"#f4acb7"} fontWeight={600} marginRight="0.5%">
            {day.sunriseDate + " am,"}
          </Text>

          <abbr title="sunset">
            <BsSunsetFill />
          </abbr>
          <Text color={"#fcca46"} fontWeight={600}>
            {day.sunsetDate + " pm"}
          </Text>
        </HStack>

        <Text marginTop="1%" fontSize="1em">
          {day.summary}
        </Text>
      </Box>

      {/* ------------ Temp Box ------------------------------------------------------------ */}

      <Box
        marginTop="4%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        <DetailCard
          title="Day"
          content={day.temp.day.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
        <DetailCard
          title="Night"
          content={day.temp.night.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
        <DetailCard
          title="Min"
          content={day.temp.min.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
        <DetailCard
          title="Max"
          content={day.temp.max.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
        <DetailCard
          title="Feels-like: day"
          content={day.feels_like.day.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
        <DetailCard
          title="Feels-like: night"
          content={day.feels_like.night.toFixed(1).toString() + `\u00B0C`}
        >
          <FaTemperatureHigh />
        </DetailCard>
      </Box>

      {/* ------------ Other Box ------------------------------------------------------------ */}

      <Box
        marginTop="2%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        <DetailCard
          title="Chance of rain"
          content={(day.pop * 100).toString() + " %"}
        >
          <Image src="./src/assets/drops.png" width="20px" height="20px" />
        </DetailCard>
        <DetailCard title="Cloudiness" content={day.clouds.toString() + " %"}>
          <FaCloud />
        </DetailCard>
        <DetailCard
          title="Wind speed"
          content={(day.wind_speed * 3.6).toFixed(1).toString() + "km/h"}
        >
          <TbWind />
        </DetailCard>
        <DetailCard title="Humidity" content={day.humidity.toString() + " %"}>
          <WiHumidity />
        </DetailCard>
        <DetailCard title="Pressure" content={day.pressure.toString() + " mb"}>
          <WiBarometer />
        </DetailCard>
        <DetailCard title="UV index" content={day.uvi.toFixed(1).toString()}>
          <IoSunnyOutline />
        </DetailCard>
      </Box>

      <Text marginTop={5} fontSize={17}>
        {day.alerts && day.alerts[0].description}
      </Text>
    </>
  );
}

export default DayDetails;
