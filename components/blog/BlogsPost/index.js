import React from "react";
import Link from "next/link";
import style from "./styles.module.scss";
import Image from "next/image";
import matter from "gray-matter";

const index = ({ post, key }) => {
  return (
    <div className={style.blog} key={key}>
      <div className={style.blogImg}>
        <Link href={`/blogs/${post?.slug}`}>
          <Image width={500} height={500} src={post.coverImage} alt="" />
        </Link>
      </div>
      <div className={style.blogSubHeading}>
        <div>
          <div className={style.blogTitle}>
            <Link href={`${post.slug}`}>
              <h2>{post.title.substr(0, 30)}...</h2>
            </Link>
          </div>
          <div className={style.blogDate}>
            <div>{post.date}</div>
          </div>
        </div>
      </div>
      <div>
        <h4> {post.excerpt.substr(0, 150)}....</h4>
      </div>
    </div>
  );
};

export default index;
