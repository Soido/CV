import { FaGithub } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function AboutCV() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[21rem] text-white flex pl-[1rem] py-[2rem] flex-col justify-end items-end gap-4 ">
        <div className="w-[60%] ">
          <h1 className="font-thin tracking-widest text-[1.2rem] leading-relaxed text-right">
            Сайт визитка для frontend разработчика
          </h1>

          <div className="text-right mt-[1rem]">
            <p>
              Для написания этого сайта использованы все основные технологии в
              написани SPA, указанные вразделе{" "}
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
            <div className="text-right w-full flex justify-end flex-row items-center">
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
