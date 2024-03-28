import React from "react";
import fs from "fs";
import path from "path";
// Style
import styles from "../../styles/term_of_use.module.scss";
import footerLinkStyles from "../../styles/footerLinks.module.scss";

// MDX Utility
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
        words: ["Welcome to Tranzift"],
        loop: true,
        cursorStyle: "!",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      heading: "What is an e-gift card?",
      paragraph: [
        {
          p: "These terms and conditions outline the rules and regulations for the use of Tranzift's Website, located at ",
          link: {
            href: "/",
            content: "https://tranzift.com/.",
          },
        },
        'These Terms and Conditions ("Terms") govern your use of the Tranzift.com website, operated by Aashiya Technologies Private Limited ("we," "us," or "our"). By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please refrain from using our services.',
      ],
    },
    bannerImage: {
      url: "/images/banner/termAndCondition.png",
      alt: "termAndCondition",
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
  const filePath = path.join("./mdxData/ourPolicy", "termOfUse" + ".mdx");

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
