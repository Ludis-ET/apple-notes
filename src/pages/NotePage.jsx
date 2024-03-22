import { useParams, Link, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

export const NotePage = ({ history }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND;
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  let url = `${apiUrl}notes/${id}/`;

  useEffect(() => {
    async function handleFetch() {
      if (id === "new") return;
      const response = await fetch(url);
      const data = await response.json();
      setNote(data);
    }
    handleFetch();
  }, [url]);

  function handle2Delete() {
    async function handleDelete() {
      await fetch(`${apiUrl}notes/${id}/delete/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        }
      });
    }
    handleDelete();
    navigate("/");
  }

  function createNote() {
    async function handleCreate() {
      await fetch(`${apiUrl}notes/create/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...note, "updated": new Date() }),
      });
    }
    handleCreate();
    navigate("/");
  }

  async function handlePut() {
    await fetch(`${apiUrl}notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
  }
  function handlesubmit() {
    if (id !== "new" && !note.body) {
      handle2Delete();
    } else if (id !== "new") {
      handlePut();
    } else if (id === "new" && note.length !== 0) {
      createNote();
    }
    navigate("/");
  }
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div>
            <img src={arrow} alt="" onClick={handlesubmit} />
          </div>
        </h3>
        {id !== "new" ? (
          <button onClick={handle2Delete}>Delete</button>
        ) : (
          <button onClick={handlesubmit}>Done</button>
        )}
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
