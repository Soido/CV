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
    onSwipedDown: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  });

  return (
    <>
      <div
        {...scrollSlide}
        className="flex lg:w-[70%] w-full pt-[4rem] lg:pt-0 2xl:w-full lg:h-full h-screen items-start lg:items-center px-[15px] "
      >
        <div className="xl:w-[23rem] w-full lg:h-[38rem]  justify-center items-center  text-left ">
          <div className="flex flex-row 2xl:w-[23rem] xl:w-[35rem] w-full h-[34rem]  lg:mt-[1rem]  pt-[2rem] ">
            <button className="text-white text-2xl w-[10%]">
              <BiChevronLeft
                onClick={() => setCurrentIndex((prevState) => prevState - 1)}
              />{" "}
            </button>
            <section className="w-full h-full  mx-auto" {...scrollSlide}>
              <div className=" relative flex w-full h-full text-center overflow-hidden">
                {description.map(
                  (skill: IContentSlider, skillIndex: number) => {
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
                          <div className="w-[15rem] h-[4rem]  rounded-full  text-[1rem] px-[1rem] text-black">
                            {" "}
                            <img
                              src={icon}
                              className="w-full h-full object-contain"
                              alt="logocompany"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center mt-[2rem] px-[1rem] text-left w-full">
                          <h2 className=""> Тип сайта: {type}</h2>
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
                  }
                )}
              </div>
            </section>
            <button className="text-white text-2xl text-rightApp-logo w-[10%]">
              <BiChevronRight
                onClick={() => setCurrentIndex((prevState) => prevState + 1)}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnersSlider;
