import { useEffect } from "react";
import { useState } from "react";
import { geolocationAPI_KEY } from "../../BeachAddressKey";

export const Address = ({ beachData, beachId }) => {
  const getBeach = (id) => {
    return beachData.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(beachId)[0].lat;
  const long = getBeach(beachId)[0].long;
  const beachCoOrds = `${long}, ${lat}`;

  const [geoLocation, setGeoLocation] = useState("");

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${beachCoOrds}.json?access_token=${geolocationAPI_KEY}&types=address`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGeoLocation(data.features[0].place_name);
      });
  });

  return (
    <div>
      <p className="location">Location: {geoLocation}</p>
    </div>
  );
};
