import data from "../assets/data";
import { ListItem } from "../components/ListItem";

export const NotesListPage = () => {
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{data.length}</p>
      </div>
      <div className="notes-list">
        {data.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};
