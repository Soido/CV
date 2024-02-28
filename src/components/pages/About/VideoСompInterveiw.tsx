import React from "react";

import testvideo from "../../../video/testvideo.mp4";

function VideoCompinterview() {
  return (
    <>
      <video
        className=" w-full  h-full  object-contain "
        autoPlay
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={testvideo} type="video/mp4 " />
      </video>
    </>
  );
}

export default React.memo(VideoCompinterview);
