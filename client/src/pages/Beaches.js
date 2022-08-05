import { useParams } from "react-router-dom";

export const Beaches = (props) => {
  const { id } = useParams();
  return (
    <div>
      <div>G'day Shiela, {id}</div>
    </div>
  );
};
