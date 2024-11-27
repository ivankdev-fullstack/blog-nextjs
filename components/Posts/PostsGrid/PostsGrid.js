import React from "react";
import PostItem from "../PostItem/PostItem";
import s from "./PostsGrid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={s.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
