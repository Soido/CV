import React, { useEffect, useRef, useState } from "react";

import PersonList from "./PersonList";
import AboutList from "./HomeAboutList";
import SkillsList from "./HomeSkillsList";

import { useSwipeable } from "react-swipeable";

const Home = () => {
  const ScrollToBottom = useSwipeable({
    onSwipedUp: () =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      }),
    trackMouse: true,
    delta: 1,
  });

  const scrollToTop = useSwipeable({
    onSwipedDown: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  });

  return (
    <>
      <main className="w-screen lg:h-screen h-full" {...ScrollToBottom}>
        <div className=" flex w-full lg:h-screen h-full items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full lg:gap-2 xl:gap-0">
            <PersonList />

            <div className="w-full flex items-center justify-start lg:mr-[5rem] xl:-ml-[8rem] lg:-mt-[4rem] mt-[3rem]">
              <div className="2xl:max-w-[780px] w-full lg:h-[34rem] h-screen p-[2rem] lg:p-0 xl:p-[2rem]">
                <div
                  {...scrollToTop}
                  className="flex flex-col w-full h-full items-center justify-center my-auto "
                >
                  <AboutList />
                  <SkillsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
