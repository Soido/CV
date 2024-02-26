import React, { Children } from "react";

const MyModal = ({ children, visible, setVisible }: any) => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 bg-white/10  ${
        visible ? "flex" : "hidden"
      } justify-center items-center `}
      onClick={() => setVisible(false)}
    >
      <div
        className="p-[2rem] rounded-lg border-2 bg-black/80 min-w-[20rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
