import { useEffect } from "react";
import { geolocationAPI_KEY } from "../../BeachAddressKey";

export const Address = ({ data, beachId }) => {
  const getBeach = (id) => {
    console.log(data);
    return data.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(beachId)[0].lat;
  const long = getBeach(beachId)[0].long;
  const beachCoOrds = `${long}, ${lat}`;

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${beachCoOrds}.json?access_token=${geolocationAPI_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return <div>Address</div>;
};
