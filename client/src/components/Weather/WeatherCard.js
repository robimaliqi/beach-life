import "./Weather.css";
import { dayOfWeek } from "../../api/WeatherForecast";
export const WeatherCard = ({ forecasts }) => {
  return (
    <div className="weather-container p-3">
      {forecasts &&
        forecasts.map((forecast, index) => {
          return (
            <div key={index} className="col weather-day">
              <p className="weather-data" id="date">
                {dayOfWeek(forecast.datetimeStr)}
              </p>
              <p className="weather-data" id="temp">
                {forecast.maxt.toFixed()}°C
              </p>

              <div className="icon-wrapper">
                <img
                  className="weather-icon"
                  src={require(`../../assets/weatherIcons/${forecast.icon}.png`)}
                  alt={`${forecast.icon} weather icon`}
                />
              </div>
              <p className="weather-data" id="condition">
                {forecast.conditions}
              </p>
            </div>
          );
        })}
    </div>
  );
};
