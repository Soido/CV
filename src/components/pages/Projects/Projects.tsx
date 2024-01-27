import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import BasicPrinciples from "./BasicPrinciples";
import ProjectList from "./ProjetList";
import ProjectSliderAcc from "./ProjectSliderAcc";
import PartnersSlider from "./PartnersSlider";

function Projects() {
  const navigate = useNavigate;

  return (
    <>
      <main className="w-screen h-screen">
        <div
          className=" flex w-full h-screen items-center 
          flex-row bg-black/90 mx-auto gap-4 "
        >
          <div className="flex w-full flex-row  px-[10rem] items-center justify-center -mt-[6rem] gap-4">
            <ProjectSliderAcc />

            <PartnersSlider />
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
