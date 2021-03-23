/* eslint-disable import/no-anonymous-default-export */
export default (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Prev state:", store.getState());
  console.log("Dispatching:", action.type);

  let result = next(action);
  console.log("Next state: ", store.getState());
  console.groupEnd();

  return result;
};
