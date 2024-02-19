import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = {
  books: [],
  isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (
    url /* : string */,
    thunkAPI /* : GetThunkAPI<AsyncThunkConfig> */
  ) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
      // return thunkAPI.rejectWithValue(error)
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action /* : { payload: string; type: string } */) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      /* const index = state.findIndex((book) => book.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      } */
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });

      /* return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ); */
    },
  },

  /*   extraReducers: {
    [fetchBook.pending]: (state: { isLoadingViaAPI: boolean }) => {
      state.isLoadingViaAPI = true;
    },
    [fetchBook.fulfilled]: (
      state: { isLoadingViaAPI: boolean; books: any[] },
      action: { payload: { title: any; author: any } }
    ) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, "API"));
      }
    },
    [fetchBook.rejected]: (state: { isLoadingViaAPI: boolean }) => {
      state.isLoadingViaAPI = false;
    },
  }, */
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export const selectBooks = (state /* : { books: { books: any } } */) =>
  state.books.books;

export const selecIsLoadingViaAPI = (
  state /* : {
  books: { isLoadingViaAPI: boolean };
} */
) => state.books.isLoadingViaAPI;

export default bookSlice.reducer;
