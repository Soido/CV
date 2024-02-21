import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../../../../../redux/store";

import createFilmWithID from "../../../../../../utils/createFilmWithID";
import { Oval } from "react-loader-spinner";

import {
  addFilm,
  fetchFilm,
  selecIsLoadingViaAPI,
} from "../../../../../../redux/slices/filmSlice";
import { setError } from "../../../../../../redux/slices/errorSlice";
import filmsData from "../../../../../data/films.json";

const FilmForm = () => {
  const [title, setTitle] = useState("");
  const [ganre, setGanre] = useState("");
  const [year, setYear] = useState("");
  const isLoadingViaAPI: any = useSelector(selecIsLoadingViaAPI);
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleRandomFilm = () => {
    const randomIndex = Math.floor(Math.random() * filmsData.length);
    const randomFilm: any = filmsData[randomIndex];
    dispatch(addFilm(createFilmWithID(randomFilm, "Мои Топ-лист")));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        addFilm(createFilmWithID({ title, author, ganre, year }, "Свой выбор"))
      );
      setTitle("");
      setAuthor("");
      setGanre("");
      setYear("");
    } else {
      dispatch(setError("Вам необходимо ввести название фильма и режиссера"));
    }
  };

  const handleAddRandomFilmViaAPI = () => {
    dispatch(fetchFilm());
  };

  return (
    <div className=" w-full ">
      <h2 className="w-full text-left  font-thin tracking-widest text-[1.2rem]  leading-relaxed mb-[2rem] ">
        {" "}
        Добавьте свой фильм для сравнения{" "}
      </h2>
      <form className="" onSubmit={handleSubmit}>
        <div className=" w-full">
          <label className="block w-full text-center mb-[1rem]" htmlFor="title">
            <p className="text-left"> Название:</p>
            <input
              className=" bg-transparent w-full p-1 mb-1 border-b-2"
              type="text"
              id="title"
              placeholder="Введите название фильма"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label
            className="block w-full text-center mb-[1rem]"
            htmlFor="author"
          >
            <p className="text-left"> Автор:</p>
            <input
              className=" bg-transparent w-full p-1 mb-1 border-b-2"
              type="text"
              id="author"
              placeholder="Введите автора фильма"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:items-center lg:mx-auto justify-start items-start">
          <button
            className=" cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] border-b-2 border-b-transparent lg:hover:border-b-2 lg:hover:border-white"
            type="submit"
          >
            Добавить свой фильм
          </button>
          <button
            className="cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] border-b-2 border-b-transparent lg:hover:border-b-2 lg:hover:border-white"
            type="button"
            onClick={handleRandomFilm}
          >
            Фильм из Моего топ-листа
          </button>

          <button
            className="flex flex-row items-center cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] border-b-2 border-b-transparent lg:hover:border-b-2 lg:hover:border-white"
            type="button"
            onClick={handleAddRandomFilmViaAPI}
            disabled={isLoadingViaAPI}
          >
            {isLoadingViaAPI ? (
              <>
                <span className="mr-[1rem]">Загрузка фильмов </span>{" "}
                <Oval
                  height={23}
                  width={23}
                  color="white"
                  ariaLabel="loading"
                />{" "}
              </>
            ) : (
              "Добавить фильм из API"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilmForm;
