import Map from "../components/Map";
import { SearchBar } from "../components/SearchBar/SearchBar";
import BeachData from "../components/beachList";
import { NavBar } from "../components/NavBar/NavBar";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  return (
    <div id="background-home-image">
      <NavBar user={isLoggedIn} />
      <SearchBar placeholder="Where would you like to go?" data={BeachData} />
      <h2 className="home-h2" id="map-h2">
        Can't remember the name of the beach you are looking for? Use our
        interactive map
      </h2>
      <Map />
    </div>
  );
};
