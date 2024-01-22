import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function BasicPrinciples() {
  const navigate = useNavigate;

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center mx-auto px-[15px] md:mt-[0.5rem] lg:mt-0 xl:mt-0 text-white text-right">
        <div className="flex justify-start w-full text-center mx-auto">
          <div className="flex w-full ">
            <h1 className="font-thin tracking-widest text-[1.5rem] lg:text-[2rem] mb-[2rem] leading-relaxed ">
              Основные принципы разработки
            </h1>
          </div>
        </div>
        <div className="text-left">
          <p>В создании проектов я пользуюсь простым правилом:</p>
          <p className="mt-[0.5rem] mb-[2rem]">
            <em>"В веб-разработке нет ничего невозможного." </em>
          </p>{" "}
          <p className="mt-[0.5rem]">Мои принципы при работе над проектом:</p>
          <ul className="pl-[1rem] mt-[0.5rem]">
            <li>
              <em>Клиентоориентированность;</em>
            </li>
            <li>
              <em>Креативность;</em>
            </li>
            <li>
              <em>Высокая скорость работы от концепции до продашина;</em>
            </li>
            <li>
              <em>Качественные продукт на любую потребность.</em>
            </li>
          </ul>
        </div>{" "}
      </div>
    </>
  );
}

export default BasicPrinciples;
