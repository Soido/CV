import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import createBookWithID from "../../../../../../utils/createBookWithID";

import {
  addBook,
  fetchBook,
  selecIsLoadingViaAPI,
} from "../../../../../../redux/slices/booksSlice.js";
import { setError } from "../../../../../../redux/slices/errorSlice";
import booksData from "../../../../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const isLoadingViaAPI: any = useSelector(selecIsLoadingViaAPI);
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook: { title: string; author: string; year?: number } =
      booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook, "random")));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill title and author!"));
    }
  };

  const handleAddRandomBookViaAPI = () => {
    /*  dispatch(fetchBook("http://localhost:4000/random-book-delayed")); */
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
            className=" cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] lg:hover:border-b-2"
            type="submit"
          >
            Добавить свой фильм
          </button>
          <button
            className="cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] lg:hover:border-b-2"
            type="button"
            onClick={handleRandomBook}
          >
            Добавить случайный фильм
          </button>

          <button
            className=" cursor-pointer lg:py-1 lg:px-4 my-[.5rem] lg:m-[10px] lg:hover:border-b-2"
            type="button"
            onClick={handleAddRandomBookViaAPI}
            disabled={isLoadingViaAPI}
          >
            {isLoadingViaAPI ? (
              <>
                <span>Loading book </span> <FaSpinner className="spinner" />{" "}
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

export default BookForm;
