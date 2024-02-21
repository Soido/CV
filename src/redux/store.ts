import { configureStore } from "@reduxjs/toolkit";
import filmsReduser from "../redux/slices/filmSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: { films: filmsReduser, filter: filterReducer, error: errorReducer },
});

export default store;

export type AppDispatch = typeof store.dispatch;
