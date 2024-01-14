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
import SkllsOpen from "./SkillsOpen";

import Button from "../UX/UI/Button";
import { dblClick } from "@testing-library/user-event/dist/click";
import SkillOpenPosts from "./SkillOpenPosts";

function About() {
  const navigate = useNavigate();
  const [openMenuSkills, setOpenMenuskills] = useState(false);
  const handleClick = () => {
    setOpenMenuskills(!openMenuSkills);
  };

  const handleClickAway = () => {
    setOpenMenuskills(false);
  };

  const [skills, setSkills] = useState([
    { id: 1, ikon: <FaNodeJs />, text: "Node.js", visability: "invisible" },
    {
      id: 2,
      ikon: <BiLogoJavascript />,
      text: "Javascript",
    },
    {
      id: 3,
      ikon: <BiLogoTypescript />,
      text: "TypeScript",
    },
    { id: 4, ikon: <FaReact />, text: "React" },
    {
      id: 5,
      ikon: <BiLogoTailwindCss />,
      text: "Tailwind CSS",
    },
    { id: 6, ikon: <FaGitAlt />, text: "Git" },
  ]);

  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90 ">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="w-[90%] h-full -mt-[2rem]">
              <div className="flex w-full h-full justify-center items-center ">
                <div className="relative flex flex-col w-full p-[2rem] h-[34rem]">
                  <div className=" flex w-full items-start justify-start text-white">
                    <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem] mb-[2rem] ">
                      {" "}
                      Мои инструменты
                    </h1>
                  </div>
                  <div
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    {openMenuSkills ? (
                      <>
                        <SkllsOpen /> <SkillOpenPosts />{" "}
                      </>
                    ) : null}
                    {skills.map((skills) => (
                      <Skills
                        skills={skills}
                        key={skills.id}
                        visability={skills.visability}
                      />
                    ))}
                  </div>
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
