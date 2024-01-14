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
          <div className=" w-full ">
            {" "}
            Я не явлюясь специалистом по бэк энд, поэтому Node.js я использую
            исключительно для возможности установки npm модулей. Но я постараюсь
            развить свои навыки в разработке для испрользовании Node.js в полном
            объеме его возможностей.
          </div>
          <div className=" cursor-pointer flex justify-end text-4xl w-[20%] items-center">
            <BiChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillOpenPosts;
