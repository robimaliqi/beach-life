import { useParams, useState } from "react-router-dom";
const tidalAPIKey = require("../tide-api");
const beaches = require("../components/beachList");

const TIDE_ENDPOINT = ``;

//TODO: Get date now and in +X days to end
//TODO: Get Lat and Long in variable

const getLat = (id) => {
  return beaches.map((beach) => {
    if (beach._id === id) {
      return beach.lat;
    }
  });
};

const getLong = (id) => {
  return beaches.map((beach) => {
    if (beach._id === id) {
      return beach.long;
    }
  });
};

export const Beaches = (props) => {
  const { date } = new Date(Date.now).toLocaleDateString();
  const { id } = useParams();
  const { lat } = getLat(id);
  const { long } = getLong(id);

  const getStationID = (id) => {
    fetch(
      `https://api.stormglass.io/v2/tide/extremes/point?lat=50.8265866683731&lng=-0.2713284100911&start=2022-08-08&end=2022-08-12`,
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
  };

  const findBeachName = (id) => {
    return beaches.map((beach) => {
      if (beach._id === id) {
        return beach.name;
      }
    });
  };

  return (
    <div>
      <h1>Welcome to {findBeachName(id)}</h1>
      <br>{getStationID(id)}</br>
    </div>
  );
};
