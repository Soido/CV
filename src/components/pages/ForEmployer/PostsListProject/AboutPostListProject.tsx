import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiLodash } from "react-icons/si";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoRedux,
  BiChevronRight,
} from "react-icons/bi";

function AboutPostListProject() {
  const navigate = useNavigate();

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

  return (
    <>
      <div className="w-full h-full text-white flex px-[1rem] py-[1rem] xl:mt-0  flex-col justify-end gap-4">
        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed xl:text-right text-left">
          Проект "Список Постов"
        </h1>
        <motion.div
          className="flex flex-row w-full text-2xl xl:justify-end justify-start items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div custom={7} variants={iconAnimation}>
            <FaNodeJs />
          </motion.div>
          <motion.div custom={8} variants={iconAnimation}>
            <BiLogoTailwindCss />
          </motion.div>
          <motion.div custom={9} variants={iconAnimation}>
            <SiLodash className="text-[1.2rem]" />
          </motion.div>
          <motion.div custom={10} variants={iconAnimation}>
            {" "}
            <BiLogoTypescript />
          </motion.div>
          <motion.div custom={11} variants={iconAnimation}>
            {" "}
            <BiLogoJavascript />
          </motion.div>
          <motion.div custom={12} variants={iconAnimation}>
            <FaReact className="cursor-pointer " />
          </motion.div>
        </motion.div>
        <div className="text-left">
          <p>
            Проект подбора фильма для просмотра из удаленного API, который вы
            можете использовать прямо сейчас.
          </p>
          <p>
            В проекте реализована возможность случайного выбора фильмов со
            стороннего сервера. Возможность сортировки списка по нескольким
            параметрам, в том числе включения в изабранное. Реальзована функция
            ввода данных. А также обработчик возможных ошибок
          </p>
        </div>
        <div className="text-left">
          <p>
            В проекте использованы технологии Redux и Redux-toolkit, а также
            следующие библиотеки: axios, express, express, react-toastify, uuid.
          </p>
        </div>
        <div
          className="flex flex-row items-center h-full w-full justify-end cursor-pointer text-right pr-[1rem] lg:pr-0"
          onClick={() => navigate("/foremployer/postlistproject")}
        >
          <p className="pr-[.5rem]">Ознакомиться с проектом</p>
          <BiChevronRight className="text-xl mt-[.2rem]" />
        </div>
      </div>
    </>
  );
}

export default AboutPostListProject;
