import _ from "lodash";

const Pagination = ({
  totalPages,
  page,
  chngPage,
}: {
  totalPages: number;
  page: number;
  chngPage: (arg0: number) => void;
}) => {
  let PagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    PagesArray.push(i + 1);
  }

  return (
    <div
      className="w-full flex flex-row justify-center p-[1rem]
              "
    >
      {_.map(PagesArray, (p) => (
        <span
          className={`cursor-pointer border-2 p-[.5rem] ${
            page === p ? " border-white" : "border-transparent"
          }`}
          onClick={() => {
            chngPage(p);
          }}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
