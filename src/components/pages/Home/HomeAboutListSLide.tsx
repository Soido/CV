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
      <div className="flex w-full h-[10rem] flex-row justify-between">
        <motion.div
          className="flex flex-col w-full border-r-2 cursor-pointer "
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
            className=" cursor-pointer mt-[2rem] text-right pr-[2rem]"
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
        >
          <p className="tracking-widest text-right text-[1rem] px-[1rem] mt-[1rem] leading-relaxed">
            Ознакомьтесь с тем, что я делаю на конкретных примерах:
          </p>

          <button
            className=" cursor-pointer mt-[3.5rem] text-right pr-[2rem]"
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
