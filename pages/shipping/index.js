import React from "react";
// Styles
import styles from "../../styles/shipping.module.scss";
// MDX Utility
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// Components
import { BannerWithoutSwiper } from "../../components/Banner";
import { BestGiftingOption, MoreAboutUs } from "../aboutUs";
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
  const bestGiftingOption = {
    title: "Why Gift cards from tranzift.com are the best gifting option for your loved ones",
    card: [
      {
        title: "Wide Range of Choices",
        description:
          "Tranzift.com offers a vast selection of gift cards, allowing your loved ones to choose something they truly desire. Whether it's fashion, electronics, home decor, or even experiences like dining or travel, they have a wide range of options to cater to everyone's preferences.",
        img: {
          url: "/images/icons/offer.png",
          alt: "offer",
        },
      },
      {
        title: "Flexibility",
        description:
          "With tranzift.com gift cards, your recipients have the flexibility to pick exactly what they want. They can browse through the website and select the product or service that appeals to them the most. This ensures that they receive something they genuinely need or desire, avoiding the possibility of receiving an unwanted or unused gift.",
        img: {
          url: "/images/icons/gift.png",
          alt: "gift",
        },
      },
      {
        title: "Convenience",
        description:
          "Purchasing gift cards from tranzift.com is incredibly convenient. You can easily order them online, saving you time and effort. The gift cards can be delivered electronically via email or via sms, depending on your preference. This convenience makes them a great option for both local and long-distance gifting.",
        img: {
          url: "/images/icons/shipping.png",
          alt: "shipping",
        },
      },
      {
        title: "Personalization",
        description:
          "tranzift.com allows you to personalize the gift cards with custom messages or even choose from a variety of attractive designs. This adds a personal touch to your gift and shows that you've put thought into selecting something special for your loved ones.",
        img: {
          url: "/images/icons/Personalization.png",
          alt: "Personalization",
        },
      },
    ],
  };
  const moreAboutUs = [
    {
      heading: "Selecting Recipient",
      content: {
        p: [
          "After you've chosen the perfect e-gift card and completed the purchase, you'll be prompted to provide the recipient's email address. Please double-check for accuracy to ensure smooth delivery.",
        ],
      },
    },
    {
      heading: "Personalize Your Message",
      content: {
        p: [
          "Make the gift extra special by adding a personal message. Your words will be included in the email sent to the recipient.",
        ],
      },
    },
    {
      heading: "Delivery Time",
      content: {
        p: [
          "Most e-gift cards are sent instantly. However, you can also schedule delivery for a specific date and time, making it perfect for special occasions.",
        ],
      },
    },
    {
      heading: "Confirmation Email",
      content: {
        p: [
          "After successful delivery, you'll receive a confirmation email. If you don't see it in your inbox, please check your spam folder.",
        ],
      },
    },
    {
      heading: "Support",
      content: {
        p: [
          "If you encounter any issues with e-gift card delivery, don't hesitate to contact our customer support team. We're here to assist you.",
        ],
      },
    },
    {
      heading: "FAQs",
      content: {
        QuesNdAns: [
          {
            heading: "How do I know if the e-gift card has been delivered?",
            desc: "You'll receive a confirmation email once the e-gift card has been successfully sent to the recipient's email address.",
          },
          {
            heading: "Can I resend the e-gift card if the recipient didn't receive it?",
            desc: "Yes, please contact our support team, and we'll assist you in resolving any delivery issues.",
          },
          {
            heading: "Can I change the delivery date for a scheduled e-gift card?",
            desc: "Yes, you can change the delivery date as long as it hasn't been delivered yet. Contact our support for assistance.",
          },
        ],
      },
    },
    {
      heading: "",
      content: {
        p: [
          "Thank you for choosing Tranzift for your e-gift card needs. We aim to make gifting as easy and delightful as possible.",
        ],
      },
    },
  ];
  return (
    <div className={styles.__container}>
      <div className={styles.__banner}>
        <BannerWithoutSwiper data={data} />
      </div>
      {/* <BestGiftingOption data={bestGiftingOption} /> */}
      {/* <MoreAboutUs data={moreAboutUs} /> */}
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
