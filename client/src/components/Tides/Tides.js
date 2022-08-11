import { useEffect, useState } from "react";
import "./Tides.css";
import { data } from "./beachApiResult";
import { dayOfWeek } from "../Weather/WeatherForecastApi";
import { Emoji } from "../Emojis/Emojis";
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
    return new Date(date)
      .toLocaleTimeString("en-gb", { hour: "numeric", hour12: true })

      .slice(0, 5);
  };

  const getDates = (tidesObject) => {
    const justDates = tidesObject.map((tide) => {
      return formatDate(tide.time);
    });
    return new Set(justDates);
  };

  const dates = getDates(tides);

  return (
    <div className="tide-container p-3">
      {tides.map((tide, index) => (
        <div key={index} className="col-3 tide-day">
          <p className="tide-data" id="date">
            {dayOfWeek(tide.time)}
          </p>
          <p className="tide-data" id="temp">
            {formatTime(tide.time)}
          </p>
          {tide.type === "low" ? (
            <p className="tide-data" id="condition" style={{ color: "blue" }}>
              <Emoji symbol="⬇" /> {tide.type}
            </p>
          ) : (
            <p className="tide-data" id="condition" style={{ color: "red" }}>
              <Emoji symbol="⬆" /> {tide.type}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
