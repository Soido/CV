import { useEffect, useState } from "react";
import "./PartnersList.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import Rusmetro from "../../../img/rusmetrologiya-logo.png";
import Medprom from "../../../img/MedpromlabLogo_2.png";
import Kultlogo from "../../../img/kult-logo.png";
import Rusmetrol from "../../Rusmetrologiya";

function PartnersSlider() {
  const skillsData: any = [
    {
      id: 1,
      icon: "Русметрология",
      name: "Корпортивный сайт",
      desc: "Проект",
    },

    {
      id: 2,
      icon: "",
      name: "Корпоротивный сайт",
      desc: "Проект",
    },
    {
      id: 3,
      icon: "Kultlogo",
      name: "Корпортоивный сайт",
      desc: "Проект",
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
      <div className="flex flex-row w-full  h-[14rem]">
        <button className="text-white text-2xl w-[10%]">
          <BiChevronLeft
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />{" "}
        </button>
        <section className="w-full h-full  mx-auto">
          <div className=" relative flex w-full h-full text-center overflow-hidden">
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
                  className={`${position}  absolute flex flex-row items-center w-full h-full opacity-0 text-white`}
                  key={id}
                >
                  <div className="flex flex-col items-center bg-white w-[60%]">
                    <div className="w-full h-full  text-[1rem] px-[1rem] text-black">
                      {" "}
                      <h1>Компания: {icon}</h1>
                    </div>
                    <p className="ml-[2rem] text-xl text-black">
                      Проект: {name}
                    </p>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className=" px-[1rem] text-white text-left w-full">
                      {desc}
                    </div>
                    <div className=" px-[1rem] text-white text-left w-full">
                      {desc}
                    </div>
                    <div className=" px-[1rem] text-white text-left w-full">
                      {desc}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <button className="text-white text-2xl w-[10%]">
          <BiChevronRight
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          />{" "}
        </button>
      </div>
    </>
  );
}

export default PartnersSlider;
