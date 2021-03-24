import {createSlice} from "@reduxjs/toolkit";
import * as coursesApi from "../api/courseApi";

const slice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    pages: 1,
    error: null,
  },
  reducers: {
    courseAdded: (state, action) => {
      state.courses.push(action.payload);
    },
    coursesReceived: (state, action) => {
      state.courses = action.payload.data;
      state.pages = Math.ceil(action.payload.total / 4);
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const {courseAdded, coursesReceived, onError} = slice.actions;

export const getCourses = (page = 1, limit = 4) => async (dispatch) => {
  try {
    const courses = await coursesApi.getCourses(page, limit);
    dispatch(coursesReceived(courses));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  }
};
