export const WeatherCard = ({ forecasts }) => {
  return (
    <div>
      {forecasts &&
        forecasts.map((forecast, index) => {
          return (
            <div key={index}>
              <p>Temperature: {forecast.maxt.toFixed()}°</p>
              <p>icon:</p>
              <p>Forecast: {forecast.conditions}</p>
            </div>
          );
        })}
    </div>
  );
};
