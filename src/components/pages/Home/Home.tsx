import PersonList from "./PersonList";
import HomeAboutList from "./HomeAboutList";
import HomeSkillsList from "./HomeSkillsList";

const Home = () => {
  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <div className=" flex w-full lg:h-screen h-full items-center  bg-black/90">
          <div className="flex flex-col lg:flex-row h-full w-full lg:gap-2 xl:gap-0">
            <PersonList />

            <div className="w-full flex items-center justify-start lg:mr-[5rem] xl:-ml-[8rem] lg:-mt-[4rem] mt-[3rem]">
              <div className="2xl:max-w-[780px] w-full lg:h-[34rem] h-screen p-[2rem] lg:p-0 xl:p-[2rem]">
                <div className="flex flex-col w-full h-full items-center justify-center my-auto ">
                  <HomeAboutList />
                  <HomeSkillsList />
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
