import { motion } from "framer-motion";

import AboutReduxProject from "./AboutReduxProject";
import AboutCV from "./AboutCV";
function ReduxProjectAndCV() {
  return (
    <>
      <div className="w-full h-full text-white  flex lg:flex-row flex-col justify-between lg:gap-4 gap-1">
        <motion.div
          initial={{ x: -150, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutReduxProject />
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, ease: "easeOut", duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <AboutCV />
        </motion.div>
      </div>
    </>
  );
}

export default ReduxProjectAndCV;
