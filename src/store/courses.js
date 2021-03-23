//========================= використовуємо так звані sclice
import {createSlice} from "@reduxjs/toolkit";
import {generate as id} from "shortid";

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: { 
    courseAdded: (state, action) => {
      state.push({id: id(), ...action.payload});
    },
  },
});

export default slice.reducer;
export const {courseAdded} = slice.actions;
