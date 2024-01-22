import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

import { RxDot } from "react-icons/rx";

import useHover from "../../../hooks/useHover";

import AboutListSlide from "./HomeAboutListSLide";

const AboutList = () => {
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

  const navigate = useNavigate();

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col text-left justify-center mx-auto px-[15px] w-full text-white pb-[1rem] mr-[1rem]"
      >
        <motion.div
          className="  h-[16rem] "
          initial="hidden"
          whileInView="visible"
        >
          <h1
            className={`font-thin tracking-widest text-[1.5rem] mb-[1rem] leading-relaxed`}
          >
            {" "}
            Привет, Я Артем!
          </h1>
          {open ? (
            <AboutListSlide />
          ) : (
            <p className=" tracking-widest text-[1rem]  my-[2rem] leading-relaxed">
              {" "}
              Специализируюсь на фронт-энд разработке. Имею опыт в разработке
              корпоративных сайтов и сайтов-визиток. Знаю необходимые
              технологии, для того чтобы скорость загрузки приложений была
              максимально быстрой, вне зависимости от контента.
            </p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={1.3}
          variants={iconAnimation}
          className=" cursor-pointer flex justify-center items-center text-4xl pb-[1rem] -mt-[1rem] mr-[.5rem]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RxDot />
        </motion.div>
      </div>
    </>
  );
};

export default AboutList;
