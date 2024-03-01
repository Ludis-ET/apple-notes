import { useParams, Link } from "react-router-dom";
import notes from "../assets/data";
import arrow from "../assets/arrow-left.svg";

export const NotePage = (props) => {
  const { id } = useParams();
  let note = notes.find((note) => note.id === Number(id));
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <img src={arrow} alt="" />{" "}
          </Link>
        </h3>
      </div>
      <textarea name="" value={note.body} id="" cols="30" rows="10"></textarea>
    </div>
  );
};
