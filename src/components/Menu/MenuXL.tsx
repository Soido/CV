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
    if (open !== true) {
    }
    setTimeout(() => {
      setOpen(false);
    }, 20000);
  };

  return (
    <div className="flex flex-row items-start my-0 mx-auto  max-w-screen animate-fade-down animate-ease-in px-[15px] ">
      <div className="pl-[2rem] relative flex w-full h-full items-center flex-row z-10  ">
        {location.pathname !== "/" ? (
          <>
            <div className="flex flex-row w-[13rem]">
              <button
                className="overflow-hidden text-white top-0 left-[1rem] text-[2rem]"
                onClick={() => {
                  setOpen(!open);
                  fetchData();
                }}
              >
                {" "}
                <RxDot />{" "}
              </button>
              <div
                className=" cursor-pointer flex flex-row h-[80px] justify-center items-center  ml-[1rem]"
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              >
                <div className="flex flex-col items-center w-full text-white text-[1.3rem] -ml-[2rem]">
                  <h1 className=" font-thin tracking-[.5rem] text-left ml-0">
                    АРТЕМ
                  </h1>
                  <h2 className=" font-extrabold tracking-widest text-left ml-[5rem]">
                    СУРЖКО
                  </h2>
                </div>
              </div>
            </div>
            {open ? (
              <>
                <div className="flex flex-row text-white w-[25rem]  justify-between ml-[2rem] text-[1rem] ">
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
                    initial={
                      open ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }
                    }
                    animate={
                      open
                        ? { x: 0, opacity: 1, transition: { delay: 0.1 } }
                        : { x: -50 }
                    }
                  >
                    {" "}
                    <Link to="/projects"> Заказчику</Link>
                  </motion.div>
                  <motion.div
                    className={`${
                      location.pathname === "/foremployer"
                        ? " border-b-2"
                        : null
                    } pb-1`}
                    initial={
                      open ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }
                    }
                    animate={
                      open
                        ? { x: 0, opacity: 1, transition: { delay: 0.2 } }
                        : { x: -50 }
                    }
                  >
                    {" "}
                    <Link to="/foremployer"> Работодателю </Link>
                  </motion.div>
                  <motion.div
                    className={`${
                      location.pathname === "/contacts" ? " border-b-2" : null
                    } pb-1`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                  >
                    {" "}
                    <Link to="/contacts">Контакты</Link>
                  </motion.div>
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
      {location.pathname === "/foremployer/postlistproject" ||
      location.pathname === "/foremployer/reduxproject" ? (
        <div className="flex pr-[2rem] top-0 w-full justify-end items-center h-[5rem] text-[1rem] z-10">
          <div
            className="flex flex-row "
            onClick={() => {
              navigate("/foremployer");
            }}
          >
            <MyButton>Вернуться к спику проектов</MyButton>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MenuSmall;
