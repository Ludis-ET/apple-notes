import { useParams, Link } from "react-router-dom";
import arrow from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

export const NotePage = (props) => {
  const [note, setNote] = useState([]);
  const { id } = useParams();
  let url = `http://localhost:3001/notes/${id}`;
  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const data = await response.json();
      setNote(data);
    }
    handleFetch();
  }, [url]);

  
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <img src={arrow} alt="" />{" "}
          </Link>
        </h3>
      </div>
      <textarea
        name=""
        value={note.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};
