import { useEffect, useState } from "react";

import { data } from "./beachApiResult";
const tidalAPIKey = require("../../tide-api");

export const Tides = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const endDate = new Date(new Date().setDate(new Date().getDate() + 6))
    .toISOString()
    .split("T")[0];

    const [tides, setTides] = useState([
      // don't change this
      { time: "2022-08-09T05:06:07", type: "high" },
    ]);

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

  return (
    <div>
      <ul className="tides">
        {tides.map((tide, index) => (
          <li className="tide" key={index}>
            {formatDate(tide.time)}, {formatTime(tide.time)}: {tide.type}
          </li>
        ))}
      </ul>
    </div>
  )
}