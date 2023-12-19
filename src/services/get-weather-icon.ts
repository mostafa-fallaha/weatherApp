function getWeatherIcon(type: string) {
  const url = "https://openweathermap.org/img/wn/" + type + "@2x.png";
  return url;
}

export default getWeatherIcon;
