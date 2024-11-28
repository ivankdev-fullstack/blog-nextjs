import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./PostItem.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <Image
          src={imagePath}
          className={s.image}
          alt={title}
          width={300}
          height={200}
          layout="responsive"
        />
      </Link>
      <div className={s.content}>
        <h3>{title}</h3>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </div>
    </li>
  );
};

export default PostItem;
