import { RiArrowRightSLine } from "react-icons/ri";

function Button() {
  return (
    <div className="flex items-center animate-pulse animate-infinite animate-duration-[3000ms] animate-delay-[2000ms] animate-ease-in">
      <button> Подробнее </button>
      <div className="pl-[0.8rem]">
        <RiArrowRightSLine />
      </div>
    </div>
  );
}

export default Button;
