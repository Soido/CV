import React, { useState } from "react";

const PostForm = ({ create }: any) => {
  const addNewPost = (e: any) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  const [post, setPost] = useState({ title: "", body: "" });

  return (
    <form className="flex flex-col gap-4 m-[1rem] justify-start" action="">
      <input
        className=" bg-transparent text-white border-b-2 w-full"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название"
      />
      <input
        className=" bg-transparent text-white border-b-2 w-full"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      <button className="w-full text-left" onClick={addNewPost}>
        Создать пост
      </button>
    </form>
  );
};

export default PostForm;
