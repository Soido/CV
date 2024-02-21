import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }: any) => {
  return (
    <div>
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
