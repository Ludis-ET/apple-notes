import { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem";
import { AddButton } from "../components/AddButton";

export const NotesListPage = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND;
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(`${apiUrl}notes/`);
      const data = await response.json();
      setNotes(data);
    }
    handleFetch();
  },[]);
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};
