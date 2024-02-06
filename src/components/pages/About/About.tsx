import { useSwipeable } from "react-swipeable";

import SkillsSlider from "./SkillsSlider";
import VideoComp from "./VideoСomp";

import { motion } from "framer-motion";

function About() {
  const scrollToBottom = useSwipeable({
    onSwipedUp: () =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      }),

    trackMouse: true,
    delta: 1,
  });

  const scrollToTop = useSwipeable({
    onSwipedDown: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  });

  const AnimationLeft = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <div className=" flex w-full lg:h-screen h-full items-center  bg-black/90 pt-[2rem] ">
          <div className="flex flex-col xl:flex-row h-full w-full ">
            <div
              {...scrollToBottom}
              className="w-full h-full xl:-mt-[2rem] lg:pt-[2rem]"
            >
              <div className="flex w-full h-full xl: justify-center xl:items-center">
                <motion.div
                  className="relative flex flex-col  w-full xl:p-[2rem] xl:h-[34rem] lg:h-[20rem] h-screen  justify-center items-center"
                  initial="hidden"
                  whileInView="visible"
                  custom={1}
                  variants={AnimationLeft}
                >
                  <SkillsSlider />
                </motion.div>
              </div>
            </div>
            <div
              {...scrollToTop}
              className="w-full lg:h-full flex lg:items-start xl:items-center justify-start xl:pr-[1rem]"
            >
              {" "}
              <VideoComp />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
