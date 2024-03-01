import data from "../assets/data";
import { ListItem } from "../components/ListItem";

export const NotesListPage = () => {
  return (
    <div>
      <div className="notes-list">{
        data.map((note,index) => (
            <ListItem key={index} note={note}/>
        ))
      }</div>
    </div>
  );
};
