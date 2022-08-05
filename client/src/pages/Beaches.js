import { useParams } from "react-router-dom";

export const Beaches = (props) => {
  const { id } = props.id;
  return <div>{id}</div>;
};
