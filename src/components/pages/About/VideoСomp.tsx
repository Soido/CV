import { useEffect, useState } from "react";

import { BallTriangle } from "react-loader-spinner";

import { BiChevronRight } from "react-icons/bi";

import bgvideo from "../../../video/bgvideo.mp4";

function VideoComp() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  });

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <>
      <div className="relative max-w-[860px] flex flex-col w-full h-[34rem] p-[2rem] ">
        {open ? (
          <div className="absolute flex w-full h-full">
            {isLoading === true ? (
              <div className=" flex justify-center items-center w-full">
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
                <source src={bgvideo} type="video/mp4 " />
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
          <div className="absolute bottom-0  text-4xl">
            <BiChevronRight onClick={handleClick} />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoComp;
