import { weatherAPI_KEY } from "../weatherApiKey";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast";

export const getWeatherData = (searchParams) => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({
    aggregateHours: 24,
    unitGroup: "uk",
    contentType: "json",
    ...searchParams,
    key: weatherAPI_KEY,
  });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
