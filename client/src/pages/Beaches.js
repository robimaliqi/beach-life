import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../components/beachApiResult";
const tidalAPIKey = require("../tide-api");
const beachList = require("../components/beachList");

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
  const [tides, setTides] = useState([{ date: "", type: "" }]);
  const getBeach = (id) => {
    return beachList.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(id)[0].lat;
  const long = getBeach(id)[0].long;

  useEffect(() => {
    setBeach(getBeach(id));
  }, []);

  useEffect(() => {
    fetch(
      //`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${long}&start=${today}&end=${endDate}`,
      {
        headers: {
          Authorization: tidalAPIKey,
        },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setTides(responseData.data);
        console.log(tides);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Welcome to {beach[0].name}</h1>
      <div>
        {lat}, {long}
      </div>
      <div className="tides">
        {tides.map((tide, index) => {
          <li className="tide" key={index}>
            {tide.date}: {tide.type}
          </li>;
        })}
      </div>
    </div>
  );
};
