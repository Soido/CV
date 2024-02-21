import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createFilmWithID from "../../utils/createFilmWithID";
import { setError } from "./errorSlice";

const initialState = {
  films: [],
  isLoadingViaAPI: false,
};

let tokenStr = "b985c8a1-241c-47d5-8632-2fcfc9f664db";

export const fetchFilm = createAsyncThunk(
  "books/fetchBook",
  async (
    url: string = "https://kinopoiskapiunofficial.tech/api/v2.2/films",
    thunkAPI: any
  ) => {
    try {
      const res = await axios.get(url, {
        headers: {
          "X-API-KEY": `${tokenStr}`,
          "Content-Type": "application/json",
        },
      });

      const randomIndex = Math.floor(Math.random() * res.data.items.length);
      const randomfilmViaAPI = res.data.items[randomIndex];

      const title = `${randomfilmViaAPI.nameRu}`;
      const ganre: string = `${randomfilmViaAPI.genres[0].genre}`;
      const author: string = `${randomfilmViaAPI.nameOriginal}`;
      const year: string = `${randomfilmViaAPI.year}`;

      const filmDataViaAPI = {
        title,
        ganre,
        author,
        year,
      };

      return filmDataViaAPI;
    } catch (error) {
      thunkAPI.dispatch(setError("Сервис временно не доступен"));
      throw error;
    }
  }
);

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    addFilm: (state: any, action) => {
      state.films.push(action.payload);
    },
    deleteFilm: (state, action) => {
      return {
        ...state,
        films: state.films.filter((film: any) => film.id !== action.payload),
      };
    },
    toggleFavorite: (state: any, action) => {
      state.films.forEach((film: any) => {
        if (film.id === action.payload) {
          film.isFavorite = !film.isFavorite;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFilm.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchFilm.fulfilled, (state: any, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.films.push(createFilmWithID(action.payload, "API"));
      }
    });
    builder.addCase(fetchFilm.rejected, (state) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const { addFilm, deleteFilm, toggleFavorite } = filmSlice.actions;

export const selectFilms = (state: { films: { films: any } }) =>
  state.films.films;

export const selecIsLoadingViaAPI = (state: {
  films: { isLoadingViaAPI: boolean };
}) => state.films.isLoadingViaAPI;

export default filmSlice.reducer;
