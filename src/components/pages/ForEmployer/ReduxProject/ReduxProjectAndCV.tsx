import AboutReduxProject from "./AboutReduxProject";
import AboutCV from "./AboutCV";
function ReduxProjectAndCV() {
  return (
    <>
      <div className="w-full h-full text-white  flex xl:flex-row flex-col justify-between gap-4">
        <AboutReduxProject />
        <AboutCV />
      </div>
    </>
  );
}

export default ReduxProjectAndCV;
