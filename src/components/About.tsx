import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

import Skills from "./Skills";

import avatar from "../img/avatar.jpeg";

import useOpenElement from "../hooks/useOpenelement";

import Button from "../UX/UI/Button";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="w-[90%] h-full -mt-[2rem]">
              <div className="flex w-full h-full justify-center items-center ">
                <div className="flex flex-col w-full p-[2rem] rounded-xl  h-[34rem]">
                  <div className="flex w-full items-start justify-start text-white">
                    <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem]">
                      {" "}
                      Мои инструменты
                    </h1>
                  </div>
                  <Skills
                    post={{
                      ikon: <FaNodeJs />,
                      text: "Node.js",
                      chevron: <BiChevronRight />,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start ">
              <div className="max-w-[860px] flex flex-col w-full h-[34rem] p-[2rem] ">
                <div className="flex w-full h-full">
                  <img className="h-full w-full object-cover" src={avatar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
