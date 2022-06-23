import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

console.log(store);

export default store;
