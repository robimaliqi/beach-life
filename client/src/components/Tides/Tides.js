import { useEffect, useState } from "react";

import { data } from "./beachApiResult";
import { dayOfWeek } from "../Weather/WeatherForecastApi";
const tidalAPIKey = require("../../tide-api");

export const Tides = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const endDate = new Date(new Date().setDate(new Date().getDate() + 6))
    .toISOString()
    .split("T")[0];

    const [tides, setTides] = useState(data);

    // this is commented out because there is a limit on how many times it can be called
  // DO NOT DELETE

  // useEffect(() => {
  //   fetch(
  //     `https://api.stormglass.io/v2/tide/extremes/point?lat=${props.lat}&lng=${props.long}&start=${today}&end=${endDate}`,
  //     {
  //       headers: {
  //         Authorization: tidalAPIKey,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setTides(responseData.data);
  //       console.log(tides);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-gb");
  };

  const getDates = (tidesObject) => {
    const justDates = tidesObject.map(tide => {
      return formatDate(tide.time);
    })
    return new Set(justDates)
  }

  const dates = getDates(tides)  

  return (
    <div className="weather-container p-3">
      {tides.map((tide, index) => (
        <div key={index} className="col weather-day">
          <p className="weather-data" id="date">
            {dayOfWeek(tide.time)}
          </p>
          <p className="weather-data" id="temp">
            {formatTime(tide.time)}
          </p>
          <p className="weather-data" id="condition">
            {tide.type}
          </p>
        </div>
      ))};
    </div>
    // <div>
    //   <ul className="tide-dates">
    //     {dates.map((date, index) => (
    //       <li className="tide" key={index}>
    //         {date}
    //       </li>
    //     ))}
    //   </ul>

    //   <ul className="tides">
    //     {tides.map((tide, index) => (
    //       <li className="tide" key={index}>
    //         {formatDate(tide.time)}, {formatTime(tide.time)}: {tide.type}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}