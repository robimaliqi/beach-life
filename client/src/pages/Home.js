import Map from "../components/Map";
import { SearchBar } from "../components/SearchBar/SearchBar";
import BeachData from "../components/beachList";

export const Home = () => {
  return (
    <div className="container" data-spy="scroll">
      <h1>Home</h1>
      <SearchBar placeholder="Where would you like to go?" data={BeachData} />
      <div className="map">
        <Map />
      </div>
    </div>
  );
};
