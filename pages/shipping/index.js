import React from "react";
// Styles
import styles from "../../styles/shipping.module.scss";
import footerLinkStyles from "../../styles/footerLinks.module.scss";
// MDX Utility
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// Components
import { BannerWithoutSwiper } from "../../components/Banner";
// Layout
import FooterLinkLayout from "../../Layout/FooterLinkLayout";
const index = ({ frontMatter, mdxSource }) => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["Shipping"],
        loop: true,
        cursorStyle: "|",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      paragraph: [
        "At Tranzift, we make it easy for you to send e-gift cards to your loved ones. Our delivery process is quick and hassle-free.",
      ],
    },
    bannerImage: {
      url: "/images/banner/Shipping.png",
      alt: "AboutBannerImg",
    },
    button: {
      content: "Contact Us",
      link: "/",
    },
  };
  return (
    <div className={`${styles.__container} ${footerLinkStyles.__container}`}>
      <div className={styles.__banner}>
        <BannerWithoutSwiper data={data} />
      </div>
      <FooterLinkLayout>
        <MDXRemote {...mdxSource} />
      </FooterLinkLayout>
    </div>
  );
};
export async function getServerSideProps() {
  const filePath = path.join("./mdxData/ourPolicy", "shipping" + ".mdx");

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");

  const { data: frontMatter, content } = await matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter: frontMatter,
      mdxSource: mdxSource,
    },
  };
}
export default index;
