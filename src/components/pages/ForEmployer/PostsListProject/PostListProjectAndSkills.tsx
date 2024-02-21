import { motion } from "framer-motion";

import AboutPostListProject from "./AboutPostListProject";
import AboutSkills from "./AboutSkills";

function PostListProjectAndSkills() {
  return (
    <>
      <div className="w-full h-full text-white  flex lg:flex-row flex-col justify-between gap-1 lg:gap-4">
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <AboutSkills />
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <AboutPostListProject />
        </motion.div>
      </div>
    </>
  );
}

export default PostListProjectAndSkills;
