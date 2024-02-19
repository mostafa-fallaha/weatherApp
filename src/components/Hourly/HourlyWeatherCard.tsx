import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { TbWind } from "react-icons/tb";
import { Hourly } from "../../hooks/useGeoCode";
import getWeatherIcon from "../../services/get-weather-icon";

interface Props {
  hour: Hourly;
}

function HourlyWeatherCard({ hour }: Props) {
  const date = new Date(hour.dt * 1000);
  const hourIndex = date.getHours();
  const [expanded, setExpanded] = useState(false);
  const [contentVisible, setContentVisibility] = useState(false);

  const handleClick = () => {
    if (expanded) setContentVisibility(!contentVisible);
    else
      setTimeout(() => {
        setContentVisibility(!contentVisible);
      }, 100);
    setExpanded(!expanded);
  };

  return (
    <Box
      height={expanded ? "20vh" : "10vh"}
      backgroundColor="none"
      borderBottom="1px solid #3b7094"
      display="flex"
      flexWrap={"wrap"}
      onClick={handleClick}
      cursor={"pointer"}
      transition="0.5s"
    >
      {/* ====================== Before Expanding =========================================================== */}

      <Box display="flex">
        <Text
          fontWeight={800}
          marginLeft={{ base: 1, md: 5 }}
          fontSize={{ base: 9, md: 18 }}
          marginTop={5}
          width={{ base: "30px", md: "90px", lg: "100px" }}
          height={{ base: "25px" }}
        >
          {hourIndex === 0 ? 12 : hourIndex > 12 ? hourIndex - 12 : hourIndex}
          {hourIndex < 12 ? " am" : " pm"}
        </Text>

        <Image
          src={getWeatherIcon(hour.weather[0].icon)}
          key={hour.weather[0].id}
          width={{ base: "25px", md: "50px", lg: "70px" }}
          height={{ base: "25px", md: "50px", lg: "70px" }}
          marginTop={{ base: "4.5%", lg: "0%" }}
        />

        <Box marginTop={5} display="flex">
          <Text
            fontSize={{ base: 9, md: 18 }}
            height={{ base: "25px" }}
            width={{ base: "50px", md: "120px", lg: "200px" }}
            marginLeft={1}
          >
            {hour.weather[0].description}
          </Text>

          <Text
            fontSize={{ base: 9, md: 18 }}
            height={{ base: "25px" }}
            fontWeight={700}
            width={{ base: "37px", md: "70px", lg: "120px" }}
          >
            {hour.temp.toFixed(1)}
            {`\u00B0C`}
          </Text>

          <Image
            src="./src/assets/drops.png"
            width={{ base: "15px", md: "20px", lg: "25px" }}
            height={{ base: "15px", md: "20px", lg: "25px" }}
          />

          <Text
            fontSize={{ base: 10, md: 18 }}
            height={{ base: "25px" }}
            width={{ base: "25px", md: "70px", lg: "90px" }}
            marginLeft={2}
          >
            {(hour.pop * 100).toFixed(0)}%
          </Text>

          <Box marginTop={{ base: "0%", lg: "0.7%" }}>
            <TbWind />
          </Box>
          <Text
            marginLeft={{ base: 1, lg: 2 }}
            fontSize={{ base: 9, md: 18 }}
            height={{ base: "25px" }}
            width={{ base: "50px", md: "120px" }}
          >
            <b>{(hour.wind_speed * 3.6).toFixed(1)}</b> km/h
          </Text>
          <Box marginTop={{ base: "0%", lg: "0.7%" }}>
            <IoSunnyOutline />
          </Box>
          <Text
            fontSize={{ base: 10, md: 18 }}
            height={{ base: "25px" }}
            width={{ base: "10px", md: "30px" }}
            marginLeft={1}
          >
            {hour.uvi.toFixed(0)}
          </Text>
        </Box>
      </Box>

      {/* ====================== After Expanding =========================================================== */}

      <Box
        display={contentVisible ? "flex" : "none"}
        marginLeft={{ base: "8%", lg: "46%" }}
      >
        <Text
          fontSize={{ base: 10, md: 18 }}
          height={{ base: "25px" }}
          width={{ base: "70px", md: "130px" }}
        >
          humidity: <b>{hour.humidity} </b>%
        </Text>
        <Text
          marginLeft={{ base: 2, lg: 10 }}
          fontSize={{ base: 10, md: 18 }}
          height={{ base: "25px" }}
          width={{ base: "90px", md: "150px" }}
        >
          pressure: <b>{hour.pressure}</b> mb
        </Text>
        {/* <Text
          fontSize={{ base: 10, md: 18 }}
          height={{ base: "25px" }}
          width={{ base: "80px", md: "150px" }}
          marginLeft={{ base: 2, lg: 10 }}
        >
          feels like: <b>{hour.feels_like}</b>
          {`\u00B0C`}
        </Text> */}
      </Box>
    </Box>
  );
}

export default HourlyWeatherCard;
