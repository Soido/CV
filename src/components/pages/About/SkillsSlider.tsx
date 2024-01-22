import { useEffect, useState } from "react";
import "./SkillList.css";

import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

function SkillSlider() {
  const skillsData: any = [
    {
      id: 1,
      icon: <FaNodeJs />,
      name: "Node.js",
      desc: "Я не являюсь специалистом бэк-энд разработки, поэтому использую node.js только для возможности загрузки библиотек и npm-модулей.",
    },

    {
      id: 2,
      icon: <BiLogoJavascript />,
      name: "JavaScript",
      desc: "Весь функицонал, который просиходит на этой странице написан мной на языке JavaScript и его фреймворков (в том числе этот Слайдер). Конечно в чистом виде я использую его крайне редко. Без условно любая разработка не обходится без знаний HTML-разметки и таблиц стилей CSS, но язык JavaScript без знаний HTML и CSS не существует.",
    },
    {
      id: 3,
      icon: <BiLogoTypescript />,
      name: "TypeScript",
      desc: "TypeScript - это расширенная версия языка JavaScript, изначально созданная в Microsoft для разработки крупных приложений. TypeScript помогает избавиться от типичных проблем JavaScript: ошибок типов в рантайме и неконтролируемо разрастающегося кода, сигнатуры функций которого находятся в лучшем случае в памяти разработчика, а в худшем и вовсе утрачены. Так что для больших проектов без знаний основ TypeScript и типазации объектов не обойтись.",
    },
    {
      id: 4,
      icon: <FaReact />,
      name: "React",
      desc: "React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. Наверное это основной инструмент, который я использую для создания своих проектов. Использование функциональных элементов, так называемых хуков, а также принципов React по использованию виртуального DOM позволяет оптимизировать процессы использования JavaScript, уменьшить объем кода и сделать загрузку веб приложений действительно быстрой.",
    },
    {
      id: 5,
      icon: <BiLogoTailwindCss />,
      name: "Tailwind CSS",
      desc: "Я не являюсь веб-дизайнером, поэтому для меня, чем проще описание таблицы стилей, тем больше возможностей для действительно качественной разработки. Tailwind CSS вот что мне действительно нравится. Этот фремворк позваляет прописывать стили прямо в строку HTML-разметки. Это очень удобно.",
    },
    {
      id: 6,
      icon: <FaGitAlt />,
      name: "Git",
      desc: "В моей практике не было действительно таких проектов, в которых необходимо было бы пользоваться системой управления версий Git, так как я работал один над своими проектами. Но уметь пользоваться данной системой просто необходимо, хотя бы потому что любой специалист ставит перед собой цели поучаствовать в чем-то глобальном, а глобальные проекты в одиночку не осуществляются. Поэтому я разобрался и в этой технологии, правда пока использую для этого командную строку VSCode.",
    },
  ];
  const [description, setDescription] = useState(skillsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = description.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, description]);

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      18000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="flex flex-row w-full mx-[2rem]">
        <button className="text-white text-4xl w-[10%]">
          <BiChevronLeft
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />{" "}
        </button>
        <section className="w-full  mx-auto">
          <div className=" relative flex  mt-[2rem] h-[24rem] w-full text-center overflow-hidden">
            {description.map((skill: any, skillIndex: number) => {
              const { id, icon, name, desc } = skill;

              let position = "nextSlide";
              if (skillIndex === currentIndex) {
                position = "activeSlide";
              }
              if (
                skillIndex === currentIndex - 1 ||
                (currentIndex === 0 && skillIndex === skillsData.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article
                  className={`${position}  absolute flex flex-col top-0 left-0 w-full h-full opacity-0 text-white`}
                  key={id}
                >
                  <div className="flex flex-row items-center">
                    <div className="text-[4rem] border-r-2 px-[1rem]">
                      {icon}
                    </div>
                    <p className="ml-[2rem] text-2xl">{name}</p>
                  </div>
                  <div className="mt-[4rem] pl-[1rem] pr-[3rem] text-white text-left">
                    {desc}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <button className="text-white text-4xl w-[10%]">
          <BiChevronRight
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          />{" "}
        </button>
      </div>
    </>
  );
}

export default SkillSlider;
