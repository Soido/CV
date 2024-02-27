import React from "react";
import { JSX } from "react/jsx-runtime";

const MyInput = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <div className=" bg-transparent text-white  ">
      <input
        {...props}
        className=" bg-transparent text-white border-b-2 w-full"
      />
    </div>
  );
};

export default MyInput;
