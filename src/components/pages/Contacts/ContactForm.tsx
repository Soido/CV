import { useForm, SubmitHandler } from "react-hook-form";

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
    formState: { errors, isValid },
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
    console.log(data);
    reset();
  };

  console.log("watchFields", watchFields);

  return (
    <>
      <div className="flex w-full flex-row  px-[10rem] items-center gap-4">
        <div className="flex w-[40rem] h-[40rem] items-start mt-[2rem] pt-[1rem] justify-start ">
          <form
            className="text-white flex flex-col w-full"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col text-left" htmlFor="">
              {" "}
              Имя:
              <input
                className="mt-[.8rem] bg-transparent  border-b-2"
                type="text"
                {...register("firstName", {
                  required: "Поле обязательное к заполнению!",
                  minLength: {
                    value: 5,
                    message: "минимум 5 символов",
                  },
                })}
                placeholder="Введите Ваше Имя"
              />
            </label>
            <div className="h-[1.5rem] text-left text-[.8rem] text-yellow-300">
              {errors?.firstName?.message || <p className="">{""}</p>}
            </div>
            <label className="flex flex-col text-left" htmlFor="">
              {" "}
              Фамилия:
              <input
                className="mt-[.8rem] bg-transparent  border-b-2"
                type="text"
                {...register("secondName", {
                  required: "Поле обязательное к заполнению!",
                  minLength: {
                    value: 5,
                    message: "миниму 5 символов",
                  },
                })}
                placeholder="Введите Вашу Фамилию"
              />
            </label>
            <div className="h-[1.5rem] text-left text-[.8rem]">
              {errors?.secondName?.message || <p>{""}</p>}
            </div>
            <label className="flex flex-col text-left" htmlFor="">
              {" "}
              Электронная почта:
              <input
                className="mt-[.8rem] bg-transparent  border-b-2"
                type="text"
                {...register("email", {
                  required: "Поле обязательное к заполнению!",
                  minLength: {
                    value: 5,
                    message: "миниму 5 символов",
                  },
                })}
                placeholder="Введите адре электронной почты"
              />
            </label>
            <div className="h-[1.5rem] text-left text-[.8rem]">
              {errors?.email?.message || <p>{""}</p>}
            </div>

            <label className="flex flex-col text-left" htmlFor="">
              {" "}
              Цель отправки формы:
              <input
                className="mt-[.8rem] bg-transparent  border-b-2"
                type="text"
                {...register("reason", {
                  required: "Поле обязательное к заполнению!",
                  minLength: {
                    value: 5,
                    message: "миниму 5 символов",
                  },
                })}
                placeholder="Опишите Вашу цель"
              />
            </label>
            <div className="h-[1.5rem] text-left text-[.8rem]">
              {errors?.reason?.message || <p>{""}</p>}
            </div>
            <label
              className="flex flex-col text-left h-full items-start justify-start"
              htmlFor=""
            >
              {" "}
              Ваше сообщение:
              <input
                className="block mt-[.8rem] bg-transparent h-[10rem] w-full border-2"
                type="text"
                {...register("message", {
                  required: "Поле обязательное к заполнению!",
                  maxLength: {
                    value: 250,
                    message: "миниму 5 символов",
                  },
                })}
                placeholder="Ваше сообщение"
              />
            </label>
            <div className="h-[3rem] text-left text-[.8rem]">
              {errors?.message?.message || <p>{""}</p>}
            </div>
            <div className="flex justify-end -mt-[2rem]">
              <input className=" cursor-pointer  " type="submit" />
            </div>
          </form>
        </div>
        <div className="text-white border-2 flex flex-col">
          <div className=" h-[40rem]">
            <div className="w-full ">
              <h1>Проверьте Ваше сообщение:</h1>
            </div>
            <div className="w-full text-left mt-[2rem]">
              <p>Добрый день!</p>
              <div className="mt-[1rem]">
                <p> Меня интересует:</p>
                {watchFields.reason ? (
                  <>
                    {" "}
                    <p> {watchFields.reason} </p>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
              {watchFields.message ? (
                <>
                  <p className="mt-[1rem] w-full">{watchFields.message}</p>
                </>
              ) : (
                ""
              )}
              <p className="mt-[2rem]"> С уважением!</p>
              {watchFields.firstName &&
              watchFields.secondName &&
              watchFields.email ? (
                <>
                  <p>
                    {watchFields.firstName} {watchFields.secondName}
                  </p>{" "}
                  <p>{watchFields.email}</p>{" "}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsForm;
