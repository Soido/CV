import { useWindowSize } from "react-use";
import ReduxProjectAndCV from "./ReduxProject/ReduxProjectAndCV";
import PostListProjectAndSkills from "./PostsListProject/PostListProjectAndSkills";

function ForEmployer() {
  const { width, height } = useWindowSize();

  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <div className=" flex w-full h-full lg:h-screen  items-center pt-[6rem] md:pt-[7rem] lg:pt-[2rem] 2xl:pt-[2rem]  bg-black/90 mx-auto text-white ">
          <div className="flex w-full  flex-col 2xl:pl-[6rem] 2xl:pr-[8rem] pl-[.5rem] lg:px-[2rem]  items-center justify-center overflow-hidden mt-0 xl:gap-2 lg:gap-1">
            <PostListProjectAndSkills />
            <ReduxProjectAndCV />
          </div>
        </div>
      </main>
    </>
  );
}

export default ForEmployer;
