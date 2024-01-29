import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

const HomeSkillsList = () => {
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
      <div className="  flex flex-col w-full text-left justify-center mx-auto px-[15px] mt-[1rem] lg:mt-0 xl:mt-0 text-white border-t-2 pt-[2rem]">
        {" "}
        <h2 className="font-thin tracking-widest text-[1.5rem] mb-[1.5rem] leading-relaxe">
          {" "}
          Мой Инструменты{" "}
        </h2>
        <motion.div
          className="flex flex-row w-full text-4xl justify-around"
          initial="hidden"
          whileInView="visible"
        >
          <motion.div custom={1} variants={iconAnimation}>
            <FaNodeJs className="cursor-pointer " />
          </motion.div>
          <motion.div custom={2} variants={iconAnimation}>
            <BiLogoJavascript className="cursor-pointer " />
          </motion.div>
          <motion.div custom={3} variants={iconAnimation}>
            <FaReact className="cursor-pointer App-logo " />
          </motion.div>
          <motion.div custom={4} variants={iconAnimation}>
            <BiLogoTypescript className="cursor-pointer " />
          </motion.div>
          <motion.div custom={5} variants={iconAnimation}>
            <BiLogoTailwindCss className="cursor-pointer " />
          </motion.div>
          <motion.div custom={6} variants={iconAnimation}>
            <FaGitAlt className="cursor-pointer  " />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-end mt-[1.2rem]"
          initial="hidden"
          whileInView="visible"
        >
          <motion.button
            custom={1}
            variants={TextAnimation}
            className={`px-[1rem] `}
            onClick={() => navigate("/about")}
          >
            Подробнее{" "}
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default HomeSkillsList;
