import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useWindowSize } from "react-use";

import { motion } from "framer-motion";

import { RxDot } from "react-icons/rx";

import { BiChevronDown } from "react-icons/bi";

import contentItems from "../../data/ProjectData";
import { is } from "@babel/types";

function ProjectSliderAccVr() {
  const { width, height } = useWindowSize();
  let heightWindow = height;

  const [content, setContent] = useState(contentItems);
  const [openId, setOpenId] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mt-[6rem] flex w-full h-full justify-center items-start  text-white  ">
        <div className=" list-none flex w-full flex-col justify-center gap-2 ">
          {content.map((items: any, id: number) => {
            const { topic, cont, theme, desc, secdesc, thirddesc } = items;

            let isOpen = id === openId;

            const length = contentItems.length;

            return (
              <motion.div
                className={`accordion-item flex flex-col overflow-hidden h-[3rem] md:h-[4rem] ${
                  isOpen ? "h-full" : ""
                } w-full text-left `}
                style={{
                  height: isOpen ? `${heightWindow - length - 280}px` : "",
                }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                key={id}
              >
                <div
                  className={`accordion-body h-[4rem] cursor-pointer  px-[1rem]
                 shrink-0 flex flex-row py-[1rem] items-center justify-center text-xl `}
                  onClick={() => {
                    setOpenId(id);
                    scrollToTop();
                  }}
                >
                  <div className="flex w-full h-full items-center justify-between  ">
                    <div>
                      <h1
                        className={`w-full h-full text-lg font-thin leading-none text-left`}
                      >
                        {topic}
                      </h1>{" "}
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-full"></div>
                  <button className=" h-full">
                    {isOpen ? <BiChevronDown /> : <RxDot />}
                  </button>
                </div>

                <motion.div
                  className={` shrink-0 pl-[1rem]  overflow-y-auto overflow-hidden  `}
                  style={{
                    height: isOpen ? `${heightWindow - length - 340}px` : "",
                  }}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div>
                    <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed  ">
                      {theme.firstName}
                    </h2>

                    {[].concat(desc).map((text, idx) => (
                      <p key={`${id}__${idx}`} className="mt-[1rem] pr-[1rem]">
                        {text}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed mt-[1rem] ">
                      {theme.secondName}
                    </h2>
                    {[].concat(secdesc).map((text, idx) => (
                      <p key={`${id}__${idx}`} className="mt-[1rem] pr-[1rem]">
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className="mt-[1rem]">
                    <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed mt-[1rem]  ">
                      {theme.thirdName}
                    </h2>
                    {[].concat(thirddesc).map((text, idx) => (
                      <p key={`${id}__${idx}`} className="mt-[1rem] pr-[1rem]">
                        {text}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectSliderAccVr;
