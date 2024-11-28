import React from "react";
import FeaturedPosts from "../components/Homepage/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Homepage/Hero/Hero";
import { getFeaturedPosts } from "../lib/posts";

const Homepage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
};

export default Homepage;
