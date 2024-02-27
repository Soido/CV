function PostItem(props: any) {
  return (
    <>
      <div className="border-b-2 flex lg:flex-row flex-col  mr-[1rem] lg:m-[1rem] ">
        <div className="flex flex-col justify-start items-start  p-[1rem] w-full">
          <div className="w-full flex justify-start text-left">
            <strong>
              <h2>
                {props.post.id}. {props.post.title}
              </h2>
            </strong>
          </div>
          <div className="w-full flex justify-start text-left">
            <p>{props.post.body}</p>
          </div>
        </div>
        <div className=" flex justify-end lg:w-[30%] w-full items-center p-[2rem]">
          <div className="flex flex-row gap-2">
            <button
              className="text-red-600 border-2  border-red-600 py-1 px-2 rounded-md cursor-pointer "
              onClick={() => {
                props.remove(props.post);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostItem;
