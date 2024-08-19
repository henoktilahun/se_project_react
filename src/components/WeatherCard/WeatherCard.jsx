import "./WeatherCard.css";
import { weatherOptions, defualtWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temprature = weatherData?.temp?.[currentTemperatureUnit];
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
      <p className="weather-card__temp">
        {temprature} {currentTemperatureUnit} &deg;
      </p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.conditon}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
