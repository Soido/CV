import { RiArrowRightSLine } from "react-icons/ri";

interface ComponentProps {
  children?: React.ReactNode;
}

const MyButton = (props: ComponentProps) => {
  return (
    <button className="flex items-center px-[0.5rem] py-[0.2rem] mx-[0.2rem] border-2 border-white rounded-full h-[2rem] text-white">
      {props.children}
    </button>
  );
};

export default MyButton;
