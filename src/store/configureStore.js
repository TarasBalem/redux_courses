/* eslint-disable import/no-anonymous-default-export */
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import {createLogger} from "redux-logger";
import generateId from "./middlewares/generateId";

const logger = createLogger({
  collapse: true,
});

const middleware = [...getDefaultMiddleware(), logger, generateId];
export default function () {
  return configureStore({reducer, middleware});
}
