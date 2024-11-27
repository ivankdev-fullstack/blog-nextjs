import React from "react";
import FeaturedPosts from "../components/Homepage/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Homepage/Hero/Hero";

const DUMMY_POSTS = [
  {
    title: "Getting Started Nextjs1",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestias fuga fugiat soluta suscipit error hic odio nulla ea.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started Nextjs2",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestias fuga fugiat soluta suscipit error hic odio nulla ea.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started Nextjs3",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestias fuga fugiat soluta suscipit error hic odio nulla ea.",
    date: "2022-02-10",
  },
  {
    title: "Getting Started Nextjs4",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestias fuga fugiat soluta suscipit error hic odio nulla ea.",
    date: "2022-02-10",
  },
];

const Homepage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default Homepage;
