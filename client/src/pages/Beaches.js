import { Review } from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Weather } from "../components/Weather/Weather";
import { SmallMap } from "../components/SmallMap";
import { Tides } from "../components/Tides/Tides";
import { Address } from "../components/Address/Address";
import { NavBar } from "../components/NavBar/NavBar";

const beaches = require("../components/beachList");

export const Beaches = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

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

  const getBeach = (id) => {
    return beaches.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(id)[0].lat;
  const long = getBeach(id)[0].long;
  const beachCoOrds = `${lat}, ${long}`;

  useEffect(() => {
    setBeach(getBeach(id));
  }, []);

  return (
    <div className="beach-body">
      <NavBar user={isLoggedIn} />
      <div className="container">
        <div className="beachMap-container">
          <h1 className="page-title">Welcome to {beach[0].name}</h1>
          <SmallMap id="small-map" lat={lat} long={long} />
          <div className="address-container">
            <Address beachData={beaches} beachId={id} />
          </div>
        </div>
        {/* <div className="weather-container"> */}
        <h3>Weather Forecast</h3>
        <p className="beaches-p">
          Here is the weather forecast for the next 7 days
        </p>
        <p className="beaches-p">
          {`Have a look and pick a day that would be best to visit ${beach[0].name} beach!`}
        </p>
        <Weather beach={beachCoOrds} />
        {/* </div> */}
        {/* <div className="tide-container"> */}
        <h3>Tides</h3>
        <p className="beaches-p">
          Here is the tide forecast for the next 7 days
        </p>
        <p className="beaches-p">
          The low tide is great if you're looking to go for a swim or just get
          your toes wet. If you want to ride the waves then a high tide will be
          perfect for you.
        </p>
        <Tides lat={lat} long={long} />
        {/* </div>
        <div className="review-container"> */}
        <h3>Reviews</h3>
        <Review id={id} user={props.user} />
      </div>
    </div>
    // </div>
  );
};
