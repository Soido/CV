import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

import { RxDot } from "react-icons/rx";

import useHover from "../../../hooks/useHover";

const AboutList = () => {
  const ref = useRef(null);

  const isHovering = useHover(ref);

  const iconAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.07 },
    }),
  };
  const TextAnimation = {
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
          className=" cursor-pointer h-[16rem] "
          initial="hidden"
          whileInView="visible"
        >
          <h1
            className={`font-thin tracking-widest text-[1.5rem] mb-[1rem] leading-relaxed`}
          >
            {" "}
            Привет, Я Артем!
          </h1>
          {isHovering ? (
            <>
              <div className="flex w-full h-[10rem] flex-row justify-between">
                <motion.div
                  className="flex flex-col w-full border-r-2 cursor-pointer "
                  onClick={() => navigate("/contacts")}
                >
                  <p className="tracking-widest text-[1rem] pr-[1rem] mt-[1rem] leading-relaxed">
                    Вы можете задать вопрос о <br /> разработке веб-сайтов,
                    стоимости их производства и возможности нанять меня.
                  </p>
                  <button
                    className=" cursor-pointer mt-[1rem]"
                    onClick={() => navigate("/contacts")}
                  >
                    Связаться со мной
                  </button>
                </motion.div>
                <div className="pl-[1rem] flex flex-col w-full cursor-pointer ">
                  <p className="tracking-widest text-[1rem] pr-[1rem] mt-[1rem] leading-relaxed">
                    Ознакомьтесь с примерами моих работ
                  </p>

                  <button
                    className=" cursor-pointer mt-[1rem]"
                    onClick={() => navigate("/contacts")}
                  >
                    Связаться со мной
                  </button>
                </div>
              </div>
            </>
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
          variants={TextAnimation}
          className=" cursor-pointer flex justify-center items-center text-4xl pb-[1rem] -mt-[1rem] mr-[.5rem]"
        >
          <RxDot />
        </motion.div>
      </div>
    </>
  );
};

export default AboutList;
