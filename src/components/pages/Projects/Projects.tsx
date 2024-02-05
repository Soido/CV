import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";

import ProjectSliderAcc from "./ProjectSliderAcc";
import ProjectSliderAccVr from "./ProjectSliderAccVr";
import PartnersSlider from "./PartnersSlider";

function Projects() {
  const { width, height } = useWindowSize();
  const scrollToTop = useSwipeable({
    onSwipedDown: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  });

  return (
    <>
      <main className="w-screen lg:h-screen">
        <div className=" flex w-full lg:h-screen h-full items-center pt-[2rem] flex-row bg-black/90 mx-auto gap-4 ">
          <div className="flex w-full xl:flex-row flex-col lg:px-[10rem] items-center justify-center lg:-mt-[6rem] mt-0 lg:gap-4">
            {width < 1240 ? <ProjectSliderAccVr /> : <ProjectSliderAcc />}

            <div
              {...scrollToTop}
              className="flex  w-full lg:h-full  h-screen items-center justify-center "
            >
              <PartnersSlider />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
