import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { CiMenuKebab } from "react-icons/ci";
import { RxDot } from "react-icons/rx";

import RU from "../UX/UI/ButtonRU";
import EN from "../UX/UI/ButtonEN";

import avatar from "../img/avatar.png";

function Menu({
  bgColor = "bg-white/80",
  height = "h-[58px]",
  margin = "-mt-[6rem]",
}) {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className={`fixed py-[10px] min-w-[320px]  px-0 w-full left-0 top-0 z-10 m-0 `}
    >
      <div className="flex flex-row items-start my-0 mx-auto  max-w-screen animate-fade-down animate-ease-in px-[15px]">
        <div className="ml-[2rem] relative flex w-full h-full items-center  ">
          {location.pathname != "/" ? (
            <>
              <button
                className="overflow-hidden text-white top-0 left-[1rem] text-[1.8rem] lg:text-[2rem]"
                onClick={handleClick}
              >
                {" "}
                <RxDot />{" "}
              </button>
              <div
                className=" cursor-pointer flex flex-row h-[80px] justify-center items-center ml-[1rem]"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-col items-center w-full text-white text-[1.3rem] -ml-[2rem]">
                  <p className=" font-thin tracking-[.5rem] text-left ml-0">
                    АРТЕМ
                  </p>
                  <p className=" font-extrabold tracking-widest text-left ml-[5rem]">
                    СУРЖКО
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="relative flex w-full h-[80px] justify-end items-center mr-[2rem]">
          <RU />
          <EN />
        </div>
      </div>
      {open ? (
        <>
          <div
            className={`fixed opacity-80 ${margin} pb-[100rem] w-full h-full overflow-hidden z-7 bg-black/50 mx-0`}
            onClick={handleClickAway}
          ></div>
          <div
            className={`block h-screen ${margin}  pb-[100rem] md:w-[70%] w-[100%] lg:w-[60%] xl:w-[43%] fixed  bg-white  text-black pt-[10rem] z-8 ${
              open ? "animate-fade-right" : "animate-fade-left"
            } animate-ease-out animate-duration-300`}
            onClick={handleClickAway}
          >
            <nav className="text-black text-left no-underline text-2xl font-light ">
              <ul className="ml-[5.5rem] uppercase">
                <li>
                  <a
                    href="#!"
                    className="absolute top-20 right-10 text-3xl"
                    onClick={handleClickAway}
                  >
                    x
                  </a>
                </li>

                <li className=" mb-[1rem]">
                  <Link to="/about">Обо мне</Link>
                </li>
                <li className=" mb-[1rem]">
                  <Link to="/projects"> Проекты</Link>
                </li>

                <li className="mb-[1rem]">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}

export default Menu;
