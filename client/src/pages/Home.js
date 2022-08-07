import Map from "../components/Map";

export const Home = () => {
  return (
    <div className="col">
      <div className="container" data-spy="scroll">
        <h1>Home</h1>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};
