import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state: { filter: { title: any } }) =>
  state.filter.title;
export const selectAuthorFilter = (state: { filter: { author: any } }) =>
  state.filter.author;
export const selectOnlyFavoriteFilter = (state: {
  filter: { onlyFavorite: any };
}) => state.filter.onlyFavorite;

export default filterSlice.reducer;
