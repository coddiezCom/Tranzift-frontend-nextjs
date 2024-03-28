import React from "react";
// Styles
import styles from "../../styles/refund_policy.module.scss";
import footerLinkStyles from "../../styles/footerLinks.module.scss";
// MDX Utility
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// Components
import { BestGiftingOption, MoreAboutUs } from "../aboutUs";
import { BannerWithoutSwiper } from "../../components/Banner";
// Layout
import FooterLinkLayout from "../../layout/FooterLinkLayout";
const index = ({ mdxSource }) => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["Refund Policy"],
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
        `This Refund Policy ("Policy") governs refund requests for recharges, bill payments, and gift cards made through the Tranzift.com website, operated by Aashiya Technologies Private Limited ("we," "us," or "our"). By using our services, you agree to comply with and be bound by this Policy. If you do not agree with this Policy, please do not use our services.`,
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
    <div className={`${styles.__container} ${footerLinkStyles.__container} w-4/5 m-auto`}>
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
  const filePath = path.join("./mdxData/ourPolicy", "refundPolicy" + ".mdx");
  // const filePath = path.join("./mdxData/ourPolicy", "cancellationPolicy" + ".mdx");

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
