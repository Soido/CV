import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

import useHover from "../../../hooks/useHover";

import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import { SiLodash } from "react-icons/si";
import {
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

const HomeSkillsList = () => {
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
      transition: { delay: custom * 1 },
    }),
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="  flex flex-col w-full text-left justify-center mx-auto px-[15px] text-white border-t-2 pt-[2rem] ">
        {" "}
        <h2 className="font-thin tracking-widest text-[1.5rem] mb-[1.5rem] leading-relaxe">
          {" "}
          Мой Инструменты{" "}
        </h2>
        <motion.div
          className="flex flex-row w-full text-4xl justify-around"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div custom={7} variants={iconAnimation} ref={ref}>
            <a href="https://nodejs.org/en" title="NodeJs Site">
              <FaNodeJs className={`cursor-pointer `} />
            </a>
          </motion.div>
          <motion.div custom={8} variants={iconAnimation}>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
              title="Mozilla.org Site"
            >
              {" "}
              <BiLogoJavascript className="cursor-pointer " />
            </a>
          </motion.div>

          <motion.div custom={10} variants={iconAnimation}>
            <a
              href="https://www.typescriptlang.org/"
              title="TypeScript.org Site"
            >
              {" "}
              <BiLogoTypescript className="cursor-pointer " />
            </a>
          </motion.div>
          <motion.div custom={9} variants={iconAnimation}>
            <a href="https://react.dev/" title="React Site">
              {" "}
              <FaReact className="cursor-pointer App-logo " />
            </a>
          </motion.div>
          <motion.div custom={11} variants={iconAnimation}>
            <a href="https://redux.js.org/" title="Redux Site">
              {" "}
              <BiLogoRedux className="cursor-pointer  " />
            </a>
          </motion.div>
          <motion.div custom={13} variants={iconAnimation}>
            <a href="https://git-scm.com/" title="Git Site">
              {" "}
              <FaGitAlt className="cursor-pointer  " />
            </a>
          </motion.div>

          <motion.div custom={12} variants={iconAnimation}>
            <a href="https://tailwindcss.com/" title="TailwindCSS Site">
              {" "}
              <BiLogoTailwindCss className="cursor-pointer " />
            </a>
          </motion.div>
          <motion.div custom={11} variants={iconAnimation}>
            <a href="https://lodash.com/" title="LoDash Site">
              {" "}
              <SiLodash className="cursor-pointer mt-[.2rem] text-3xl" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-end mt-[1.2rem] -mr-[2rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
