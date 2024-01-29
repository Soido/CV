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

  return (
    <>
      <div className="flex w-full flex-row justify-center px-[5rem]  gap-8">
        <div className="flex flex-col w-[50rem] h-[40rem] items-start mt-[2rem] pt-[1rem] justify-start text-white ">
          <form
            className="text-white flex flex-col w-full"
            action=""
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
              <div className="h-[1.5rem] text-left text-[.8rem] text-yellow-300">
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
              <div className="h-[1.5rem] text-left text-[.8rem] text-yellow-300">
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
              <div className="h-[1.5rem] text-left text-[.8rem] text-yellow-300">
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
                  className=" bg-transparent"
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
              <div className="h-[1.5rem] text-left text-[.8rem] text-yellow-300">
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
                className="block mt-[.8rem] bg-transparent h-[13rem] rounded-lg p-[1rem] w-full border-2"
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
            <div className="h-[1rem] -mt-[1rem] text-left text-[.8rem] text-yellow-300">
              {errors?.message?.message || <p>{""}</p>}
            </div>
          </form>
        </div>
        <motion.div
          className="flex flex-col w-full  pt-[1rem] mt-[2rem]  max-w-[45rem]"
          initial="hidden"
          whileInView="visible"
          custom={6}
          variants={iconAnimation}
        >
          <div className="text-white w-full flex flex-col">
            <div className="h-full w-full">
              <div className="w-full text-left">
                <h1>Проверьте Ваше сообщение перед отправкой:</h1>
              </div>
              <div className="w-full text-left p-[2rem]">
                <div className="mt-[1rem]">
                  <p>Добрый день!</p>
                  {watchFields ? (
                    <>
                      {" "}
                      <p className="mt-[1rem] pr-[1rem]">
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
                  <div className="h-[10rem] mt-[1rem]  ">
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
          <div className="flex justify-end">
            <button
              className="text-white"
              onClick={handleSubmit((d: formValues) => {
                reset();
                alert("Ваше сообщение успешно отправлено!");
              })}
            >
              Отправить
            </button>
          </div>
          <ContactsSocialMedia />
        </motion.div>
      </div>
    </>
  );
}

export default ContactsForm;
