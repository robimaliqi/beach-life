import { useEffect } from "react";
import { useState } from "react";
import { getBeachWeatherData } from "./WeatherForecastApi";
import { WeatherCard } from "./WeatherCard";

export const Weather = ({ beach }) => {
  const date = new Date();
  const today = date.toISOString().split(".")[0];

  const [location, setLocation] = useState(beach);

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getBeachWeatherData({
        // SearchParams
        startDateTime: today,
        endDateTime: today,
        locations: location,
      }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <div>
        {weather && <WeatherCard forecasts={weather} />}
      </div>
    </div>
  );
};
