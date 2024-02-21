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
          fontSize={{ base: 9.5, sm: 11, sm2: 12, md: 18 }}
          marginTop={5}
          width={{
            base: "30px",
            sm: "40px",
            sm2: "45px",
            md: "80px",
            lg: "80px",
          }}
          height={{ base: "25px" }}
        >
          {hourIndex === 0 ? 12 : hourIndex > 12 ? hourIndex - 12 : hourIndex}
          {hourIndex < 12 ? " am" : " pm"}
        </Text>

        <Image
          src={getWeatherIcon(hour.weather[0].icon)}
          key={hour.weather[0].id}
          width={{ base: "35px", sm: "40px", md: "50px", lg: "70px" }}
          height={{ base: "35px", sm: "40px", md: "50px", lg: "70px" }}
          marginTop={{ base: "4%", sm: "3.2%", md: "1%", lg: "0.5%" }}
        />

        <Box marginTop={{ base: 5 }} display="flex">
          <Text
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
            height={{ base: "25px" }}
            width={{
              base: "50px",
              sm: "60px",
              sm2: "65px",
              md: "120px",
              lg: "200px",
            }}
            marginLeft={1}
          >
            {hour.weather[0].description}
          </Text>

          <Text
            fontSize={{ base: 9.5, sm: 11, sm2: 12, md: 18 }}
            height={{ base: "25px" }}
            fontWeight={700}
            width={{
              base: "40px",
              sm: "50px",
              sm2: "60px",
              md: "70px",
              lg: "120px",
            }}
          >
            {hour.temp.toFixed(1)}
            {`\u00B0C`}
          </Text>

          <Image
            src="./drops.png"
            width={{ base: "15px", sm: "17px", md: "20px", lg: "25px" }}
            height={{ base: "15px", sm: "17px", md: "20px", lg: "25px" }}
          />

          <Text
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
            height={{ base: "25px" }}
            width={{
              base: "25px",
              sm: "30px",
              sm2: "40px",
              md: "70px",
              lg: "90px",
            }}
            marginLeft={{ base: 1, sm: 1, md: 2, lg: 2 }}
          >
            {(hour.pop * 100).toFixed(0)}%
          </Text>

          <Box marginTop={{ base: "0%", lg: "0.7%" }}>
            <TbWind />
          </Box>
          <Text
            marginLeft={{ base: 1, lg: 2 }}
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
            height={{ base: "25px" }}
            width={{ base: "55px", sm: "60px", sm2: "70px", md: "120px" }}
          >
            <b>{(hour.wind_speed * 3.6).toFixed(1)}</b> km/h
          </Text>
          <Box marginTop={{ base: "0%", lg: "0.7%" }}>
            <IoSunnyOutline />
          </Box>
          <Text
            fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
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
        marginLeft={{ base: "40%", sm2: "38%", lg: "46%" }}
      >
        <Text
          fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
          height={{ base: "25px" }}
          width={{ base: "70px", sm: "90px", md: "130px" }}
        >
          humidity: <b>{hour.humidity} </b>%
        </Text>
        <Text
          marginLeft={{ base: 2, lg: 10 }}
          fontSize={{ base: 10, sm: 11, sm2: 12, md: 18 }}
          height={{ base: "25px" }}
          width={{ base: "90px", sm: "100px", md: "150px" }}
        >
          pressure: <b>{hour.pressure}</b> mb
        </Text>
      </Box>
    </Box>
  );
}

export default HourlyWeatherCard;
