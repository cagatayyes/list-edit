import { configureStore } from "@reduxjs/toolkit";
import carListReducer from "../components/listItem/listSlice";

export const store = configureStore({
  reducer: {
    carList: carListReducer,
  },
});
