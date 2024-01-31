import { useSwipeable } from "react-swipeable";

import SkillsSlider from "./SkillsSlider";
import VideoComp from "./VideoСomp";

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

  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <div className=" flex w-full lg:h-screen h-full items-center  bg-black/90 ">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div {...scrollToBottom} className="w-full h-full lg:-mt-[2rem]">
              <div className="flex w-full h-full justify-center items-center ">
                <div className="relative flex flex-col lg:w-[90%] w-full lg:p-[2rem] lg:h-[34rem] h-screen  justify-center items-center">
                  <SkillsSlider />
                </div>
              </div>
            </div>
            <div
              {...scrollToTop}
              className="w-full flex items-center justify-start "
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
