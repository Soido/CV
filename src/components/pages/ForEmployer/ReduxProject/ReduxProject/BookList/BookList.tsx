import { useDispatch, useSelector } from "react-redux";

import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";

import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../../../../../redux/slices/filterSlice";

import {
  selectBooks,
  deleteBook,
  toggleFavorite,
} from "../../../../../../redux/slices/booksSlice";
import { Key } from "react";
const BookList = () => {
  const books: any = useSelector(selectBooks);

  const titleFilter: any = useSelector(selectTitleFilter);
  const authorFilter: any = useSelector(selectAuthorFilter);
  const onlyFavorite: any = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();

  const hadleDelete = (id: any) => {
    dispatch(deleteBook(id));
  };

  const handleToggleFavorite = (id: any) => {
    dispatch(toggleFavorite(id));
  };

  const filteredBooks = books.filter(
    (book: { title: string; author: string; isFavorite: any }) => {
      const matchesTitle = book.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());

      const matchesAuthor = book.author
        .toLowerCase()
        .includes(authorFilter.toLowerCase());
      const matchesFavorite = onlyFavorite ? book.isFavorite : true;

      return matchesAuthor && matchesTitle && matchesFavorite;
    }
  );

  const highLightMatch = (text: string, filter: string) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");

    return text.split(regex).map(
      (
        substring: string,

        idx: Key | null | undefined
      ) => {
        if (substring.toLowerCase() === filter.toLowerCase()) {
          return (
            <span key={idx} className="highlight">
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
      <h2 className="w-full  font-thin tracking-widest text-[1.2rem]  leading-relaxed mb-[2rem] ">
        Список Фильмов
      </h2>
      {books.length === 0 ? (
        <p className="mt-[2rem] text-xl"> Вы не добавили ни один фильм </p>
      ) : (
        <ul className="overflow-y-scroll p-0 list-none mt-[1rem] h-[28rem] ">
          {filteredBooks.map(
            (
              book: {
                id: string;
                title: any;
                author: any;
                source: string;
                isFavorite: any;
              },
              i: number
            ) => (
              <li
                className="flex justify-between items-center w-auto py-[1rem] px-[2rem] border-b-2 list-none "
                key={book.id}
              >
                <div className="flex-1 text-left ">
                  {++i}. {highLightMatch(book.title, titleFilter)}
                  by{" "}
                  <strong>{highLightMatch(book.author, authorFilter)}</strong> (
                  {book.source})
                </div>
                <div className="flex items-center ">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="w-[1.5rem] h-[1.5rem] my-0 mx-[1.5rem] cursor-pointer text-yellow-400" />
                    ) : (
                      <BsBookmarkStar className="w-[1.5rem] h-[1.5rem] my-0 mx-[1.5rem] cursor-pointer " />
                    )}
                  </span>
                  <button
                    className="text-red-600 border-2  border-red-600 py-1 px-2 rounded-md cursor-pointer "
                    onClick={() => hadleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default BookList;
