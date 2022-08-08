import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const tidalAPIKey = require("../tide-api");
const beachList = require("../components/beachList");
const tideData = require("../components/beachApiResult");

// TODO: Get date now and in +X days to end
// TODO: Get Lat and Long in variable
// TODO: Hardcode JSON data to test and format output

const getLong = (id) => {
  return beachList.map((beach) => {
    if (beach._id === id) {
      return beach.long;
    }
  });
};

const getLat = (id) => {
  return beachList.map((beach) => {
    if (beach._id === id) {
      return beach.lat;
    }
  });
};

const getBeach = (id) => {
  return beachList.filter((beach) => {
    return beach._id === id;
  });
};

const findBeachName = (id) => {
  return beachList.map((beach) => {
    if (beach._id === id) {
      return beach.name;
    }
  });
};

export const Beaches = (props) => {
  const { date } = new Date(Date.now).toLocaleDateString();
  const { id } = useParams();
  const [lat, setLat] = useState(getLat(id));
  const [long, setLong] = useState(-0.2713284100911);
  const [beach, setBeach] = useState([
    {
      _id: "",
      name: "",
      district: "",
      lat: "",
      long: "",
    },
  ]);

  useEffect(() => {
    setBeach(getBeach(id));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.stormglass.io/v2/tide/extremes/point?lat=${beach[0].lat}&lng=${beach[0].long}&start=2022-08-08&end=2022-08-12`,
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
      <h1>Welcome to {findBeachName(id)}</h1>
      <div>{beach[0].lat}</div>
    </div>
  );
};
