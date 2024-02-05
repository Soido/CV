import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

import useHover from "../../../hooks/useHover";

const AboutListSlide = () => {
  const ref = useRef(null);

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
      <div className="flex w-full lg:h-[10rem] h-[15rem] md:flex-row flex-col justify-between overflow-hidden">
        <motion.div
          className="flex flex-col w-full h-full md:border-r-2 md:border-b-0 border-b-2 lg:p-0 pb-[1rem] cursor-pointer "
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={TextAnimationLeft}
          onClick={() => navigate("/contacts")}
        >
          <p className="tracking-widest text-[1rem] pr-[1rem] mt-[1rem] leading-relaxed">
            Задайте вопрос о разработке веб-сайтов, их стоимости и возможности
            нанять меня:
          </p>
          <button
            className=" lg:visible invisible cursor-pointer lg:mt-[2rem] mt-0 text-right pr-[2rem]"
            onClick={() => navigate("/contacts")}
          >
            Связаться со мной
          </button>
        </motion.div>
        <motion.div
          className="pl-[1rem] flex flex-col w-full cursor-pointer "
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={TextAnimationRight}
          onClick={() => navigate("/projects")}
        >
          <p className="  tracking-widest text-right text-[1rem] px-[1rem] mt-[1rem] leading-relaxed">
            Ознакомьтесь с тем, что я делаю на конкретных примерах:
          </p>

          <button
            className=" lg:visible invisible cursor-pointer lg:mt-[3.5rem] mt-0 text-right lg:pr-[2rem] pr-[1rem]"
            onClick={() => navigate("/projects")}
          >
            Примеры проектов
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default AboutListSlide;
