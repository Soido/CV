import PersonList from "./PersonList";
import AboutList from "./HomeAboutList";
import SkillsList from "./HomeSkillsList";

const Home = () => {
  return (
    <>
      <main className="w-screen h-screen">
        <div className=" flex w-full h-screen items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <PersonList />
            <div className="w-full flex items-center justify-start -ml-[8rem] -mt-[4rem]">
              <div className="max-w-[780px] w-full flex flex-col h-[34rem] p-[2rem] ">
                <div className="flex flex-col w-full">
                  <AboutList />
                  <SkillsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
