import { useState } from "react";
import _ from "lodash";
import { useWindowSize } from "react-use";
import { Scrollbars } from "react-custom-scrollbars-2";
import { motion } from "framer-motion";

import { RxDot } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";

import contentItems from "../../data/ProjectData";

function ProjectSliderAccVr() {
  const { height } = useWindowSize();
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
      <div className="md:mt-[5rem] lg:mt-[3.5rem] xl:mt-[5rem] pt-[4rem] md:pt-0 pb-[4rem]  flex w-full h-full justify-center items-start  text-white  ">
        <div className=" list-none flex w-full flex-col justify-center gap-2 ">
          {_.map(content, (items: any, id: number) => {
            const { topic, theme, desc, secdesc, thirddesc } = items;

            let isOpen = id === openId;

            const length = contentItems.length;

            return (
              <motion.div
                className={`accordion-item flex flex-col overflow-hidden h-[3rem] md:h-[4rem] ${
                  isOpen ? "h-full" : ""
                } w-full text-left `}
                style={{
                  height: isOpen ? `${heightWindow - length - 320}px` : "",
                }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
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
                      <h2
                        className={`w-full h-full text-lg font-thin leading-none text-left`}
                      >
                        {topic}
                      </h2>{" "}
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
                    height: isOpen ? `${heightWindow - length - 380}px` : "",
                  }}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                >
                  <Scrollbars
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "#ffffff",
                    }}
                  >
                    <div>
                      <div>
                        <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed  ">
                          {theme.firstName}
                        </h2>

                        {_.map(_.concat(desc), (text, idx) => (
                          <p
                            key={`${id}__${idx}`}
                            className="mt-[1rem] pr-[1rem]"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                      <div>
                        <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed mt-[1rem] ">
                          {theme.secondName}
                        </h2>
                        {_.map(_.concat(secdesc), (text, idx) => (
                          <p
                            key={`${id}__${idx}`}
                            className="mt-[1rem] pr-[1rem]"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                      <div className="mt-[1rem]">
                        <h2 className="font-thin tracking-widest text-[1.2rem] leading-relaxed mt-[1rem]  ">
                          {theme.thirdName}
                        </h2>
                        {_.map(_.concat(thirddesc), (text, idx) => (
                          <p
                            key={`${id}__${idx}`}
                            className="mt-[1rem] pr-[1rem]"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Scrollbars>
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
