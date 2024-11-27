import React from "react";
import PostsGrid from "../../Posts/PostsGrid/PostsGrid";
import s from "./FeaturedPosts.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
