import { useParams } from "react-router-dom";
const beaches = require("../components/beachList");

const STATIONS_ID_ENDPOINT =
  "https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations?name=";

const BEACH_TIDE_ENDPOINT =
  "https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/{stationId}/TidalEvents[?duration]";
//Add API key to call in header somehow
export const Beaches = (props) => {
  const { id } = useParams();

  const getStationID = (id) => {
    fetch(`${STATIONS_ID_ENDPOINT}${findBeachName(id)}`).then(); //get beach ID
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
    </div>
  );
};
