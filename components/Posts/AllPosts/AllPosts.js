import React from "react";
import PostsGrid from "../PostsGrid/PostsGrid";
import s from "./AllPosts.module.css";

const AllPosts = ({ posts }) => {
  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
