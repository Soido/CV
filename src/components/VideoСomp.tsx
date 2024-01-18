import avatar from "../img/avatar.jpeg";
import bgvideo from "../video/bgvideo.mp4";

function VideoComp() {
  return (
    <>
      <div className="max-w-[860px] flex flex-col w-full h-[34rem] p-[2rem] ">
        <div className="flex w-full h-full">
          <video
            className=" w-full h-full object-cover object-left"
            autoPlay
            loop
            muted
          >
            <source src={bgvideo} type="video/mp4 " />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoComp;
