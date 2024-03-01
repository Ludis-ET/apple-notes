import { useParams, Link } from "react-router-dom";
import arrow from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

export const NotePage = (props) => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(`http://localhost:3001/notes/${id}`);
      const data = await response.json();
      console.log(data);
      setNote(data);
    }
    handleFetch();
  }, [id]);
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
