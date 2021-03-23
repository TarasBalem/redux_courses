/* eslint-disable import/no-anonymous-default-export */
import {generate as id} from "shortid";

export default (store) => (next) => (action) => {
  if (action.type && action.type.indexOf("Added") !== -1) {
    action = {...action, payload: {...action.payload, id: id()}};
  }
  next(action);
};
