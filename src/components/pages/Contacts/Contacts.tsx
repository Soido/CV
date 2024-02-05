import { useNavigate } from "react-router-dom";

import ContactsForm from "./ContactForm";

function Contacts() {
  return (
    <>
      <main className="w-screen h-screen">
        <div
          className=" flex w-full h-screen items-center justify-center
          flex-row bg-black/90 mx-auto gap-4 "
        >
          <div className="flex w-full h-screen  lg:pt-0 items-center justify-center  mb-0 gap-4">
            <ContactsForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contacts;
