import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

import "./ProjectSliderAcc.css";

import { motion } from "framer-motion";

import { RxDot } from "react-icons/rx";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import PartnersSlider from "./PartnersSlider";

import Rusmetro from "../../../img/rusmetrologiya-logo.png";
import Medprom from "../../../img/MedpromlabLogo_2.png";
import Kultlogo from "../../../img/kult-logo.png";
import Rusmetrol from "../../Rusmetrologiya";
import { Console } from "console";

function ProjectSliderAcc() {
  const { width, height } = useWindowSize();
  let widthWindow = width;

  const contentItems: any = [
    {
      topic: "Виды проектов",
      name: {
        firstName: "Одностраничные сайты(лэндинг). Сайты визитки.",
        seconName: "Корпоративные сайты.",
      },
      desc: "Лэдинг - это сайт, всё содержимое которого помещается на одной странице, которая просматривается прокруткой. У него  нет разветвлённой структуры, это просто длинная страница с логическими блоками, которую пользователь скролит по мере чтения.",
    },
    {
      topic: "Приниципы работы",
      name: "Oтимизация проектов",

      desc: "Текст текст текст",
    },
    {
      topic: "Актуальные проекты",
      name: "В процессе разработки",
      desc: "Текст текст текст",
    },
  ];

  const navigate = useNavigate;
  const [content, setContent] = useState(contentItems);
  const [openId, setOpenId] = useState(0);

  /* useEffect(() => {
    const lastIndex = content.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, content]);*/

  return (
    <>
      <div className="flex w-[95%] h-[38rem] justify-center items-center -mt-[4rem] text-white  mx-auto">
        <ul className="accordion-hr min-h-[300px] list-none flex w-full h-full px-[2rem] pt-[4rem] flex-row  gap-2">
          {content.map((items: any, id: number) => {
            const { topic, name, desc } = items;

            const isOpen = id === openId;

            const length = contentItems.length;

            /*let position = "w-[15rem]";
            if (itemsIndex === currentIndex) {
              position = "w-full";
            }
            if (
              itemsIndex === currentIndex - 1 ||
              (currentIndex === 0 && itemsIndex === contentItems.length - 1)
            ) {
              position = "w-[15rem]";
            }*/
            return (
              <li
                className={`accordion-hr-item flex overflow-hidden w-[10rem] h-full  text-left`}
                style={{
                  width: isOpen ? `${widthWindow - 50 * (length - 1)}px` : "",
                }}
                key={id}
              >
                <div
                  className=" cursor-pointer relative w-[10rem] shrink-0 accordion-hr-header flex justify-center  text-4xl border-r-2 "
                  onClick={() => {
                    setOpenId(id);
                  }}
                >
                  <h1 className=" block absolute   w-full text-2xl font-thin leading-none origin-left ">
                    {topic}
                  </h1>{" "}
                  <button>
                    <RxDot />
                  </button>
                </div>
                <div
                  className={`accordion-hr-body shrink-0   h-full py-[5rem] px-[4rem] overflow-y-auto overflow-hidden`}
                  style={{
                    width: isOpen ? `${widthWindow - 200 * length}px` : "",
                  }}
                >
                  <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem] mb-[2rem] ">
                    {name.firstName}
                  </h1>
                  <p className="ml-[2rem] text-xl">{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProjectSliderAcc;
