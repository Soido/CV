import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }: any) => {
  if (!posts.length) {
    return <h2>Посты не найдены</h2>;
  }

  return (
    <div className="h-[35rem]  w-full pr-[2rem] overflow-y-auto">
      {posts.map((post: any, index: number) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
