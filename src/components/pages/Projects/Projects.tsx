import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import BasicPrinciples from "./BasicPrinciples";
import ProjectList from "./ProjetList";
import ProjectSliderAcc from "./ProjectSliderAcc";

function Projects() {
  const navigate = useNavigate;

  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90 ">
          <ProjectSliderAcc />
        </div>
      </main>
    </>
  );
}

export default Projects;
