import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import s from "./PostDetail.module.css";

const DUMMY_POST = {
  title: "Getting Started Nextjs1",
  slug: "getting-started-nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostDetail = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={s.content}>
      <header className={s.header}>
        <h1>{DUMMY_POST.title}</h1>
        <Image
          src={imagePath}
          alt={DUMMY_POST.title}
          width={200}
          height={150}
        />
      </header>
      <Markdown>{DUMMY_POST.content}</Markdown>
    </article>
  );
};

export default PostDetail;
