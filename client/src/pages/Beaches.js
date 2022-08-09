import { Review } from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Weather } from "../components/Weather/Weather";
import { data } from "../components/beachApiResult";
const tidalAPIKey = require("../tide-api");
const beaches = require("../components/beachList");

export const Beaches = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const endDate = new Date(new Date().setDate(new Date().getDate() + 6))
    .toISOString()
    .split("T")[0];
  const { id } = useParams();
  const [beach, setBeach] = useState([
    {
      _id: "",
      name: "",
      district: "",
      lat: "",
      long: "",
    },
  ]);

  const [tides, setTides] = useState([
    // don't change this
    { time: "2022-08-09T05:06:07", type: "high" },
  ]);

  const getBeach = (id) => {
    return beaches.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(id)[0].lat;
  const long = getBeach(id)[0].long;
  const beachCoOrds = `${lat}, ${long}`;

  useEffect(() => {
    setBeach(getBeach(id));
  }, []);

  // this is commented out because there is a limit on how many times it can be called
  // DO NOT DELETE

  // useEffect(() => {
  //   fetch(
  //     `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${long}&start=${today}&end=${endDate}`,
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
    <div className="container">
      <h1>Welcome to {beach[0].name}</h1>
      <Weather beach={beachCoOrds} />
      <ul className="tides">
        {tides.map((tide, index) => (
          <li className="tide" key={index}>
            {formatDate(tide.time)}, {formatTime(tide.time)}: {tide.type}
          </li>
        ))}
      </ul>
      <div className="review">
        <h3>Reviews</h3>
        <Review id={id} user={props.user}/>
      </div>
    </div>
  );
};
