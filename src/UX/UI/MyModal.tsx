import React, { Children } from "react";
import { motion } from "framer-motion";

const MyModal = ({
  children,
  visible,
  setVisible,
}: {
  children: string | string[] | number | React.ReactElement;
  visible: boolean;
  setVisible: (args: boolean) => void;
}) => {
  return (
    <motion.div
      className={`z-[9999] fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md  ${
        visible ? "flex" : "hidden"
      } justify-center items-center `}
      onClick={() => setVisible(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:p-[2rem] p-[1rem] rounded-lg border-2 bg-black/80 md:min-w-[20rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MyModal;
