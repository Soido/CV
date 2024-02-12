import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "./Home.css";

const HomeAboutListSlide = () => {
  const TextAnimationLeft = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      duration: 5,
      transition: { delay: custom * 0.2 },
    }),
  };
  const TextAnimationRight = {
    hidden: {
      x: 150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full lg:h-[10rem] h-[18rem] md:flex-row flex-col justify-between overflow-hidden">
        <motion.div
          className="flex flex-row items-center justify-center w-full h-full md:border-r-2 md:border-b-0 border-b-2 lg:p-0  cursor-pointer "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={TextAnimationLeft}
          onClick={() => navigate("/projects")}
        >
          <p className="  tracking-widest  text-[1rem]  mt-[1rem] leading-relaxed">
            Ознакомьтесь с информцией о разработке и моих проектах
          </p>
          <button
            className=" px-[1rem] cursor-pointer text-xl mt-0 text-right "
            onClick={() => navigate("/projects")}
          >
            <BiChevronRight />
          </button>
        </motion.div>
        <motion.div
          className=" items-center justify-center  flex flex-row w-full h-full cursor-pointer "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={TextAnimationRight}
          onClick={() => navigate("/contacts")}
        >
          <button
            className=" cursor-pointer text-xl mt-0 px-[1rem] "
            onClick={() => navigate("/contacts")}
          >
            <BiChevronLeft />
          </button>
          <p className="tracking-widest text-right text-[1rem] mt-[1rem] leading-relaxed">
            Задайте вопрос о разработке веб-сайтов, их стоимости и возможности
            нанять меня
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default HomeAboutListSlide;
