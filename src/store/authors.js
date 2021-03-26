import {createSlice} from "@reduxjs/toolkit";
import * as authorsApi from "../api/authorApi";
import {beginApiCall, apiCallSuccess} from "./apiStatus";

const slice = createSlice({
  name: "authors",
  initialState: {
    authors: [],
    authorError: null,
  },
  reducers: {
    authorsReceived: (state, action) => {
      state.authors = action.payload.data;
    },
    onError: (state, action) => {
      state.authorError = action.payload;
    },
  },
});

export default slice.reducer;
export const {authorsReceived, onError} = slice.actions;

export const getAuthors = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const authors = await authorsApi.getAuthors();
    dispatch(authorsReceived(authors));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};
