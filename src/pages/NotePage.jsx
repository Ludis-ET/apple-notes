import { useParams } from "react-router-dom";
import notes from "../assets/data";

export const NotePage = (props) => {
  const { id } = useParams();
  let note = notes.find((note) => note.id === Number(id));
  return <div>NotePage</div>;
};
