import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import BasicPrinciples from "./BasicPrinciples";
import ProjectList from "./ProjetList";

function Projects() {
  const navigate = useNavigate;

  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90 ">
          <div className="flex flex-col lg:flex-row h-full w-full text-white ">
            <div className="w-full h-full -mt-[2rem]">
              <ProjectList />
            </div>
            <div className="flex justify-center items-center w-[60%]">
              <BasicPrinciples />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
