import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import "./Home.css";

import { RxDot } from "react-icons/rx";

import useHover from "../../../hooks/useHover";

import AboutListSlide from "./HomeAboutListSLide";

const HomeAboutList = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const isHovering = useHover(ref);

  const iconAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.7 },
    }),
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col text-left justify-center mx-auto  w-full text-white pb-[1rem] lg:mr-[1rem] xl:h-full h-[25rem] lg:h-[20rem] overflow-hidden "
      >
        <div className=" lg:h-[16rem] h-full w-full ">
          <motion.h2
            custom={2.2}
            variants={iconAnimation}
            className={`font-thin tracking-widest text-[1.5rem] mb-[1rem] leading-relaxed lg:text-left text:center w-full`}
          >
            {" "}
            Привет, Я Артем!
          </motion.h2>
          {open ? (
            <AboutListSlide />
          ) : (
            <div className="flex items-center w-full h-full">
              <p className=" tracking-widest text-[1rem] xl:my-[2rem] lg:p-0 pb-[1rem] leading-relaxed">
                {" "}
                Специализируюсь на фронт-энд разработке. Имею опыт в разработке
                корпоративных сайтов и сайтов-визиток. Знаю необходимые
                технологии, для того чтобы скорость загрузки приложений была
                максимально быстрой, вне зависимости от контента.
              </p>
            </div>
          )}
        </div>
        <motion.div
          custom={1.8}
          variants={iconAnimation}
          className=" cursor-pointer flex justify-center items-center text-4xl    z-10"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RxDot title="Нажми для просмотра" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeAboutList;
