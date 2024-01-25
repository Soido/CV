import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function BasicPrinciples() {
  const navigate = useNavigate;

  return (
    <>
      <div className="flex flex-col w-[28rem] -mt-[2rem] -ml-[8rem] mx-auto px-[15px] h-[32rem] text-white text-right shadow-xl rounded-xl mr-[4rem]">
        <div className="flex justify-start w-full text-center mx-auto ">
          <div className="flex w-full ">
            <h1 className="font-thin tracking-widest text-[1.5rem]  mb-[2rem] leading-relaxed ">
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
