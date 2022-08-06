import { weatherAPI_KEY } from "../weatherApiKey";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast";

const getWeatherData = (searchParams) => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({
    aggregateHours: 24,
    unitGroup: "uk",
    contentType: "json",
    iconSet: "icons1",
    ...searchParams,
    key: weatherAPI_KEY,
  });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

// API call only shows information about the beach
const currentBeach = (data) => {
  const { locations } = data;
  return { locations };
};

export const getBeachWeatherData = async (searchParams) => {
  const beachWeatherData = await getWeatherData(searchParams).then(
    currentBeach
  );
  const data = Object.values(beachWeatherData)[0];
  const beachData = Object.values(data)[0].values;
  const weeklyData = beachData.slice(0, 7);
  const formattedData = weeklyData.map((day) => {
    return {
      conditions: day.conditions,
      icon: day.icon,
      maxt: day.maxt,
      datetimeStr: day.datetimeStr,
      datetime: day.datetime,
    };
  });
  return formattedData;
};