import { useEffect, useState } from "react";
import _ from "lodash";
import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PostList from "./PostListElements/PostList/PostList";
import PostForm from "./PostListElements/PostForm/PostForm";
import PostFiler from "./PostListElements/PostFilter/PostFiler";
import MyModal from "../../../../../UX/UI/MyModal";
import { usePosts } from "../../../../../hooks/usePosts";
import PostService from "../../../../../API/PostSrvice";
import { useFetching } from "../../../../../hooks/useFetching";
import { getPagesCount } from "../../../../../utils/pages";
import Pagination from "../../../../../UX/UI/Pagination";
import { IPost } from "../../../../data/Interface";

function PostListProject() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts: IPost[] = usePosts(
    posts,
    filter.sort,
    filter.query
  );
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);
  const modalPostError: () => void | any = () => {
    if (postError) {
      toast("Сервис временно не доступен!");
    }
  };

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post: IPost) => {
    setPosts(_.filter(posts, (p) => p.id !== post.id));
  };

  const chngPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <main
        className={`w-screen lg:h-screen ${
          isPostLoading ? "h-full" : "h-screen"
        }`}
      >
        <motion.div className="  w-full h-full xl:h-screen pt-[7rem] lg:pt-[10rem]  bg-black/90 mx-auto text-white  ">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="w-full text-left px-[1.5rem] lg:px-[2rem] 2xl:px-[5rem] font-thin tracking-widest text-[1.2rem] xl:text-[1.5rem] leading-relaxed 2xl:ml-[2rem] mb-[2rem]  lg:mb-[4rem]"
          >
            {" "}
            Проект по созданию постов
          </motion.h2>
          <div className=" flex lg:flex-row w-full flex-col gap-6 px-[1.5rem] lg:px-[2rem] 2xl:ml-[5rem]">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="lg:w-[80%] w-full h-full "
            >
              {" "}
              <div className="w-full flex justify-start  ">
                <button
                  className="border-b-2 border-transparent hover:border-white"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Создать Пост
                </button>
              </div>
              <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
              </MyModal>
              <PostFiler filter={filter} setFilter={setFilter} />
            </motion.div>
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="flex flex-col w-full gap-4 h-full  2xl:pr-[10rem] "
            >
              {postError && modalPostError()}
              {isPostLoading ? (
                <>
                  <div className="flex flex-row items-center w-full justify-center pt-[10rem]">
                    <p className="mr-[1rem]">Загрузка постов </p>{" "}
                    <Oval
                      height={23}
                      width={23}
                      color="white"
                      ariaLabel="loading"
                    />{" "}
                  </div>
                </>
              ) : (
                <>
                  <PostList remove={deletePost} posts={sortedAndSearchPosts} />

                  <Pagination
                    totalPages={totalPages}
                    page={page}
                    chngPage={chngPage}
                  />
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </main>
    </>
  );
}

export default PostListProject;
