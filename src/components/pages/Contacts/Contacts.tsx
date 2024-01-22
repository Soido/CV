import { FaTelegram, FaSquareInstagram, FaVk } from "react-icons/fa6";

import avatar from "../../../img/avatar.jpeg";

function Contacts() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="relative flex md:min-h-full h-screen  min-h-full pt-[165px] pr-0 pb-[80px] md:pt-[165px] md:pr-0 md:pb-[80px] items-center overflow-hidden bg-black/90">
          <div className=" absolute top-0 left-0 right-0 w-screen h-screen overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className=" h-[28rem] md:h-[30rem] w-full lg:w-[45%] lg:h-screen">
                <img
                  className="h-full w-full md:object-[center_-135px] object-cover lg:object-center lg:object-cover xl:object-cover md:mt-[4rem] lg:mt-[4rem]"
                  src={avatar}
                />
              </div>
              <div className="flex flex-col items-center justify-center mx-auto px-[15px] md:mt-[0.5rem] lg:mt-0 xl:mt-0 text-white">
                {" "}
                <h1 className="font-thin tracking-widest text-[1rem] lg:text-[1.5rem] mb-[2rem] leading-relaxed">
                  Мои Контакты
                </h1>
                <h2 className="font-thin tracking-widest text-[0.8rem] lg:text-[1.2rem] mb-[2rem] leading-relaxed">
                  Вы может отправить мне письмо или
                  <br />
                  написать в один из моих аккаунтах в соцсетях.
                </h2>
                <div className="flex flex-row w-full text-4xl justify-around mt-[2rem]">
                  <FaVk className="cursor-pointer " />
                  <FaSquareInstagram />
                  <FaTelegram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contacts;
