import BookForm from "./BookForm/BookForm";
import BookList from "./BookList/BookList";
import Filter from "./Filter/Filter";

function ReduxProject() {
  return (
    <>
      <main className="w-screen xl:h-screen">
        <div className="  w-full h-full xl:h-screen pt-[7rem] lg:pt-[8rem]  bg-black/90 mx-auto text-white  ">
          <h2 className="w-full text-left px-[1.5rem] lg:px-[5rem] font-thin tracking-widest text-[1.2rem] xl:text-[1.5rem] leading-relaxed xl:ml-[2rem] mb-[2rem] xl:mb-[4rem]">
            {" "}
            Проект по подбору случайных фильмов с использоанием Redux
          </h2>
          <div className=" flex lg:flex-row flex-col gap-6 px-[1.5rem] lg:px-[1rem] xl:mx-[6rem]">
            <div className="lg:w-[80%] w-full ">
              <BookForm />
            </div>
            <div className="flex flex-col w-full gap-4  h-full">
              <Filter />
              <BookList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ReduxProject;
