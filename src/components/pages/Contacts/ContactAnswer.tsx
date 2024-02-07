import { useForm } from "react-hook-form";
import formValues from "./ContactForm";

const ContactsFormAnswer = ({
  watchFields,
  errors,
  firstName,
  secondName,
  email,
  reason,
  message,
}: {
  watchFields: { [key: string]: unknown };
  errors: FieldErrors<formValues>;
  firstName: string;
  secondName: string;
  email: string;

  reason: string;
  message: string;
}) => {
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
      <div className="text-white w-full flex flex-col justify-center items-center md:pt-[10rem] lg:pt-0">
        <div className="h-full w-full  ">
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
    </>
  );
};

export default ContactsFormAnswer;
