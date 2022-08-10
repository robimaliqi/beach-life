import Map from "../components/Map";
import { SearchBar } from "../components/SearchBar/SearchBar";
import BeachData from "../components/beachList";
import "../App.css";

export const Home = () => {
  return (
    <div className="backgroundImage">
      <div data-spy="scroll">
        <SearchBar placeholder="Where would you like to go?" data={BeachData} />
        {/* <div className="map">
          <Map />
        </div> */}
      </div>
    </div>
  );
};
