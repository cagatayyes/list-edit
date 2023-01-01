import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromApi } from "../../service/apiService";
import { setList } from "../listItem/listSlice";
import ListItem from "../listItem/listItem";
import "./list.scss";

function List() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.carList.carList);
  const listState = useSelector((state) => state.carList.listState);

  useEffect(() => {
    /* If there is no data send the request. If we have data already then don't */
    if (carList.length < 1) {
      /* 
      getDataFromApi is a simple fetch method. 
      It could get options as a parameter and it could be more configurable but didn't spend time on it
      */

      getDataFromApi(
        "https://api.api-ninjas.com/v1/cars?limit=10&make=bmw"
      ).then((response) => {
        dispatch(setList(response));
      });
    }
  }, []);

  return (
    <div className="list">
      {listState === "loading" && carList.length < 1 && (
        <div className="list-noData">Fetching Data From Api...</div>
      )}
      {listState === "error" && (
        <div className="list-noData">Error Occurred :(</div>
      )}
      {listState === "success" && carList.length > 0 && (
        <>
          <div className="list-rowTitles">
            <h6>Id</h6>
            <h6>Year</h6>
            <h6>Make</h6>
            <h6>Model</h6>
          </div>
          {/* 
            API that I used doesn't return id for cars I didn't spend time to generate new car objects with ID so I used index instead.
           */}
          {carList.map((item, index) => (
            <ListItem key={`car-${index}`} carData={item} id={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default List;
