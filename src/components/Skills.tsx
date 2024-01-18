import { BiChevronRight } from "react-icons/bi";
import { useRef, useState } from "react";

function Skills(props: any) {
  return (
    <>
      <div>
        <div className="relative flex flex-col px-[8rem] items-center w-full">
          <div className="flex flex-col w-full ">
            <div
              className={`cursor-pointer flex w-full items-center justify-between  border-b-2 border-white text-white ${props.skills.visability}`}
            >
              <div className="flex flex-row items-center mt-[.5rem]">
                <div className="cursor-pointer  text-4xl m-[.5rem] ">
                  {props.skills.ikon}{" "}
                </div>
                <p className="ml-[1rem]">{props.skills.text}</p>
              </div>

              <div className="flex justify-end text-xl">
                {" "}
                <BiChevronRight />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
