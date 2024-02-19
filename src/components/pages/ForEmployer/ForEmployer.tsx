import { useWindowSize } from "react-use";
import ReduxProjectAndCV from "./ReduxProject/ReduxProjectAndCV";
import PostListProject from "./PostsListProject/PostListProject";

function ForEmployer() {
  const { width, height } = useWindowSize();

  return (
    <>
      <main className="w-screen xl:h-screen">
        <div className=" flex w-full h-full xl:h-screen  items-center pt-[2rem]  bg-black/90 mx-auto text-white ">
          <div className="flex w-full  flex-col 2xl:px-[8rem] pl-[.5rem] lg:px-[2rem]  items-center justify-center overflow-hidden mt-0 xl:gap-2 lg:gap-1">
            <PostListProject />
            <ReduxProjectAndCV />
          </div>
        </div>
      </main>
    </>
  );
}

export default ForEmployer;
