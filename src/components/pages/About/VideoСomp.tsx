import { useState } from "react";

import { BallTriangle } from "react-loader-spinner";

import { BiVolumeMute, BiXCircle } from "react-icons/bi";

import VideoСompInterveiw from "./VideoСompInterveiw";

import bgvideo from "../../../video/bgvideo.mp4";

function VideoComp() {
  const [isLoading, setIsloading] = useState(false);

  const fetchData = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="xl:max-w-[860px] lg:max-w-[780px] lg:mx-auto xl:mx-0 flex flex-col w-full xl:h-[34rem] lg:h-[20rem] h-screen xl:p-[2rem] p-0 items-center justify-center lg:-mt-[2rem] ">
        <div className="relative flex items-center justify-center xl:h-full w-full h-full ">
          {open ? (
            <div className="absolute flex w-full h-full  2xl:w-[20rem] lg:h-[30rem] xl:h-[40rem]">
              {isLoading ? (
                <div className=" flex justify-center items-center w-full -mt-[5rem] ">
                  <BallTriangle
                    height={200}
                    width={200}
                    color="white"
                    ariaLabel="loading"
                  />
                </div>
              ) : (
                <VideoСompInterveiw />
              )}
            </div>
          ) : (
            <div className=" absolute flex justify-center xl:h-[40rem] md:h-[25rem] lg:h-[30rem]  2xl:w-[20rem]">
              {" "}
              <video
                className=" w-full h-full object-contain object-left"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
              >
                <source src={bgvideo} type="video/mp4 " />
              </video>
            </div>
          )}
          <div className="relative flex justify-center h-full ">
            {!open ? (
              <div
                className={`absolute md:bottom-0 bottom-[30%] lg:bottom-[2rem] xl:bottom-[8rem] 2xl:bottom-[2rem] text-4xl text-white cursor-pointer ${
                  open && isLoading ? "invisible" : "visible"
                }`}
              >
                <BiVolumeMute
                  onClick={() => {
                    setOpen(!open);
                    fetchData();
                  }}
                />{" "}
              </div>
            ) : (
              <div
                className={`absolute md:bottom-0 bottom-[30%] lg:bottom-[2rem] xl:bottom-[8rem] 2xl:bottom-[2rem] text-4xl text-white cursor-pointer ${
                  isLoading || !open ? "invisible" : "visible"
                }`}
              >
                <BiXCircle
                  onClick={() => {
                    setOpen(!open);
                    fetchData();
                  }}
                />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoComp;
