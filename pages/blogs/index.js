import React from "react";
import style from "../../styles/blogs.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import matter from "gray-matter";
// import BlogPost from "../../components/blogPost/BlogPost";
import BlogsPost from "../../components/blog/BlogsPost";
// import config from "../blog.config";
import config from "../../blog.config";
import { getAllPosts } from "../api/blogs";
const Index = ({ posts, prevPosts, nextPosts }) => {
  // console.log(posts, prevPosts, nextPosts);
  const router = useRouter();
  return (
    <div className={style.main}>
      <Head>
        <title>Blog | Coddiez - Best IT Solution</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width" />
        <meta name="Author" content="https://coddiez.com/" />
        <meta name="copyright" content="All Rights Reserved by Coddiez" />
        <meta name="language" content="english" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <div className={style.mainHeading}>
        <Image width={500} height={500} src="/images/blog-images/mainBlogImg.webp" alt="Girl in a jacket" />
      </div>
      <div className={style.blogItem}>
        {posts.map((post, index) => (
          <BlogsPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
  ]);

  const startIndex = 0;
  const endIndex = config.postsPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
}
export default Index;
