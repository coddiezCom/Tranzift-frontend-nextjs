import React from "react";
// Styles
import styles from "../../styles/disclaimer.module.scss";
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
import FooterLinkLayout from "@/layout/FooterLinkLayout";

const index = ({ frontMatter, mdxSource }) => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["DISCLAIMER FOR TRANZIFT.COM"],
        loop: true,
        cursorStyle: "!",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      paragraph: [
        'By accessing and using the Tranzift.com website (the "Website"), operated by Aashiya.',
        'Technologies Private Limited ("we," "us," or "our"), you agree to comply with and be bound by the following disclaimer. If you do not agree with this disclaimer, please refrain from using our services.',
      ],
    },
    bannerImage: {
      url: "/images/banner/disclaimer.png",
      alt: "disclaimer",
      reverse: false,
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
  const filePath = path.join("./mdxData/ourPolicy", "disclaimer" + ".mdx");

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
