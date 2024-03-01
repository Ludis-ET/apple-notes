import { Link } from "react-router-dom";

export const ListItem = ({ note }) => {
  function getTitle(note) {
    const title = note.body.split("\n")[0];
    if (title.length > 45) return title.splice(0, 45);
    return title;
  }
  function getDate(note) {
    return new Date(note.updated).toLocaleDateString();
  }
  return (
    <Link to={`/notes/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getDate(note)}</span>
        </p>
      </div>
    </Link>
  );
};
