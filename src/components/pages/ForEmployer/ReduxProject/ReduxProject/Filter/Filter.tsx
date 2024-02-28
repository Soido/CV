import { useDispatch, useSelector } from "react-redux";

import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  setGanreFilter,
  selectOnlyFavoriteFilter,
  setOnlyFavoriteFilter,
  selectGanreFilter,
} from "../../../../../../redux/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const ganreFilter = useSelector(selectGanreFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e: { target: { value: string } }) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorChange = (e: { target: { value: string } }) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleGanreChange = (e: { target: { value: string } }) => {
    dispatch(setGanreFilter(e.target.value));
  };
  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };
  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className=" w-full">
      <div className="flex  flex-col gap-2">
        <div className="w-full flex lg:flex-row flex-col justify-between items-stretch lg:items-center gap-2">
          <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
            <input
              className=" w-full  p-1 boreder-b-2 bg-transparent border-b-2 "
              onChange={handleTitleFilterChange}
              type="text"
              value={titleFilter}
              placeholder="Поиск по названию"
            />
          </div>
          <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
            <input
              className="w-full  p-1 boreder-b-2 bg-transparent border-b-2"
              onChange={handleAuthorChange}
              type="text"
              value={authorFilter}
              placeholder="Поиск по автору"
            />
          </div>
          <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
            <input
              className="w-full  p-1 boreder-b-2 bg-transparent border-b-2"
              onChange={handleGanreChange}
              type="text"
              value={ganreFilter}
              placeholder="Поиск по жанру"
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-start lg:justify-between items-stretch mt-[1rem] gap-4">
          <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 ">
            <label className=" text-left flex flex-row w-full ">
              {" "}
              <input
                className=" bg-transparent"
                onChange={handleOnlyFavoriteChange}
                type="checkbox"
                checked={onlyFavoriteFilter}
              />
              <p className="pl-[.5rem]">Только избранные</p>
            </label>
          </div>
          <div className="w-full flex items-start justify-start">
            <button
              className=" cursor-pointer lg:border-b-2 lg:border-transparent lg:hover:border-b-2  lg:hover:border-white py-1 lg:px-2 lg:m-[10px]"
              onClick={handleResetFilter}
            >
              Сбросить фильтры
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
