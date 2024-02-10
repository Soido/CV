import { motion } from "framer-motion";
import { FieldErrors } from "react-hook-form";
import type { formValues } from "./ContactForm";

const ContactsFormAnswer = ({
  watchFields,
  errors,
}: {
  watchFields: formValues;
  errors: FieldErrors<formValues>;
}) => {
  const iconBlock = {
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white w-full flex flex-col justify-center items-center md:pt-[10rem] lg:pt-0"
      >
        <motion.div custom={1} variants={iconBlock} className="h-full w-full  ">
          <div className="w-full text-left">
            <h1>Проверьте Ваше сообщение перед отправкой:</h1>
          </div>
          <div className="w-full text-left lg:p-[2rem]">
            <div className="pt-[1rem]">
              <p>Добрый день!</p>

              <p className={`pt-[1rem] pr-[1rem] `}>
                Меня интересует:{" "}
                <span
                  className={`${watchFields.reason ? "" : "text-yellow-300"}`}
                >
                  {watchFields.reason
                    ? watchFields.reason
                    : errors?.reason?.message}
                </span>
              </p>

              <div className="h-[10rem] pt-[1rem] overflow-y-scroll ">
                <p className="w-full h-full">
                  {watchFields.message ? (
                    watchFields.message
                  ) : (
                    <span className="text-yellow-300">
                      {" "}
                      {errors?.message?.message}{" "}
                    </span>
                  )}
                </p>
              </div>

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
                <>
                  <p className="text-yellow-300">
                    {" "}
                    {errors?.firstName?.message ||
                      errors?.secondName?.message ||
                      errors?.email?.message}
                  </p>{" "}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactsFormAnswer;
