import { useEffect } from "react";
import { useState } from "react";
import { getBeachWeatherData } from "../../api/WeatherForecast";
import { WeatherCard } from "./WeatherCard";

export const Weather = (forecasts) => {
  const date = new Date();
  const today = date.toISOString().split(".")[0];

  const [location, setLocation] = useState(
    "50.8202727622679, -0.145883429349536"
  );

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getBeachWeatherData({
        // SearchParams
        startDateTime: today,
        endDateTime: today,
        location: location,
      }).then(async (data) => {
        await setWeather(data);
      });
    };

    fetchWeather();
  }, [location]);

  return (
    <div>
      <p>Weather Forecast</p>
      <div>{weather && <WeatherCard forecasts={weather} />}</div>
    </div>
  );
};
