import "./WeatherCard.css";
import { weatherOptions, defualtWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredWeatherOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredWeatherOptions.length === 0) {
    weatherOption = defualtWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredWeatherOptions[0];
  }
  
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.conditon}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
