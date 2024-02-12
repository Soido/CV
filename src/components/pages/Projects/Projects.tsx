import { useWindowSize } from "react-use";

import ProjectSliderAcc from "./ProjectSliderAcc";
import ProjectSliderAccVr from "./ProjectSliderAccVr";
import PartnersSlider from "./PartnersSlider";

function Projects() {
  const { width, height } = useWindowSize();

  return (
    <>
      <main className="w-screen xl:h-screen">
        <div className=" flex w-full xl:h-screen h-full items-center pt-[2rem]  bg-black/90 mx-auto ">
          <div className="flex w-full lg:flex-row flex-col 2xl:px-[4rem] pl-[.5rem] lg:px-[1rem] lg:pb-[1rem] items-center justify-center 2xl:-mt-[6rem] overflow-hidden mt-0 xl:gap-4 lg:gap-1">
            {width < 1450 ? <ProjectSliderAccVr /> : <ProjectSliderAcc />}

            <PartnersSlider />
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
