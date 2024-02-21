import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  ganre: "",
  year: "",
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
    setGanreFilter: (state, action) => {
      state.ganre = action.payload;
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
  setGanreFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state: { filter: { title: string } }) =>
  state.filter.title;
export const selectAuthorFilter = (state: { filter: { author: string } }) =>
  state.filter.author;
export const selectGanreFilter = (state: { filter: { ganre: string } }) =>
  state.filter.ganre;
export const selectOnlyFavoriteFilter = (state: {
  filter: { onlyFavorite: boolean };
}) => state.filter.onlyFavorite;

export default filterSlice.reducer;
