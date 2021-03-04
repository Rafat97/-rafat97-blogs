import matter from "gray-matter";
import marked from "marked";
// import fs from "fs"
// import path from "path"
import remark from "remark";
import html from "remark-html";

export async function getAllPosts() {
  const context = require.context("../blogs", true, /\.md$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../blogs/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post
        .replace(".md", "")
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "-"),
      path: post.replace(".md", ""),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const context = require.context("../blogs", true, /\.md$/);
  const posts = {};
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../blogs/${post}`);
    const meta = matter(content.default);
    const slug_create = post
    .replace(".md", "")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "-")

    posts[slug_create] = {
        path: post.replace(".md", ""),
    }
  }
  
  const path =  posts[slug].path
  const fileContent = await import(`../blogs/${path}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}
