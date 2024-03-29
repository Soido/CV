import { useState } from "react";
import _ from "lodash";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

import { RxDot } from "react-icons/rx";

import { BiChevronRight } from "react-icons/bi";

import contentItems from "../../data/ProjectData";

function ProjectSliderAcc() {
  const { width } = useWindowSize();
  let widthWindow = width;

  const [content, setContent] = useState(contentItems);
  const [openId, setOpenId] = useState(0);

  return (
    <>
      <div className="flex w-full h-[38rem] justify-center items-center  text-white  mx-auto ">
        <div className=" list-none flex w-full h-full  pt-[4rem] flex-row justify-center gap-4">
          {_.map(content, (items: any, id: number) => {
            const { topic, cont, theme, desc, secdesc, thirddesc } = items;

            let isOpen = id === openId;

            const length = contentItems.length;

            return (
              <motion.div
                className={` flex overflow-hidden w-[14rem] h-full   text-left`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                style={{
                  width: isOpen ? `${widthWindow - 530 * (length - 1)}px` : "",
                }}
                key={id}
              >
                <div
                  className={`cursor-pointer   ${
                    isOpen ? "w-[9rem]" : "w-[14rem]"
                  }
                 shrink-0 flex flex-col p-[2rem] items-center justify-between  text-4xl `}
                  onClick={() => {
                    setOpenId(id);
                  }}
                >
                  <div className="flex w-full h-full  text-center flex-col">
                    <h2
                      className={`w-full ${
                        !isOpen ? "text-2xl" : "text-xl"
                      } font-thin leading-none`}
                    >
                      {topic}
                    </h2>{" "}
                  </div>
                  <button className="-mt-[4rem] h-full">
                    {isOpen ? <BiChevronRight /> : <RxDot />}
                  </button>

                  <div className="flex items-center justify-center h-full">
                    {!isOpen ? (
                      <p
                        className={`w-full ${
                          !isOpen ? "text-xl" : "text-lg"
                        } font-thin text-center `}
                      >
                        {cont}
                      </p>
                    ) : null}
                  </div>
                </div>

                <motion.div
                  className={` shrink-0 h-full py-[1rem] pl-[1rem]  overflow-y-auto overflow-hidden border-l-2  `}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                  style={{
                    width: isOpen ? `${widthWindow - 410 * length}px` : "",
                  }}
                >
                  <Scrollbars
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "#ffffff",
                    }}
                  >
                    <div>
                      <div className="mr-[1rem]">
                        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed  ">
                          {theme.firstName}
                        </h1>

                        {_.map(_.concat(desc), (text, idx) => (
                          <p key={`${id}__${idx}`} className="mt-[1rem]">
                            {text}
                          </p>
                        ))}
                      </div>
                      <div className="mr-[1rem]">
                        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed mt-[1rem] ">
                          {theme.secondName}
                        </h1>
                        {_.map(_.concat(secdesc), (text, idx) => (
                          <p key={`${id}__${idx}`} className="mt-[1rem]">
                            {text}
                          </p>
                        ))}
                      </div>
                      <div className="mt-[1rem] mr-[1rem]">
                        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed mt-[1rem]  ">
                          {theme.thirdName}
                        </h1>
                        {_.map(_.concat(thirddesc), (text, idx) => (
                          <p key={`${id}__${idx}`} className="mt-[1rem]">
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

export default ProjectSliderAcc;
