import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import skillsData, { ISkills } from "../../data/skillsData";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function SkillSlider() {
  const [description, setDescription] = useState(skillsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollSlide = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevState) => prevState + 1),
    onSwipedRight: () => setCurrentIndex((prevState) => prevState - 1),
  });

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
      <div className=" flex w-full  xl:mt-[1rem] mt-[1rem] lg:pt-[4rem] xl:pt-0 text-white lg:px-[2rem] px-[1.5rem] ">
        <h2 className="font-thin tracking-widest text-[1.2rem] xl:text-[1.5rem] leading-relaxed xl:ml-[2rem] lg:mb-[2rem] ">
          {" "}
          Мои инструменты
        </h2>
      </div>
      <div className="flex flex-row w-full 2xl:mx-[2rem]">
        <button className="text-white text-4xl flex justify-end items-center w-[10%] ">
          <BiChevronLeft
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />{" "}
        </button>
        <section {...scrollSlide} className="w-full  mx-auto">
          <div className=" relative flex  2xl:mt-[2rem] lg:mt-0 mt-[2rem] lg:h-[16rem] xl:h-[22rem] 2xl:h-[26rem] h-[28rem] w-full text-center overflow-hidden">
            {description.map((skill: ISkills, skillIndex: number) => {
              const { id, icon: Icon, name, desc } = skill;

              let position = "translate-x-full";
              if (skillIndex === currentIndex) {
                position = "translate-x-0 opacity-100";
              }
              if (
                skillIndex === currentIndex - 1 ||
                (currentIndex === 0 && skillIndex === skillsData.length - 1)
              ) {
                position = "-translate-x-full";
              }
              return (
                <article
                  className={`${position}  absolute flex flex-col lg:justify-normal justify-center xl:justify-center top-0 left-0 w-full h-full opacity-0 text-white`}
                  key={id}
                >
                  <div className="flex flex-row items-center">
                    <div className="lg:text-[4rem] text-4xl border-r-2 px-[1rem]">
                      <Icon />
                    </div>
                    <p className="lg:ml-[2rem] ml-[1rem] text-2xl">{name}</p>
                  </div>
                  <div className=" xl:-mt-[4rem] 2xl:-mt-[6rem] lg:mt-[2rem] -mt-[2rem] md:-mt-[4rem] flex h-full lg:justify-normal lg:items-start justify-center items-center xl:items-center  lg:px-[1rem]  text-white text-left">
                    <p>{desc}</p>
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
