import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Rusmetro from "../img/rusmetrologiya-logo.png";
import Medprom from "../img/MedpromlabLogo_2.png";
import Kultlogo from "../img/kult-logo.png";
import Rusmetrol from "./Rusmetrologiya";

function Projects() {
  const navigate = useNavigate;

  return (
    <>
      <main className="w-screen h-screen">
        <div className="relative flex md:min-h-full h-screen  min-h-full pt-[165px] pr-0 pb-[80px] md:pt-[165px] md:pr-0 md:pb-[80px] items-center overflow-hidden bg-black/90">
          <div className=" absolute top-0 left-0 right-0 w-full h-full overflow-hidden">
            <div className="flex items-center justify-center w-screen h-screen  mt-0">
              <div className="flex flex-col lg:flex-row md:ml-[5rem] xl:ml-0 lg:-mt-[7rem]">
                <div className=" lg:w-[50%] flex justify-center">
                  <div>
                    <div className=" flex flex-col w-full text-white justify-start mx-auto text-left mb-[3rem] md:mt-[3rem] lg:mt-0">
                      <h1 className="font-thin tracking-widest text-[1.5rem] lg:text-[2rem] leading-relaxed mb-[2rem]">
                        Проекты
                      </h1>
                      <p> Здесь представлены последние проекты: </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className=" text-white flex flex-row flex-wrap my-auto ">
                        <div className=" h-[100px] mx-[1rem] rounded-full">
                          <Link to="/projects/rusmetrologiya">
                            <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                              <img
                                className=" object-center px-[20px] hover:px-[10px]"
                                src={Rusmetro}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className=" h-[100px] mx-[1rem] rounded-full">
                          <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                            <img
                              className=" object-center px-[20px] hover:px-[10px]"
                              src={Medprom}
                            />
                          </div>
                        </div>
                        <div className=" h-[100px] mx-[1rem] rounded-full">
                          <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                            <img
                              className=" object-center px-[20px] hover:px-[10px]"
                              src={Kultlogo}
                            />
                          </div>
                        </div>
                        <div className=" h-[100px] mx-[1rem] rounded-full">
                          <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                            <img
                              className=" object-center px-[20px] hover:px-[10px]"
                              src={Rusmetro}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row mt-[1.5rem]">
                          <div className=" h-[100px] mx-[1rem] rounded-full">
                            <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                              <img
                                className=" object-center px-[20px] hover:px-[10px]"
                                src={Medprom}
                              />
                            </div>
                          </div>
                          <div className=" h-[100px] mx-[1rem] rounded-full">
                            <div className=" cursor-pointer flex items-center w-[100px] h-full bg-white rounded-full shadow shadow-white">
                              <img
                                className=" object-center px-[20px] hover:px-[10px]"
                                src={Kultlogo}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-auto px-[15px] md:mt-[0.5rem] lg:mt-0 xl:mt-0 text-white text-right">
                  <div className="flex justify-start w-full text-center mx-auto">
                    <div className="flex w-full ">
                      <h1 className="font-thin tracking-widest text-[1.5rem] lg:text-[2rem] mb-[2rem] leading-relaxed ">
                        Индвидуальный подход
                      </h1>
                    </div>
                  </div>
                  <div className="text-left">
                    <p>В создании проектов я пользуюсь простым правилом:</p>
                    <p className="mt-[0.5rem] mb-[2rem]">
                      <em>"В веб-разработке нет ничего невозможного." </em>
                    </p>{" "}
                    <p className="mt-[0.5rem]">
                      Мои принципы при работе над проектом:
                    </p>
                    <ul className="pl-[1rem] mt-[0.5rem]">
                      <li>
                        <em>Клиентоориентированность;</em>
                      </li>
                      <li>
                        <em>Креативность;</em>
                      </li>
                      <li>
                        <em>
                          Высокая скорость работы от концепции до продашина;
                        </em>
                      </li>
                      <li>
                        <em>Качественные продукт на любую потребность.</em>
                      </li>
                    </ul>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
