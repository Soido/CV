import { useNavigate } from "react-router-dom";

import SkillsSlider from "./SkillsSlider";
import VideoComp from "./VideoСomp";

function About() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90 ">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="w-full h-full -mt-[2rem]">
              <div className="flex w-full h-full justify-center items-center ">
                <div className="relative flex flex-col w-[90%] p-[2rem] h-[34rem]">
                  <div className=" flex w-full items-start justify-start text-white">
                    <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem] mb-[2rem] ">
                      {" "}
                      Мои инструменты
                    </h1>
                  </div>
                  <div>
                    <SkillsSlider />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-start ">
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
