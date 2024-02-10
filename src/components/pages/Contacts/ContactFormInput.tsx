import { motion } from "framer-motion";
import _ from "lodash";
import { FieldErrors, UseFormRegister, UseFormTrigger } from "react-hook-form";
import type { formValues } from "./ContactForm";

function ContactsFormInput({
  trigger,
  watch,
  errors,
  register,
}: {
  watch: any;
  trigger: UseFormTrigger<formValues>;
  errors: FieldErrors<formValues>;
  register: UseFormRegister<formValues>;
}) {
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
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white flex flex-col lg:w-full  w-[22rem] md:w-[43rem]  md:pt-[4rem] overflow-hidden  "
        action="./phpCont/mail.php"
        method="POST"
      >
        <motion.div className="h-[5rem]" custom={1} variants={iconAnimation}>
          <label className="flex flex-col text-left" htmlFor="">
            {" "}
            Имя:
            <input
              className=" bg-transparent  border-b-2"
              type="text"
              {...register("firstName", {
                onChange: _.debounce((e) => e.target.value, 200),
                required: "Укажите Ваше имя!",
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
        <motion.div className="h-[5rem]" custom={2} variants={iconAnimation}>
          <label className="flex flex-col text-left" htmlFor="">
            {" "}
            Фамилия:
            <input
              className=" bg-transparent  border-b-2"
              type="text"
              {...register("secondName", {
                required: "Укажите Вашу Фамилию!",

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
        <motion.div className="h-[5rem]" custom={3} variants={iconAnimation}>
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
        <motion.div className="h-[5rem]" custom={4} variants={iconAnimation}>
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
      </motion.form>
    </>
  );
}

export default ContactsFormInput;
