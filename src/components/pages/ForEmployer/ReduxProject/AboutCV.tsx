import { FaGithub } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function AboutCV() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full xl:h-[24rem] 2xl:h-[23rem] h-full text-white flex px-[1rem] pt-[1rem] pb-[4rem] md:pb-[3rem] lg:py-[2rem] flex-col justify-end items-end gap-4 ">
        <div className="xl:w-[60%] w-full">
          <h1 className="font-thin tracking-widest text-[1.2rem] leading-relaxed xl:text-right text-left">
            Сайт визитка для frontend разработчика
          </h1>

          <div className="xl:text-right text-left mt-[1rem]">
            <p>
              Для написания этого сайта использованы все основные технологии в
              разработке SPA, указанные в разделе{" "}
              <span
                className=" hover:underline cursor-pointer"
                onClick={() => navigate("/about")}
              >
                Инструменты
              </span>{" "}
              и на данной странице.
            </p>
          </div>
          <div className="text-left mt-[1rem]"></div>
          <a href="https://github.com/Soido/CV">
            {" "}
            <div className="text-right w-full flex justify-end flex-row items-center pr-[1rem] lg:pr-0">
              <FaGithub className=" text-[1.5rem] mr-[1rem]" />{" "}
              <p>Ссылка на GitHub</p>
            </div>{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutCV;
