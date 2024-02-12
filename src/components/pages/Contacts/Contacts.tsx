import ContactsForm from "./ContactForm";

function Contacts() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="flex w-full h-screen  mx-auto pt-[3rem] md:pt-0 items-center justify-center  bg-black/90 mb-0 gap-4">
          <ContactsForm />
        </div>
      </main>
    </>
  );
}

export default Contacts;
