import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import contentItemsSlider, {
  IContentSlider,
} from "../../data/ProjectDataSlider";

import { useSwipeable } from "react-swipeable";

import Rusmetro from "../../../img/rusmetrologiya-logo.png";
import Medprom from "../../../img/MedpromlabLogo_2.png";
import Kultlogo from "../../../img/kult-logo.png";

function PartnersSlider() {
  const [description, setDescription] = useState(contentItemsSlider);
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
      12000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  const scrollSlide = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevState) => prevState + 1),
    onSwipedRight: () => setCurrentIndex((prevState) => prevState - 1),
  });

  return (
    <>
      <div className="lg:w-[23rem] w-full lg:h-[38rem]  justify-center items-center  text-left ">
        <div className="flex flex-row lg:w-[23rem] w-full h-[34rem]  lg:mt-[1rem]  pt-[2rem] ">
          <button className="text-white text-2xl w-[10%]">
            <BiChevronLeft
              onClick={() => setCurrentIndex((prevState) => prevState - 1)}
            />{" "}
          </button>
          <section className="w-full h-full  mx-auto" {...scrollSlide}>
            <div className=" relative flex w-full h-full text-center overflow-hidden">
              {description.map((skill: IContentSlider, skillIndex: number) => {
                const { id, icon, type, desc, engage, link } = skill;

                let position = "translate-x-full";
                if (skillIndex === currentIndex) {
                  position = "translate-x-0 opacity-100";
                }
                if (
                  skillIndex === currentIndex - 1 ||
                  (currentIndex === 0 &&
                    skillIndex === contentItemsSlider.length - 1)
                ) {
                  position = "-translate-x-full";
                }
                return (
                  <article
                    className={`${position}  absolute flex flex-col items-center w-full h-full opacity-0 mt-[3rem] text-white`}
                    key={id}
                  >
                    <div className="flex flex-col items-centerw-full">
                      <div className="w-full h-[2.5rem]  rounded-full  text-[1rem] px-[1rem] text-black">
                        {" "}
                        <img
                          src={require("../../../img/rusmetrologiya-logo.png")}
                          className="w-full h-full object-cover"
                          alt="logocompany"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-[3rem] px-[1rem] text-left w-full">
                      <h1 className=""> Тип сайта: {type}</h1>
                      <p className="mt-[1rem]">Вовлеченность: {engage}</p>
                      <p className="mt-[1rem]">Этапы разработки: </p>
                      {[].concat(desc).map((text, idx) => (
                        <li key={`${id}__${idx}`} className="">
                          {text}
                        </li>
                      ))}

                      <div className="flex justify-end items-end w-full mt-[1rem]">
                        <button>
                          {" "}
                          <a href={link}>Cсылка на проект </a>{" "}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
          <button className="text-white text-2xl text-rightApp-logo w-[10%]">
            <BiChevronRight
              onClick={() => setCurrentIndex((prevState) => prevState + 1)}
            />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default PartnersSlider;
