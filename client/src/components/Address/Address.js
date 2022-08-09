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

  //   0:
  // id: "postcode.13094846708526280"
  // text: "BN3 2FR"
  // [[Prototype]]: Object
  // 1:
  // id: "locality.17109650525051410"
  // text: "Brighton and Hove"
  // [[Prototype]]: Object
  // 2:
  // id: "place.5931384973928250"
  // text: "Hove"
  // wikidata: "Q989616"
  // [[Prototype]]: Object
  // 3:
  // id: "district.16502354337146750"
  // text: "The City Of Brighton And Hove"
  // wikidata: "Q1022488"
  // [[Prototype]]: Object
  // 4:
  // id: "region.13483278848453920"
  // short_code: "GB-ENG"
  // text: "England"
  // wikidata: "Q21"
  // [[Prototype]]: Object
  // 5:
  // id: "country.12171874284814600"
  // short_code: "gb"
  // text: "United Kingdom"
  // wikidata: "Q145"
  // [[Prototype]]: Object

  return (
    <div>
      <p>Location: {geoLocation}</p>
    </div>
  );
};
