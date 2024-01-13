import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { LiaTelegramPlane, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

import avatar from "../img/avatar.png";
import Button from "../UX/UI/Button";
import useHover from "../hooks/useHover";

const Home = () => {
  const ref = useRef(null);
  const firstRef = useRef(null);
  const isHovering = useHover(ref);
  const isFirstHovering = useHover(firstRef);

  const navigate = useNavigate();

  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="w-[70%] h-full -mt-[2rem]">
              <div className="flex w-full h-full justify-center items-center ">
                <div className="flex flex-col p-[2rem] rounded-xl shadow-lg h-[34rem]">
                  <div className="flex w-full items-center justify-center">
                    <div className="h-[15rem] w-[15rem] rounded-full ">
                      <img
                        className="h-full w-full object-cover rounded-full"
                        src={avatar}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col h-full items-center  mx-auto mt-[1rem] text-white">
                    {" "}
                    <div className="">
                      <p className="text-[2rem] "> Артем Суржко</p>
                      <p className=" font-thin text-[1.5rem] mb-[2rem] mt-[.5rem] ">
                        {" "}
                        Веб-Разработчик.{" "}
                      </p>
                    </div>
                    <div className="flex justify-end ">
                      <button
                        className=" px-[1rem]"
                        onClick={() => navigate("/contacts")}
                      >
                        Связаться со мной{" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row w-full text-2xl justify-around mt-[1rem] border-b-2 pb-[1rem] text-white">
                    <SlSocialVkontakte className="cursor-pointer " />
                    <LiaInstagram />
                    <LiaTelegramPlane />
                    <LiaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start -ml-[8rem] -mt-[4rem]">
              <div className="max-w-[780px] flex flex-col h-[34rem] p-[2rem] rounded-xl shadow-lg">
                <div className="flex flex-col">
                  <div
                    ref={ref}
                    className="flex flex-col text-left justify-center mx-auto px-[15px] w-full text-white pb-[1rem] mr-[1rem]"
                  >
                    <div
                      className=" cursor-pointer"
                      onClick={() => navigate("/projects")}
                    >
                      <h1 className="font-thin tracking-widest text-[1.5rem] mb-[2rem] leading-relaxed">
                        {" "}
                        Привет, Я Артем!
                      </h1>
                      <p className=" tracking-widest text-[1rem]  my-[2rem] leading-relaxed">
                        {" "}
                        Специализируюсь на фронт-энд разработке. Имею опыт в
                        разработке корпоративных сайтов и сайтов-визиток. Знаю
                        необходимые технологии, для того чтобы скорость загрузки
                        приложений была максимально быстрой, вне зависимости от
                        контента.
                      </p>
                    </div>
                    <div className="flex justify-end ">
                      <button
                        className={`px-[1rem] ${isHovering ? null : "hidden"} `}
                        onClick={() => navigate("/projects")}
                      >
                        Проекты{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    ref={firstRef}
                    className=" cursor-pointer flex flex-col w-full text-left justify-center mx-auto px-[15px] mt-[3rem] lg:mt-0 xl:mt-0 text-white border-t-2 pt-[2rem]"
                  >
                    {" "}
                    <h2 className="font-thin tracking-widest text-[1.5rem] mb-[2rem] leading-relaxe">
                      {" "}
                      Мой Инструменты{" "}
                    </h2>
                    <div className="flex flex-row w-full text-4xl justify-around mt-[1rem]">
                      <FaNodeJs className="cursor-pointer " />
                      <BiLogoJavascript className="cursor-pointer " />
                      <FaReact className="cursor-pointer " />
                      <BiLogoTypescript className="cursor-pointer " />
                      <BiLogoTailwindCss className="cursor-pointer " />
                      <FaGitAlt className="cursor-pointer  " />
                    </div>
                    <div className="flex justify-end mt-[3rem]">
                      <button
                        className={`px-[1rem] ${
                          isFirstHovering ? null : "hidden"
                        } `}
                        onClick={() => navigate("/about")}
                      >
                        Подробнее{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
