/* eslint-disable import/no-anonymous-default-export */
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";
import {createLogger} from "redux-logger";

const logger = createLogger({
  collapse: true,
});

const middleware = [logger];
export default function () {
  return configureStore({reducer, middleware});
}
