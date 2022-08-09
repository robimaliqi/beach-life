import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const tidalAPIKey = require("../tide-api");
const beachList = require("../components/beachList");
const tideData = require("../components/beachApiResult");

const getBeach = (id) => {
  return beachList.filter((beach) => {
    return beach._id === id;
  });
};

// TODO: Get date now and in +X days to end

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

  useEffect(() => {}, []);

  useEffect(() => {
    setBeach(getBeach(id));
    fetch(
      `https://api.stormglass.io/v2/tide/extremes/point?lat=${beach[0].lat}&lng=${beach[0].long}&start=${today}&end=${endDate}`,
      {
        headers: {
          Authorization: tidalAPIKey,
        },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Welcome to {beach[0].name}</h1>
      <div>{beach[0].long}</div>
    </div>
  );
};
