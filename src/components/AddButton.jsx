import { Link } from "react-router-dom";
import add from "../assets/add.svg";

export const AddButton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      <img src={add} alt="" />
    </Link>
  );
};
