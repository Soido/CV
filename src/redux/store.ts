import { configureStore } from "@reduxjs/toolkit";
import booksReduser from "../redux/slices/booksSlice.js";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: { books: booksReduser, filter: filterReducer, error: errorReducer },
});

export default store;
