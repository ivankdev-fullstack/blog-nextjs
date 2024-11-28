import React from "react";
import AllPosts from "../../components/Posts/AllPosts/AllPosts";

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

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
