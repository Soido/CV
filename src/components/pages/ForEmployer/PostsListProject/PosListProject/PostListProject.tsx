import { useState } from "react";

import { motion } from "framer-motion";

import Counter from "./Counter/Counter";
import PostList from "./Counter/PostList";
import PostForm from "./Counter/PostForm";

function ReduxProject() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Javascript- papa" },
    { id: 2, title: "JavaScript1", body: "Javascript- papa" },
    { id: 3, title: "JavaScript2", body: "Javascript- papa" },
    { id: 4, title: "JavaScript3", body: "Javascript- papa" },
  ]);

  const createPost = (newPost: any) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <main className="w-screen lg:h-screen h-full">
        <motion.div className="  w-full h-full xl:h-screen pt-[7rem] lg:pt-[10rem]  bg-black/90 mx-auto text-white  ">
          <motion.h2
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="w-full text-left px-[1.5rem] lg:px-[2rem] xl:px-[5rem] font-thin tracking-widest text-[1.2rem] xl:text-[1.5rem] leading-relaxed xl:ml-[2rem] mb-[2rem]  lg:mb-[4rem]"
          >
            {" "}
            Проект по созданию постов
          </motion.h2>
          <div className=" flex lg:flex-row flex-col gap-6 px-[1.5rem] lg:px-[2rem] xl:mx-[5rem]">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="lg:w-[80%] w-full h-full "
            >
              <PostForm create={createPost} />
            </motion.div>
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="flex flex-col w-full gap-4  h-full"
            >
              <PostList remove={deletePost} posts={posts} />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default ReduxProject;
