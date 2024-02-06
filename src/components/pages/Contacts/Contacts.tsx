import { useNavigate } from "react-router-dom";

import ContactsForm from "./ContactForm";

function Contacts() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="flex w-full h-screen  mx-auto pt-[4rem] md:pt-0 items-center justify-center pl-[.5rem] bg-black/90 mb-0 gap-4">
          <ContactsForm />
        </div>
      </main>
    </>
  );
}

export default Contacts;
