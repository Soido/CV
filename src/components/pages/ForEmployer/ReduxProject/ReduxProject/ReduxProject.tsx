import { motion } from "framer-motion";

import FilmForm from "./FilmForm/FilmForm";
import FilmList from "./FilmList/FilmList";
import Filter from "./Filter/Filter";
import Error from "./Error/Error";

function ReduxProject() {
  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <motion.div className="  w-full h-full xl:h-screen pt-[7rem] lg:pt-[10rem]  bg-black/90 mx-auto text-white  ">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="w-full text-left px-[1.5rem] lg:px-[2rem] xl:px-[5rem] font-thin tracking-widest text-[1.2rem] xl:text-[1.5rem] leading-relaxed xl:ml-[2rem] mb-[2rem]  lg:mb-[4rem]"
          >
            {" "}
            Проект по подбору случайных фильмов с использоанием Redux
          </motion.h2>
          <div className=" flex lg:flex-row flex-col gap-6 px-[1.5rem] lg:px-[2rem] xl:mx-[5rem]">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="lg:w-[80%] w-full h-full "
            >
              <FilmForm />
            </motion.div>
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="flex flex-col w-full gap-4  h-full"
            >
              <Filter />
              <FilmList />
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Error />
    </>
  );
}

export default ReduxProject;
