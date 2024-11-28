import React from "react";
import AllPosts from "../../components/Posts/AllPosts/AllPosts";
import { getAllPosts } from "../../lib/posts";

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return { props: { posts: allPosts } };
};

export default PostsPage;
