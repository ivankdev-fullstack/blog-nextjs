import Head from "next/head";
import React from "react";
import PostDetail from "../../components/Posts/PostDetail/PostDetail.js";
import { getPost, getPostsFiles } from "../../lib/posts.js";

const PostDetailsPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostDetail post={post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;

  const postData = getPost(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
