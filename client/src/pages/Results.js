import { Header } from "../components/Header/Header";
import { Weather } from "../components/Weather/Weather";

export const Results = () => {
  return (
    <div className="container">
      <Header title="Results" />
      <Weather />
    </div>
  );
};
