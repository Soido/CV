import { motion } from "framer-motion";

import { LiaTelegramPlane, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";

function ContactsSocialMedia() {
  const iconAnimation = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <>
      <div className="  xl:mt-[7rem] mt-[4rem] items-center justify-center text-white  gap-4 pb-[1rem] ">
        <div className="flex flex-row justify-end w-full text-right items-end gap-1 text-2xl ">
          <div className="w-full"></div>
          <motion.div
            className="flex flex-row md:w-[40%] w-full justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className=" cursor-pointer"
              custom={7}
              variants={iconAnimation}
            >
              <a href="https://vk.com/soidu_soshel">
                {" "}
                <SlSocialVkontakte className="cursor-pointer " />
              </a>
            </motion.div>
            <motion.div
              className=" cursor-pointer"
              custom={8}
              variants={iconAnimation}
            >
              <a href="https://www.instagram.com/artyom_surzhko">
                <LiaInstagram className="cursor-pointer " />
              </a>
            </motion.div>
            <motion.div
              className=" cursor-pointer"
              custom={9}
              variants={iconAnimation}
            >
              <a href="https://t.me/mr_Artyom_S">
                <LiaTelegramPlane className="cursor-pointer " />{" "}
              </a>
            </motion.div>
            <motion.div
              className=" cursor-pointer"
              custom={10}
              variants={iconAnimation}
            >
              <LiaLinkedinIn className="cursor-pointer " />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ContactsSocialMedia;
