import PersonList from "./PersonList";
import AboutList from "./HomeAboutList";
import SkillsList from "./HomeSkillsList";

const Home = () => {
  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <div className=" flex w-full lg:h-screen h-full items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <PersonList />
            <div className="w-full flex items-center justify-start lg:-ml-[8rem] lg:-mt-[4rem] mt-[3rem]">
              <div className="max-w-[780px] w-full  lg:h-[34rem] h-screen p-[2rem] ">
                <div className="flex flex-col w-full h-full items-center justify-center my-auto">
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
