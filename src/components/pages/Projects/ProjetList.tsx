import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import PartnersSlider from "./PartnersSlider";

import Rusmetro from "../../../img/rusmetrologiya-logo.png";
import Medprom from "../../../img/MedpromlabLogo_2.png";
import Kultlogo from "../../../img/kult-logo.png";
import Rusmetrol from "../../Rusmetrologiya";

function ProjectList() {
  const navigate = useNavigate;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex w-full h-full justify-center items-center ">
        <div className="relative flex flex-col w-full ml-[5rem] p-[2rem] h-[34rem] rounded-xl shadow-lg">
          <div className=" flex w-full items-start justify-start text-white">
            <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem] mb-[2rem] ">
              {" "}
              Типы проектов
            </h1>
          </div>

          <div className="flex items-start justify-between w-full h-[20rem]">
            {open ? (
              <>
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className=" text-white w-full flex flex-row items-center justify-between "
                >
                  <div className="w-[10%] text-2xl -ml-[3rem]">
                    <button
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <BiChevronRight />
                    </button>
                  </div>
                  <div className="w-full text-left">
                    <h1>Одностраничные сайты(лэндинг). Сайты визитки.</h1>
                    <p className="mt-[1rem]">
                      {" "}
                      Лэдинг - это сайт, всё содержимое которого помещается на
                      одной странице, которая просматривается прокруткой. У него
                      нет разветвлённой структуры, это просто длинная страница с
                      логическими блоками, которую пользователь скролит по мере
                      чтения.
                    </p>
                    <p className="mt-[1rem] mb-[2rem]">
                      {" "}
                      Сайт-визитка — это небольшой по объёму сайт, состоящий из
                      нескольких страниц. Он содержит базовую информацию о
                      компании: контакты, услуги, цены, историю деятельности.
                      Цель сайта-визитки — познакомить посетителей с компанией.
                    </p>
                  </div>{" "}
                </motion.div>
              </>
            ) : (
              <>
                <div className=" text-white w-full flex flex-row items-center justify-between">
                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="w-full text-left pl-[2rem]"
                  >
                    <h1>Корпоративный сайт.</h1>
                    <p className="mt-[1rem] mb-[1rem]">
                      Корпоративный сайт — это портал для бизнеса, необходимый
                      элемент успешной работы любой компании, будь то крупная
                      международная организация или небольшое предприятие. Он
                      содержит большое количество страниц и элементов:
                      актуальные новости и информации о деятельности компании.
                      Описание всех услуг и товаров. Размещение документации, с
                      которой могут ознакомиться как клиенты, так и партнёры.
                      Размещение контактной информации, в том числе номеров
                      телефонов, электронной почты и других способов связи с
                      компанией.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="w-[10%] text-2xl"
                  >
                    <button
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <BiChevronLeft />
                    </button>{" "}
                  </motion.div>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col w-full h-[14rem]">
            <div className=" flex w-full items-start justify-start text-white">
              <h1 className="font-thin tracking-widest text-[1.5rem] leading-relaxed ml-[2rem] ">
                {" "}
                Компании Заказчики
              </h1>
            </div>
            <PartnersSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
