import React from "react";
import _ from "lodash";
import { Scrollbars } from "react-custom-scrollbars-2";
import PostItem from "./PostItem";

const PostList = ({
  posts,
  remove,
}: {
  posts: any[];
  remove: (args: any) => void;
}) => {
  if (!posts.length) {
    return <h2>Посты не найдены</h2>;
  }

  return (
    <div className="h-[34rem]  w-full 2xl:pr-[2rem]  overflow-y-auto">
      <Scrollbars
        style={{
          width: "100%",
          height: "100%",
          color: "#ffffff",
        }}
      >
        {_.map(posts, (post: any, index: number) => (
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        ))}
      </Scrollbars>
    </div>
  );
};

export default PostList;
