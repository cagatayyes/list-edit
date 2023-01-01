import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [],
  listState: 'loading'
};

export const carListSlice = createSlice({
  name: "carList",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.carList = action.payload;
      state.listState = action.payload.length > 0 ? 'success' : 'error'
    },
    editCarOnList: (state, action) => {
      const car = {
        year: action.payload.year,
        make: action.payload.make,
        model: action.payload.model,
      };
      const carId = action.payload.id;

      state.carList[carId] = car;
    },
  },
});

export const { setList, editCarOnList } = carListSlice.actions;

export default carListSlice.reducer;
