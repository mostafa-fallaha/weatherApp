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
      width="883px"
      height={expanded ? "100px" : "60px"}
      backgroundColor="none"
      border="1px solid #3b7094"
      display="flex"
      flexWrap={"wrap"}
      onClick={handleClick}
      cursor={"pointer"}
      transition="0.5s"
    >
      {/* ====================== Before Expanding =========================================================== */}

      <Box display="flex" width="10000px">
        <Text
          fontWeight={800}
          marginLeft={5}
          fontSize={18}
          marginTop={5}
          width="100px"
        >
          {hourIndex === 0 ? 12 : hourIndex > 12 ? hourIndex - 12 : hourIndex}
          {hourIndex < 12 ? " am" : " pm"}
        </Text>

        <Image
          src={getWeatherIcon(hour.weather[0].icon)}
          key={hour.weather[0].id}
          width="70px"
          height="70px"
        />

        <Box marginTop={5} display="flex">
          <Text fontSize={16} width="160px" marginLeft={1}>
            {hour.weather[0].description}
          </Text>

          <Text fontWeight={700} width="130px">
            {hour.temp.toFixed(1)}
            {`\u00B0C`}
          </Text>

          <Image src="./src/assets/drops.png" width="20px" height="20px" />
          <Text width="90px" marginLeft={2}>
            {(hour.pop * 100).toFixed(0)}%
          </Text>

          <Box marginTop={1}>
            <TbWind />
          </Box>
          <Text marginLeft={2} width="115px">
            <b>{(hour.wind_speed * 3.6).toFixed(1)}</b> km/h
          </Text>

          <Box marginTop={1}>
            <IoSunnyOutline />
          </Box>
          <Text width="60px" marginLeft={1}>
            {hour.uvi.toFixed(0)}
          </Text>
        </Box>
      </Box>

      {/* ====================== After Expanding =========================================================== */}

      <Box display={contentVisible ? "flex" : "none"} marginLeft="29.5%">
        <Text>
          humidity: <b>{hour.humidity} </b>%
        </Text>
        <Text marginLeft={10}>
          pressure: <b>{hour.pressure}</b> mb
        </Text>
        <Text marginLeft={10}>
          feels like: <b>{hour.feels_like}</b>
          {`\u00B0C`}
        </Text>
      </Box>
    </Box>

    // <Card
    //   width={1200}
    //   height={100}
    //   backgroundColor={"none"}
    //   border={"1px solid #3b779f"}
    //   display={"inline-block"}
    // >
    //   <Text fontWeight={800}>
    //     {hourIndex === 0 ? 12 : hourIndex > 12 ? hourIndex - 12 : hourIndex}
    //     {hourIndex < 12 ? " am" : " pm"}
    //   </Text>
    //   <HStack justifyContent={"space-evenly"}>
    //     <Image
    //       src={getWeatherIcon(hour.weather[0].icon)}
    //       key={hour.weather[0].id}
    //       width={75}
    //       alignSelf={"center"}
    //       marginBottom={0}
    //     />
    //     <VStack>
    //       <Text
    //         color={
    //           hour.temp < 10
    //             ? "#0096c7"
    //             : hour.temp < 20
    //             ? "#ffba08"
    //             : "#fe7f2d"
    //         }
    //         fontSize={20}
    //         fontWeight={700}
    //       >
    //         {hour.temp}
    //         {`\u00B0C`}
    //       </Text>
    //       <Text fontSize={13}>{hour.weather[0].description}</Text>
    //     </VStack>
    //   </HStack>

    //   <CardBody>
    //     <HStack justifyContent={"space-between"}>
    //       <Text fontSize={14}>
    //         feels like <br />{" "}
    //         <b>
    //           {hour.feels_like} {`\u00B0C`}
    //         </b>
    //       </Text>
    //       <Text fontSize={14}>
    //         wind speed
    //         <br /> <b>{hour.wind_speed} m/s</b>
    //       </Text>
    //     </HStack>

    //     <HStack justifyContent={"space-between"} marginTop={1}>
    //       <Text fontSize={14}>
    //         humidity <br /> <b>{hour.humidity} %</b>
    //       </Text>
    //       <Text fontSize={14}>
    //         pressure <br /> <b>{hour.pressure} hPa</b>
    //       </Text>
    //     </HStack>
    //   </CardBody>
    // </Card>
  );
}

export default HourlyWeatherCard;
