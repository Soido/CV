import { useForm } from "react-hook-form";

import ContactsSocialMedia from "./ContactsSocialMedia";
import ContactsFormAnswer from "./ContactAnswer";
import ContactsFormInput from "./ContactFormInput";

import { useState } from "react";

export type formValues = {
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
    trigger,
    formState: { errors },
  } = useForm<formValues>({
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const watchFields = watch();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-full h-full flex-row xl:px-[5rem] lg:mt-[3rem] xl:mt-0 lg:gap-4 xl:gap-8 lg:pt-0 overflow-hidden">
        <div
          className={`flex flex-col w-full h-full md:w-[50rem] lg:w-full p-[1rem] md:pl-[2rem] lg:mr-0 mr-[2.5rem] lg:h-full  lg:translate-x-0 lg:opacity-100 items-center justify-center text-white ${
            open ? "overflow-hidden -translate-x-full opacity-0" : ""
          }  `}
        >
          <ContactsFormInput
            errors={errors}
            register={register}
            trigger={trigger}
          />
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
          className={`flex flex-col justify-center md:h-full h-screen w-[90rem] pt-[5rem] md:w-[200rem] lg:w-full -ml-[5rem] lg:ml-0 lg:mr-[2rem] lg:pt-[1rem] md:pt-0 lg:max-w-[45rem] xl:max-w-none overflow-hidden lg:translate-x-0 ${
            !open ? "translate-x-full" : "-translate-x-12"
          } `}
        >
          <ContactsFormAnswer
            watchFields={watchFields}
            errors={errors}
            firstName={watchFields.firstName}
            secondName={watchFields.secondName}
            email={watchFields.email}
            reason={watchFields.reason}
            message={watchFields.message}
          />
          <div className="flex justify-end " onClick={handleClickAway}>
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
