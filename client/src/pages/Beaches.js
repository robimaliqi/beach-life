import { useParams } from "react-router-dom";
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
      <div>Welcome to {findBeachName(id)}</div>
    </div>
  );
};
