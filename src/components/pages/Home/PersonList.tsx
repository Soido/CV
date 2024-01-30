import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { LiaTelegramPlane, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";

import avatar from "../../../img/avatar.png";

const PersonList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen lg:-mt-[2rem] mx-auto lg:mx-0">
        <div className="flex w-full h-full justify-center items-center ">
          <div className="flex flex-col p-[2rem] lg:h-[34rem] ">
            <div className="flex w-full items-center justify-center">
              <div className="h-[15rem] w-[15rem] rounded-full ">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src={avatar}
                />
              </div>
            </div>

            <div className="flex flex-col h-full items-center  mx-auto mt-[1rem] text-white">
              {" "}
              <div className="">
                <p className="text-[2rem] "> Артем Суржко</p>
                <p className=" font-thin text-[1.5rem] mb-[2rem] mt-[.5rem] ">
                  {" "}
                  Веб-Разработчик.{" "}
                </p>
              </div>
              <div className="flex justify-end ">
                <button
                  className=" px-[1rem]"
                  onClick={() => navigate("/contacts")}
                >
                  Скачать резюме{" "}
                </button>
              </div>
            </div>
            <div className="flex flex-row w-full text-2xl justify-around mt-[1rem] border-b-2 pb-[1rem] text-white">
              <SlSocialVkontakte className="cursor-pointer " />
              <LiaInstagram />
              <LiaTelegramPlane />
              <LiaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonList;
