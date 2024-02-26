function PostItem(props: any) {
  return (
    <>
      <div className="border-2 flex flex-row m-[1rem] ">
        <div className="flex flex-col justify-start items-start  p-[1rem] w-full">
          <div className="w-full flex justify-start text-left">
            <strong>
              <h2>
                {props.post.id}.{props.post.title}
              </h2>
            </strong>
          </div>
          <div className="w-full flex justify-start text-left">
            <p>{props.post.body}</p>
          </div>
        </div>
        <div className=" flex justify-end w-[30%] items-center p-[2rem]">
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
    </>
  );
}
export default PostItem;
