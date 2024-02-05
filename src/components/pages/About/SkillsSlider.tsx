import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import skillsData, { ISkills } from "../../data/skillsData";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function SkillSlider() {
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

  const scrollSlide = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevState) => prevState + 1),
    onSwipedRight: () => setCurrentIndex((prevState) => prevState - 1),
  });

  return (
    <>
      <div className=" flex w-full  xl:mt-[1rem] mt-[1rem] lg:pt-[10rem] text-white lg:px-0 px-[1rem] ">
        <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed lg:ml-[2rem] lg:mb-[2rem] ">
          {" "}
          Мои инструменты
        </h1>
      </div>
      <div className="flex flex-row w-full xl:mx-[2rem]">
        <button className="text-white text-4xl w-[10%] ">
          <BiChevronLeft
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />{" "}
        </button>
        <section {...scrollSlide} className="w-full  mx-auto">
          <div className=" relative flex  xl:mt-[2rem] lg:mt-0 mt-[2rem] lg:h-[24rem] h-[28rem] w-full text-center overflow-hidden">
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
                  className={`${position}  absolute flex flex-col lg:justify-normal justify-center top-0 left-0 w-full h-full opacity-0 text-white`}
                  key={id}
                >
                  <div className="flex flex-row items-center">
                    <div className="lg:text-[4rem] text-4xl border-r-2 px-[1rem]">
                      <Icon />
                    </div>
                    <p className="lg:ml-[2rem] ml-[1rem] text-2xl">{name}</p>
                  </div>
                  <div className="xl:mt-[4rem] lg:mt-[2rem] -mt-[2rem] md:-mt-[4rem] flex h-full lg:justify-normal lg:items-start justify-center items-center lg:pl-[1rem] lg:pr-[3rem] text-white text-left">
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
