import React, { useEffect, useState } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { getPostBySlug } from "../api/blogs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
const PostPage = ({ post, mdxSource, slug }) => {
  // console.log(post, mdxSource, slug);
  return (
    <>
      <Head>
        <title>{post.title}- Tranzift</title>
      </Head>
      <div className="blogPostBody">
        <div className="blog-card-page">
          <div className="blog-post-heading">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-date">Posted on {post.date}</div>
            <div className="blog-post-author">By {post.author}</div>
          </div>
          <Image width={500} height={500} src={post.coverImage} alt={post.coverImageAlt} className="blog-cover-img" />
          <div className="flex-div">
            <div className="blog-post-body">
              <MDXRemote {...mdxSource} />
            </div>
            <div className="PopularBlogList">
              <div className="PopularBlogHeading">
                <h2>Popular Blogs</h2>
                <h3>More Blogs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const post = await getPostBySlug(params.slug, [
      "title",
      "excerpt",
      "date",
      "slug",
      "author",
      "content",
      "coverImage",
      "coverImageAlt",
      "coverImageHeight",
      "coverImageWidth",
      "draft",
    ]);
    const mdxSource = await serialize(post.content);
    const slug = params.slug;
    return {
      props: { post, mdxSource, slug },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
}

export default PostPage;
