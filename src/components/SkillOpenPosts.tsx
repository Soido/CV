import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

function SkillOpenPosts() {
  return (
    <>
      <div>
        <div className="absolute flex flex-row   h-[20rem] p-[1rem] text-white mt-[5rem] w-[80%] text-left">
          <div className="cursor-pointer flex justify-start items-center  text-4xl w-[20%]">
            {" "}
            <BiChevronLeft />
          </div>
          <div className=" w-full "> тут я расскжу о нод ждс</div>
          <div className=" cursor-pointer flex justify-end text-4xl w-[20%] items-center">
            <BiChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillOpenPosts;
