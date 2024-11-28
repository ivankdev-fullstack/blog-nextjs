import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "data/posts");

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => getPost(postFile));

  return allPosts.sort((postA, postN) => (postA.date > postN.date ? -1 : 1));
};

const getPost = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // without file extension
  const postData = { slug: postSlug, ...data, content };

  return postData;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
