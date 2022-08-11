import { weatherAPI_KEY } from "../../weatherApiKey";
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

export const dayOfWeek = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(date);
  let dayName = days[d.getDay()].substring(0, 3);

  // Format today's date
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const today = currentDate.toDateString().substring(0, 3);

  if (dayName === today) {
    dayName = "Today";
  }
  return dayName;
};

// // Sun Aug 07 - date format
// // Format today's date
// const currentDate = new Date();
// currentDate.setHours(0, 0, 0, 0);
// const today = currentDate.toString().split("2022")[0];

// export const dayOfWeek = (date) => {
//   const d = new Date(date);
//   let dayName = d.toString().split("2022")[0];

//   if (dayName === today) {
//     dayName = "Today";
//   }
//   // console.log(new Date().toISOString());
//   console.log(today);
//   console.log(dayName);
//   return dayName;
// };
