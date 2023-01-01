import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editCarOnList } from "../listItem/listSlice";
import "./edit.scss";

function Edit() {
  let { id } = useParams(); /* To understand which car are we editing */
  const carList = useSelector((state) => state.carList.carList);
  const carToEdit = carList[id];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedCar, setEditedCar] = useState({});

  const onInputChange = (event) => {
    event.preventDefault();
    let carToBeEdit = {
      ...carToEdit,
      id,
      [event.target.name]: event.target.value,
    };

    setEditedCar(carToBeEdit);
  };

  const onClickSave = () => {
    dispatch(editCarOnList(editedCar));
    navigate('/')
  };

  if (carToEdit === undefined) {
    /* If data is not fetched from api. Redirect to Home Page to get data. */
    return <Navigate to="/" />;
  } else {
    /*
      The Inputs below could be component. But I didn't want to spend time. Since speed is important.
     */
    return (
      <div className="edit">
        <div className="edit-editItem">
          <span>ID</span>
          <input
            className="edit-editItem-input"
            name="id"
            placeholder={id}
            disabled
          ></input>
        </div>
        <div className="edit-editItem">
          <span>Year</span>
          <input
            className="edit-editItem-input"
            name="year"
            type='number'
            placeholder={carToEdit.year}
            onChange={(event) => onInputChange(event)}
          ></input>
        </div>
        <div className="edit-editItem">
          <span>Make</span>
          <input
            className="edit-editItem-input"
            name="make"
            placeholder={carToEdit.make}
            onChange={(event) => onInputChange(event)}
          ></input>
        </div>
        <div className="edit-editItem">
          <span>Model</span>
          <input
            className="edit-editItem-input"
            name="model"
            placeholder={carToEdit.model}
            onChange={(event) => onInputChange(event)}
          ></input>
        </div>

        <div className="edit-buttons">
          <Link to="/" className="edit-buttons-cancel">
            CANCEL
          </Link>
          <button className="edit-buttons-save" onClick={() => onClickSave()}>
            SAVE
          </button>
        </div>
      </div>
    );
  }
}

export default Edit;
