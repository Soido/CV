import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import ContactsSocialMedia from "./ContactsSocialMedia";

import { useState } from "react";

type formValues = {
  firstName: string;
  secondName: string;
  email: string;
  reason: string;
  message: string;
};

function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<formValues>({
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      reason: "",
      message: "",
    },
    mode: "onBlur",
  });

  const watchFields = watch();

  const onSubmit = (data: formValues) => {
    reset();
  };

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

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-full flex-row justify-center items-center lg:px-[5rem]  lg:gap-8 lg:pt-0 overflow-hidden">
        <div
          className={`flex flex-col md:w-[50rem]  pl-[2rem] lg:mr-0 mr-[2.5rem] lg:h-[40rem] items-start lg:mt-[4rem]  lg:translate-x-0  lg:opacity-100   justify-start text-white ${
            open ? "overflow-hidden -translate-x-full opacity-0" : ""
          }  `}
        >
          <form
            className="text-white flex flex-col lg:w-full w-[22rem] md:w-[43rem] lg:pt-0 pt-[4rem] overflow-hidden"
            action="./phpCont/mail.php"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <motion.div
              className="h-[5rem]"
              initial="hidden"
              whileInView="visible"
              custom={1}
              variants={iconAnimation}
            >
              <label className="flex flex-col text-left" htmlFor="">
                {" "}
                Имя:
                <input
                  className=" bg-transparent  border-b-2"
                  type="text"
                  {...register("firstName", {
                    required: "Поле обязательное к заполнению!",
                    pattern: {
                      value: /^[a-zA-ZА-Яа-яЁё]+$/,
                      message: "Имя не может содержать цифры",
                    },
                  })}
                  placeholder="Введите Ваше Имя"
                />
              </label>
              <div className="lg:h-[1.5rem] h-[1rem] text-left text-[.8rem] text-yellow-300">
                {errors?.firstName?.message || <p className="">{""}</p>}
              </div>
            </motion.div>
            <motion.div
              className="h-[5rem]"
              initial="hidden"
              whileInView="visible"
              custom={2}
              variants={iconAnimation}
            >
              <label className="flex flex-col text-left" htmlFor="">
                {" "}
                Фамилия:
                <input
                  className=" bg-transparent  border-b-2"
                  type="text"
                  {...register("secondName", {
                    required: "Поле обязательное к заполнению!",
                    pattern: {
                      value: /^[a-zA-ZА-Яа-яЁё]+$/,
                      message: "Фамилия не может содержать цифры",
                    },
                  })}
                  placeholder="Введите Вашу Фамилию"
                />
              </label>
              <div className="lg:h-[1.5rem] h-[1rem] text-left text-[.8rem] text-yellow-300">
                {errors?.secondName?.message || <p>{""}</p>}
              </div>
            </motion.div>
            <motion.div
              className="h-[5rem]"
              initial="hidden"
              whileInView="visible"
              custom={3}
              variants={iconAnimation}
            >
              <label className="flex flex-col text-left" htmlFor="">
                {" "}
                Электронная почта:
                <input
                  className="bg-transparent  border-b-2"
                  type="text"
                  {...register("email", {
                    required: "Поле обязательное к заполнению!",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Неверный email",
                    },
                  })}
                  placeholder="Введите адрес электронной почты"
                />
              </label>
              <div className="lg:h-[1.5rem] h-[1rem] text-left text-[.8rem] text-yellow-300">
                {errors?.email?.message || <p>{""}</p>}
              </div>
            </motion.div>
            <motion.div
              className="h-5rem"
              initial="hidden"
              whileInView="visible"
              custom={4}
              variants={iconAnimation}
            >
              <label className="flex flex-col text-left" htmlFor="">
                {" "}
                Цель отправки формы:
                <select
                  className=" bg-transparent border-b-2"
                  {...register("reason", { required: "Выберите цель заявки!" })}
                >
                  <option className=" bg-black/90" value="Заказать сайт">
                    Заказать сайт
                  </option>
                  <option className=" bg-black/90" value="Узнать стоимость">
                    Узнать стоимость
                  </option>
                  <option
                    className=" bg-black/90"
                    value="Пригласить в проект/нанять на работу"
                  >
                    Пригласить в проект/нанять на работу
                  </option>
                  <option className=" bg-black/90" value="другое">
                    другое
                  </option>
                </select>
              </label>
              <div className="lg:h-[1.5rem] h-[1rem] text-left text-[.8rem] text-yellow-300">
                {errors?.reason?.message || <p>{""}</p>}
              </div>
            </motion.div>

            <motion.label
              className="flex flex-col text-left h-full items-start justify-start"
              initial="hidden"
              whileInView="visible"
              custom={5}
              variants={iconAnimation}
              htmlFor=""
            >
              {" "}
              Интересующий Вас вопрос:
              <textarea
                className="block pt-[.8rem] bg-transparent lg:h-[13rem] h-[9rem] rounded-lg p-[1rem] w-full border-2"
                {...register("message", {
                  required: "Сообщение не заполнено!",
                  maxLength: {
                    value: 450,
                    message: "Максимальное количество символов не более 450",
                  },
                })}
                placeholder="Ваше сообщение"
              />
            </motion.label>
            <div className="lg:h-[1.5rem] h-[1rem] lg:-mt-[1rem] text-left text-[.8rem] text-yellow-300">
              {errors?.message?.message || <p>{""}</p>}
            </div>
          </form>
          <div
            className="text-white flex w-full justify-end lg:invisible"
            onClick={() => {
              handleClick();
            }}
          >
            <button>Готово</button>
          </div>
        </div>
        <div
          className={`flex flex-col lg:w-full w-[180rem] -ml-[5rem] md:w-[200rem] lg:pt-[1rem] pt-[4rem] lg:max-w-[45rem] overflow-hidden lg:translate-x-0 ${
            !open ? "translate-x-full" : "-translate-x-12"
          } `}
        >
          <div className="text-white w-full flex flex-col">
            <div className="h-full w-full">
              <div className="w-full text-left">
                <h1>Проверьте Ваше сообщение перед отправкой:</h1>
              </div>
              <div className="w-full text-left lg:p-[2rem]">
                <div className="pt-[1rem]">
                  <p>Добрый день!</p>
                  {watchFields ? (
                    <>
                      {" "}
                      <p className="pt-[1rem] pr-[1rem] ">
                        {" "}
                        Меня интересует: {watchFields.reason}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-yellow-300">
                        {errors?.reason?.message || <p>{""}</p>}
                      </p>
                    </>
                  )}
                  <div className="h-[10rem] pt-[1rem] overflow-y-scroll ">
                    {watchFields.message ? (
                      <>
                        <p className=" w-full h-full ">{watchFields.message}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-yellow-300">
                          {errors?.message?.message || <p>{""}</p>}
                        </p>
                      </>
                    )}
                  </div>
                  <p className="mt-[2rem]"> С уважением!</p>

                  {watchFields.firstName &&
                  watchFields.secondName &&
                  watchFields.email ? (
                    <>
                      <p>
                        {watchFields.firstName} {watchFields.secondName}
                      </p>{" "}
                      <p>{watchFields.email}.</p>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end" onClick={handleClickAway}>
            <button
              className="text-white"
              onClick={handleSubmit((d: formValues) => {
                reset();
                alert("Ваше сообщение успешно отправлено!");
                handleClickAway();
              })}
            >
              Отправить
            </button>
          </div>
          <ContactsSocialMedia />
        </div>
      </div>
    </>
  );
}

export default ContactsForm;
