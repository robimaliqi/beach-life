import { useEffect, useState } from "react";
import "./Tides.css";
import { data } from "./beachApiResult";
import { dayOfWeek } from "../Weather/WeatherForecastApi";
import { Emoji } from "../Emojis/Emojis";
// const tidalAPIKey = require("../../tide-api");


export const Tides = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const endDate = new Date(new Date().setDate(new Date().getDate() + 7))
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

  const fullDateFormat = (date) => {
    return `${date.split("T")[0]}T00:58:00+00:00`;
  };

  const formatTime = (date) => {
    return new Date(date)
      .toLocaleTimeString("en-gb", { hour: "numeric", hour12: true })

      .slice(0, 5);
  };

  const getDates = (tidesObject) => {
    const justDates = tidesObject.map((tide) => {
      return fullDateFormat(tide.time);
    });
    return new Set(justDates);
  };

  const dates = getDates(tides);

  let newTideArray = [];

  const makeTideArray = () => {
    dates.forEach((date) => {
      let tideObject = {};
      tideObject[date] = [];
      newTideArray.push(tideObject);
    });
  };

  const linkTides = () => {
    makeTideArray();
    newTideArray.map((element) => {
      tides.map((tide) => {
        if (formatDate(Object.keys(element)[0]) == formatDate(tide.time)) {
          Object.values(element)[0].push({ type: tide.type, time: tide.time });
        }
      });
    });
    return newTideArray;
  };

  return (
    <div className="weather-container p-3">
      {linkTides().map((date, index) => (
        <div key={index} className="col weather-day">
          <p className="weather-data" id="date">
            {dayOfWeek(new Date(Object.keys(date)[0]))}
          </p>
          {date[Object.keys(date)[0]].map((tide) => (
            <div>
              <p className="weather-data" id="temp">
                {formatTime(tide.time)}
              </p>
              {tide.type === "low" ? (
                <p
                  className="weather-data"
                  id="condition"
                  style={{ color: "#4e7bf5" }}
                >
                  <Emoji symbol="⬇" /> {tide.type}
                </p>
              ) : (
                <p
                  className="weather-data"
                  id="condition"
                  style={{ color: "#f781b6" }}
                >
                  <Emoji symbol="⬆" /> {tide.type}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
