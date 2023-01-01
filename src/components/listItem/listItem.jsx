import { Link } from "react-router-dom";
import "./listItem.scss";

function ListItem(data) {
  const { id } = data;
  const { make, model, year } = data.carData;

  console.log("render");
  return (
    <div className="listItem">
      <span className="listItem-id">{id}</span>
      <span className="listItem-year">{year}</span>
      <span className="listItem-make">{make}</span>
      <span className="listItem-model">{model}</span>
      <Link to={`/edit/${id}`} className="listItem-editLink">
        Edit
      </Link>
    </div>
  );
}

export default ListItem;
