import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import MyModal from "../../../../UX/UI/MyModal";
import DescriptionSkills from "./DescriptionSkills";

function AboutSkills() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full xl:h-[21rem] h-full text-white flex px-[1rem] py-[1rem] lg:py-[2rem] flex-col justify-start items-start gap-4 ">
        <div className="xl:w-[60%] w-full ">
          <h1 className="font-thin tracking-widest text-[1.2rem] leading-relaxed text-left">
            Для потенциального работодателя:
          </h1>

          <div className="text-left mt-[3rem]">
            <p>
              В настоящем разделе представлена реализация практических навыков
              разработки SPA в части frontend на примере двух проектов. Проекты
              разработаны с применением всех необходимых технологий и
              современных инструментов по их реализации.
            </p>
            <div className="w-full h-full flex justify-end items-center mt-[2rem]">
              <p
                className=" cursor-pointer h-full"
                onClick={() => setOpen(!open)}
              >
                Подробнее
              </p>
              <BiChevronRight className="h-full text-xl pt-[.2rem] ml-[.5rem]" />
            </div>
          </div>
        </div>
        {open ? (
          <MyModal visible={open} setVisible={setOpen}>
            <DescriptionSkills />
          </MyModal>
        ) : null}
      </div>
    </>
  );
}

export default AboutSkills;
