import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "data/posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPost = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPost(postFile);
  });

  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
