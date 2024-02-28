import _ from "lodash";
import { useMemo } from "react";
import { IPost } from "../components/data/Interface";

export const useSortedPosts = (posts: any, sort: any) => {
  const sortedPosts: any = useMemo(() => {
    if (sort) {
      return [...posts].sort((a: string, b: string) =>
        a[sort].localeCompare(b[sort])
      );
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts: IPost[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchPosts = useMemo(() => {
    return _.filter(sortedPosts, (post) =>
      post.title.toLowerCase().includes(query, sortedPosts)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchPosts;
};
