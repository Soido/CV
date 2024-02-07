import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { RxDot } from "react-icons/rx";

import { motion } from "framer-motion";

import MyButton from "../../UX/UI/MyButton";

function MenuSmall() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchData = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 15000);
  };

  return (
    <div className="flex flex-col items-start my-0 mx-auto  max-w-screen px-[15px]">
      <div className="flex flex-row  w-full justify-between items-center h-full ">
        <div className=" relative flex lg:w-full h-full items-center w-[10rem] z-10">
          {location.pathname !== "/" ? (
            <>
              <div className="flex flex-row w-full ">
                <button
                  className=" text-white top-0 left-[1rem] text-[1.5rem] md:text-[2rem] z-50"
                  onClick={() => {
                    setOpen(!open);
                    fetchData();
                  }}
                >
                  {" "}
                  <RxDot />{" "}
                </button>
                <div
                  className=" cursor-pointer flex flex-row h-[80px] justify-center items-center  ml-0"
                  onClick={() => {
                    navigate("/");
                    setOpen(false);
                  }}
                >
                  <div className="flex flex-col items-center w-full text-white text-md -ml-[1rem] md:ml-0">
                    <h1 className=" font-thin tracking-[.5rem] text-left ml-0">
                      АРТЕМ
                    </h1>
                    <h2 className=" font-extrabold tracking-widest text-left ml-[5rem]">
                      СУРЖКО
                    </h2>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="flex md:fixed sm:right-1 md:right-8 top-0 w-full justify-end items-center h-[5rem] text-[.6rem] -z-1">
          <div className="flex flex-row ">
            <MyButton>RU</MyButton>
            <MyButton>E</MyButton>
          </div>
        </div>
      </div>
      {open ? (
        <>
          <div className="flex flex-row text-white w-[14rem] ml-[.5rem] justify-between text-[.8rem] ">
            <motion.div
              className={`${
                location.pathname === "/about" ? " border-b-2" : null
              } pb-1`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <Link to="/about">Инструменты</Link>
            </motion.div>
            <motion.div
              className={`${
                location.pathname === "/projects" ? " border-b-2" : null
              } pb-1`}
              initial={open ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
              animate={
                open
                  ? { x: 0, opacity: 1, transition: { delay: 0.1 } }
                  : { x: -50 }
              }
            >
              {" "}
              <Link to="/projects"> Проекты</Link>
            </motion.div>
            <motion.div
              className={`${
                location.pathname === "/contacts" ? " border-b-2" : null
              } pb-1`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            >
              {" "}
              <Link to="/contacts">Контакты</Link>
            </motion.div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default MenuSmall;
