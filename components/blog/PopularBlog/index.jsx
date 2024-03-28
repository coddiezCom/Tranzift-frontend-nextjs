import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Image from "next/image";
const Index = ({ data, key, title }) => {
  const router = useRouter();
  return (
    <div key={key} className={"PopularBlogMain " + (data?.frontmatter?.title === title ? "blogPostDisplayNone" : "")}>
      <div className="PopularPostImg">
        <Link href={`${data.slug}`}>
          <Image
            width={500}
            height={500}
            src={data?.frontmatter?.cover_image}
            alt="Tranzift"
            className="PopularPostImg1"
          />
        </Link>
      </div>
      <div className="PopularBlogContent">
        <div className="PopularBlogTitle">
          <Link href={`${data.slug}`}>{data?.frontmatter?.title?.substr(0, 18)}...</Link>
        </div>
        <div className="PopularBlogDescription">{data?.frontmatter?.excerpt?.substr(0, 70)}...</div>
      </div>
    </div>
  );
};

export default Index;
