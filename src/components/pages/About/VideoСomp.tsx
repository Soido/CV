import { useState } from "react";

import { BallTriangle } from "react-loader-spinner";

import { BiVolumeMute } from "react-icons/bi";

import bgvideo from "../../../video/bgvideo.mp4";
import testvideo from "../../../video/testvideo.mp4";

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
      <div className="relative max-w-[860px] flex flex-col w-full h-[34rem] p-[2rem] ">
        {open ? (
          <div className="absolute flex w-full h-full">
            {isLoading ? (
              <div className=" flex justify-center items-center w-full -mt-[5rem]">
                <BallTriangle
                  height={200}
                  width={200}
                  color="white"
                  ariaLabel="loading"
                />
              </div>
            ) : (
              <video
                className=" w-full h-full object-cover object-left"
                autoPlay
                loop
                muted
              >
                <source src={testvideo} type="video/mp4 " />
              </video>
            )}
          </div>
        ) : (
          <div className=" absolute flex h-full w-full">
            {" "}
            <video
              className=" w-full h-full object-cover object-left"
              autoPlay
              loop
              muted
            >
              <source src={bgvideo} type="video/mp4 " />
            </video>
          </div>
        )}

        <div className="relative flex justify-center h-full ">
          <div
            className={`absolute bottom-0  text-4xl text-white cursor-pointer ${
              open ? "invisible" : "visible"
            }`}
          >
            <BiVolumeMute
              onClick={() => {
                setOpen(!open);
                fetchData();
              }}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoComp;
