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
      <div data-spy="scroll">
        <h2>Find the best beaches in the U.K</h2>
        <SearchBar placeholder="Where would you like to go?" data={BeachData} />
        <div className="map">{<Map />}</div>
      </div>
    </div>
  );
};
