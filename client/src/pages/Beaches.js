import { Review } from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { Weather } from "../components/Weather/Weather";
const beaches = require("../components/beachList");


export const Beaches = (props) => {
  const { id } = useParams();

  const findBeachName = (id) => {
    return beaches.map((beach) => {
      if (beach._id === id) {
        return beach.name;
      }
    });
  };

  const getLat = (id) => {
    return beaches.filter((beach) => {
      if (beach._id === id) {
        return beach.lat;
      }
    });
  };

  const getLong = (id) => {
    return beaches.filter((beach) => {
      if (beach._id === id) {
        return beach.long;
      }
    });
  };

  const longitude = getLong(id)[0].long;
  const latitude = getLong(id)[0].lat;

  const beachCoOrds = `${latitude}, ${longitude}`;

  return (
    <div className="container">
      <h1>Welcome to {findBeachName(id)}</h1>
      <Weather beach={beachCoOrds} />
      <div className="review"><Review id={id} /></div>
    </div>
  );
};
