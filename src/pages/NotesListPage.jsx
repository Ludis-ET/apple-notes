import { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem";
import { AddButton } from "../components/AddButton";

export const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("http://localhost:3001/notes");
      const data = await response.json();
      setNotes(data);
    }
    handleFetch();
  }, ["http://localhost:3001/notes"]);

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
