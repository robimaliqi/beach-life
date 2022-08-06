export const WeatherCard = ({ forecasts }) => {
  return (
    <div>
      {forecasts &&
        forecasts.map((forecast, index) => {
          return (
            <div key={index}>
              <p>Temperature: {forecast.maxt.toFixed()}°C</p>
              <img
                src={require(`../../assets/weatherIcons/${forecast.icon}.png`)}
                alt={`${forecast.icon} weather icon`}
              />
              <p>Forecast: {forecast.conditions}</p>
            </div>
          );
        })}
    </div>
  );
};
