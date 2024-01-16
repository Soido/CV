import { useEffect, useState } from "react";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

function SkillsList() {
  const skills: any = [
    { id: 1, icon: <FaNodeJs />, text: "Node.js" },
    {
      id: 2,
      icon: <BiLogoJavascript />,
      text: "Javascript",
    },
    {
      id: 3,
      icon: <BiLogoTypescript />,
      text: "TypeScript",
    },
    { id: 4, icon: <FaReact />, text: "React" },
    {
      id: 5,
      icon: <BiLogoTailwindCss />,
      text: "Tailwind CSS",
    },
    { id: 6, icon: <FaGitAlt />, text: "Git" },
  ];
  const [description, setDescription] = useState(skills);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = description.lenght - 1;
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
      5000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="flex flex-row w-full mx-[2rem]">
        <button className="text-white text-4xl w-[25%]">
          <BiChevronLeft
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />{" "}
        </button>
        <section className="flex flex-col text-white w-full">
          <div className="flex justify-center text-4xl">
            <div className="">
              {description.map((skill: any, skillIndex: any) => {
                const { id, icon, text } = skill;

                let position = "nextSlide";
                if (skillIndex === currentIndex) {
                  position = "activeSlide";
                }
                if (
                  skillIndex === currentIndex - 1 ||
                  (currentIndex === 0 && skillIndex === skills.lenght - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <article className="position" key={id}>
                    <div>{icon}</div>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <button className="text-white text-4xl w-[25%]">
          <BiChevronRight
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          />{" "}
        </button>
      </div>
    </>
  );
}

export default SkillsList;
