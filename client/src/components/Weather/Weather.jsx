import { getBeachWeatherData } from "../../api/WeatherForecast";

export const Weather = () => {
  const fetchWeather = async () => {
    const data = await getBeachWeatherData({
      // SearchParams
      startDateTime: "2022-08-05T00:00:00",
      endDateTime: "2022-08-05T00:00:00",
      location: "54.5867919627395,-0.969779715531797",
    });
    const allData = Object.values(data)[0];
    const beachData = Object.values(allData)[0].values;
    console.log(beachData);
  };

  fetchWeather();

  return (
    <div>
      <p>Weather Forecast</p>
      <div>
        <p className="day">Monday</p>
        <p className="temperature">22°</p>
      </div>
    </div>
  );
};
