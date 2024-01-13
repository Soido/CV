import avatar from "../img/avatar.jpeg";

const Rusmetrol = () => {
  return (
    <>
      <div
        className="top-0 left-0 h-full w-full overflow-scroll fixed bg-white text-black z-8
          animate-fade-right
         animate-ease-out animate-duration-300"
      >
        <div className="relative flex md:min-h-full h-screen  min-h-full items-center overflow-hidden bg-white/90">
          <div className=" absolute w-screen h-screen overflow-hidden">
            <div className="flex justify-end">
              <div className="absolute text-black text-[2rem] pt-[2rem] pr-[2rem]">
                <button>x</button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className=" h-[28rem] md:h-[30rem] w-full lg:w-[45%] lg:h-screen">
                <img
                  className="h-full w-full md:object-[center_-135px] object-cover lg:object-center lg:object-cover xl:object-cover "
                  src={avatar}
                />
              </div>
              <div className="flex flex-col justify-center px-[15px] md:mt-[0.5rem]  lg:mt-0 xl:mt-0 text-black text-left mx-auto">
                {" "}
                <h1 className="font-extralight tracking-wider text-[1rem] lg:text-[1.5rem] mb-0 leading-relaxed ">
                   Проект для компаниии Русметрология
                </h1>
                <h1 className="font-extralight tracking-wider text-[1rem] lg:text-[1.2rem] mb-[2rem] leading-relaxed">
                   Описание проекта: Многостраничный корпоративный сайт.
                </h1>
                <div className="pl-[0.5rem]">
                  <p className="">Степень вовлеченности: 100 %.</p>
                  <p className="">Этапы разработки: </p>
                  <li>разработка дизайна;</li>
                  <li>подготовка медиаэлементов;</li>
                  <li>разработка навигации;</li>
                  <li>копирайтинг;</li>
                  <li>разазработка функциональных блоков;</li>
                  <li>размещение сайте.</li>
                </div>
                <div className="flex justify-end">
                  <button className="mt-[1rem]">Перейти на cайт </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Rusmetrol;
