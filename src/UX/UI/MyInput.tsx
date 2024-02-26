import React from "react";

const MyInput = (props: any) => {
  return (
    <div className=" bg-transparent text-white m-[1rem] ">
      <input
        {...props}
        className=" bg-transparent text-white border-b-2 w-full"
      />
    </div>
  );
};

export default MyInput;
