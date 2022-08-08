import { useParams } from "react-router-dom";
const tidalAPIKey = require("../tide-api");
const beaches = require("../components/beachList");

const STATIONS_ID_ENDPOINT =
  "https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations?name=Shoreham";

const BEACH_TIDE_ENDPOINT =
  "https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/{stationId}/TidalEvents[?duration]";
export const Beaches = (props) => {
  const { id } = useParams();

  const getStationID = (id) => {
    fetch(`${STATIONS_ID_ENDPOINT}`, {
      headers: {
        "Content-Type": "text/json",
        "Ocp-Apim-Subscription-Key": "3bec6e72255f433bad2ecb55420fb29c",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => console.log(error)); //get beach ID
    //make another call to BEACH_TIDE_ENDPOINT using above ID to get tide info
  };

  const findBeachName = (id) => {
    return beaches.map((beach) => {
      if (beach._id === id) {
        return beach.name;
      }
    });
  };

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

  return (
    <div>
      <h1>Welcome to {findBeachName(id)}</h1>
      <br>{getStationID(id)}</br>
    </div>
  );
};
