import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";

import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

function Skills(props: any) {
  console.log(props);

  return (
    <>
      <div>
        <div className="relative flex flex-col px-[8rem] py-[4rem] items-center   w-full">
          <div className="flex flex-col w-full ">
            <div className=" cursor-pointer flex w-full items-center justify-between  border-b-2 border-white text-white">
              <div className="flex flex-row items-center">
                <div className="cursor-pointer  text-4xl m-[.5rem] ">
                  {props.post.ikon}{" "}
                </div>
                <p className="ml-[1rem]">{props.post.text}</p>
              </div>

              <div className="flex justify-end text-xl">
                {" "}
                {props.post.chevron}
              </div>
            </div>
            <div className=" cursor-pointer flex w-full items-center justify-start  border-b-2 border-white text-white">
              {" "}
              <BiLogoJavascript className="cursor-pointer  text-4xl m-[.5rem]" />
              <p className=" ml-[1rem]"> JavaScript</p>
            </div>
            <div className=" cursor-pointer flex w-full items-center justify-start  border-b-2 border-white text-white">
              {" "}
              <BiLogoTypescript className="cursor-pointer  text-4xl m-[.5rem]" />
              <p className=" ml-[1rem]">TypeScript</p>
            </div>
            <div className=" cursor-pointer flex w-full items-center justify-start  border-b-2 border-white text-white">
              {" "}
              <FaReact className="cursor-pointer  text-4xl m-[.5rem]" />
              <p className=" ml-[1rem]">React</p>
            </div>
            <div className=" cursor-pointer flex w-full items-center justify-start  border-b-2 border-white text-white">
              {" "}
              <FaGitAlt className="cursor-pointer  text-4xl m-[.5rem]" />
              <p className=" ml-[1rem]">Git</p>
            </div>
            <div className=" cursor-pointer flex w-full items-center justify-start  border-b-2 border-white text-white">
              <BiLogoTailwindCss className="cursor-pointer  text-4xl m-[.5rem]" />
              <p className=" ml-[1rem]">TailwindCss</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
