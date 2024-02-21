import AboutPostListProject from "./AboutPostListProject";
function PostListProject() {
  return (
    <>
      <div className="w-full h-full text-white  flex xl:flex-row flex-col justify-between ">
        <div className="h-full w-full">
          В настоящем разделе представлена практическая реализация основных
          навыков фронтэнд разработчика{" "}
        </div>
        <AboutPostListProject />
      </div>
    </>
  );
}

export default PostListProject;
