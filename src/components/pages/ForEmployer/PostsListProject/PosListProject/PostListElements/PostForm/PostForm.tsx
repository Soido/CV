import React, { useState } from "react";
import _ from "lodash";
import MyInput from "../../../../../../../UX/UI/MyInput";

const PostForm = ({ create }: any) => {
  const addNewPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: _.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  const [post, setPost] = useState({ title: "", body: "" });

  return (
    <form className="flex flex-col gap-4 justify-start w-[30rem]">
      <MyInput
        value={post.title}
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e: any) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <div className="pl-[1rem] w-full flex justify-start">
        <button
          className="  border-b-2 border-transparent hover:border-white"
          onClick={addNewPost}
        >
          Создать пост
        </button>
      </div>
    </form>
  );
};

export default PostForm;
