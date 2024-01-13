import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";

import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

function SkllsOpen() {
  return (
    <>
      <div className="absolute  px-[8rem] w-full z-10">
        <div className="reltive flex flex-row w-full text-4xl justify-around  my-[.5rem] text-white ">
          <div className="flex flex-col items-center justify-center">
            <FaNodeJs className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiLogoJavascript className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaReact className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiLogoTypescript className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiLogoTailwindCss className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaGitAlt className="cursor-pointer " />
            <div className=" text-white text-2xl">
              {" "}
              <BiChevronDown />
            </div>
          </div>
        </div>
        <div className="bg-white text-black text-4xl"></div>
      </div>
      ;
    </>
  );
}

export default SkllsOpen;
