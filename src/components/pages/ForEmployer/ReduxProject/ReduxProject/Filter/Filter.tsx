import { useDispatch, useSelector } from "react-redux";

import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  selectOnlyFavoriteFilter,
  setOnlyFavoriteFilter,
} from "../../../../../../redux/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e: { target: { value: any } }) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorChange = (e: { target: { value: any } }) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };
  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className=" w-full">
      <div className="flex lg:flex-row flex-col justify-between items-stretch lg:items-center gap-2">
        <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
          <input
            className=" w-full  p-1 boreder-b-2 bg-transparent border-b-2 "
            onChange={handleTitleFilterChange}
            type="text"
            value={titleFilter}
            placeholder="Сориторвать по названию"
          />
        </div>
        <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
          <input
            className="w-full  p-1 boreder-b-2 bg-transparent border-b-2"
            onChange={handleAuthorChange}
            type="text"
            value={authorFilter}
            placeholder="Сортированть по автору"
          />
        </div>

        <div className="w-full lg:flex-1 m-auto mb-[1rem] lg:m-0 lg:mb-0 text-center">
          <label>
            {" "}
            <input
              className=" bg-transparent"
              onChange={handleOnlyFavoriteChange}
              type="checkbox"
              checked={onlyFavoriteFilter}
            />
            <p className="pl-[.5rem]">Только отмеченные</p>
          </label>
        </div>
        <div>
          <button
            className=" cursor-pointer hover:border-b-2 py-1 px-2 m-[10px]"
            onClick={handleResetFilter}
          >
            Сбросить фильтры
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
