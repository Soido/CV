import _ from "lodash";
import { useMemo } from "react";

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

export const usePosts = (posts: any, sort: any, query: any) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchPosts = useMemo(() => {
    return _.filter(sortedPosts, (post: any) =>
      post.title.toLowerCase().includes(query, sortedPosts)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchPosts;
};
