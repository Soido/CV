import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectGanreFilter,
} from "../../../../../../redux/slices/filterSlice";

import {
  selectFilms,
  deleteFilm,
  toggleFavorite,
} from "../../../../../../redux/slices/filmSlice";
import { Key } from "react";

const FilmList = () => {
  const films: any = useSelector(selectFilms);

  const titleFilter: any = useSelector(selectTitleFilter);
  const authorFilter: any = useSelector(selectAuthorFilter);
  const ganreFilter: any = useSelector(selectGanreFilter);
  const onlyFavorite: any = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();

  const hadleDelete = (id: any) => {
    dispatch(deleteFilm(id));
  };

  const handleToggleFavorite = (id: any) => {
    dispatch(toggleFavorite(id));
  };

  const filteredFilms = films.filter(
    (film: {
      title: string;
      author: string;
      ganre: string;
      isFavorite: any;
    }) => {
      const matchesTitle = _.includes(
        film.title.toLowerCase(),
        titleFilter.toLowerCase()
      );

      const matchesAuthor = _.includes(
        film.author.toLowerCase(),
        authorFilter.toLowerCase()
      );

      const matchesGanre = _.includes(
        film.ganre.toLowerCase(),
        ganreFilter.toLowerCase()
      );

      const matchesFavorite = onlyFavorite ? film.isFavorite : true;

      return matchesAuthor && matchesTitle && matchesGanre && matchesFavorite;
    }
  );

  const highLightMatch = (text: string, filter: string) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");

    return _.map(
      text.split(regex),
      (
        substring: string,

        idx: Key | null | undefined
      ) => {
        if (substring.toLowerCase() === filter.toLowerCase()) {
          return (
            <span key={idx} className=" text-black bg-white">
              {substring}
            </span>
          );
        }
        return substring;
      }
    );
  };

  return (
    <div className="app-block w-full book-list mt-[1rem] mb-[2rem]">
      {" "}
      <h2 className="w-full lg:text-center text-left font-thin tracking-widest text-[1.2rem]  leading-relaxed mb-[2rem] ">
        Список Фильмов
      </h2>
      {films.length === 0 ? (
        <p className="mt-[2rem] text-xl lg:text-center text-left">
          {" "}
          Вы не добавили ни один фильм{" "}
        </p>
      ) : (
        <ul className="overflow-y-scroll p-0 list-none mt-[1rem] lg:h-[26rem] ">
          {" "}
          <Scrollbars
            style={{
              width: "100%",
              height: "100%",
              color: "#ffffff",
            }}
          >
            {_.map(
              filteredFilms,
              (
                film: {
                  id: string;
                  title: string;
                  author: string;
                  ganre: string;
                  year: string | number;
                  source: string;
                  isFavorite: boolean;
                },
                i: number
              ) => (
                <li
                  className="flex justify-between items-center w-auto py-[1rem] lg:px-[2rem] border-b-2 list-none "
                  key={film.id}
                >
                  <div className="flex-1 text-left ">
                    {++i}.{" "}
                    {film.title === "null"
                      ? ""
                      : highLightMatch(film.title, titleFilter)}{" "}
                    <strong>
                      {film.author === "null"
                        ? ","
                        : highLightMatch(film.author, authorFilter)}
                    </strong>
                    , {highLightMatch(film.ganre, ganreFilter)}{" "}
                    {film.year === "" ? "" : `, (${film.year})`} ({film.source})
                  </div>
                  <div className="flex items-center ">
                    <span onClick={() => handleToggleFavorite(film.id)}>
                      {film.isFavorite ? (
                        <BsBookmarkStarFill className="w-[1.5rem] h-[1.5rem] my-0 mx-[1.5rem] cursor-pointer text-yellow-400" />
                      ) : (
                        <BsBookmarkStar className="w-[1.5rem] h-[1.5rem] my-0 mx-[1.5rem] cursor-pointer " />
                      )}
                    </span>
                    <button
                      className="text-red-600 border-2  border-red-600 py-1 px-2 rounded-md cursor-pointer "
                      onClick={() => hadleDelete(film.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              )
            )}
          </Scrollbars>
        </ul>
      )}
    </div>
  );
};

export default FilmList;
