import React from "react";
// Styles
import styles from "@/styles/refund_policy.module.scss";
// MDX Utility
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// Components
import { BestGiftingOption, MoreAboutUs } from "../aboutUs";
import { BannerWithoutSwiper } from "@/components/Banner";
// Layout
import FooterLinkLayout from "@/Layout/FooterLinkLayout";
const index = () => {
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
      heading: "Refund Eligibility",
      content: {
        ul: [
          {
            li: {
              heading: "Recharges and Bill Payments:",
              subList: [
                {
                  desc: "Refunds may be requested for recharges and bill payments under the following circumstances.",
                  subList: [
                    {
                      desc: "Payment was processed but the service was not provided",
                    },
                    {
                      desc: "Payment was processed erroneously (e.g., incorrect amount charged).",
                    },
                    {
                      desc: "The service provider confirms a refund is due according to their policies.",
                    },
                  ],
                },
              ],
            },
          },
          {
            li: {
              heading: "Gift Cards:",
              subList: [
                {
                  desc: "Refunds for gift card purchases are generally not provided after the gift card code or PIN has been revealed, or if the gift card has been activated or used.",
                },
                {
                  desc: "Refunds may be considered for gift cards that are damaged or incorrect upon delivery, subject to verification.",
                },
              ],
            },
          },
        ],
      },
    },
    {
      heading: "Refund Request Process",
      content: {
        ul: [
          {
            li: {
              desc: "To request a refund, please contact our customer support team at support@tranzift.com. Provide the relevant transaction details, including the transaction ID or reference number, along with a clear explanation of the refund request.",
            },
          },
          {
            li: {
              desc: "We will review your refund request within a reasonable timeframe and communicate with you regarding the status and any further information required.",
            },
          },
        ],
      },
    },
    {
      heading: "Refund Approval and Processing",
      content: {
        ul: [
          {
            li: {
              desc: "If your refund request is approved:",
              subList: [
                {
                  heading: "Recharges and Bill Payments:",
                  desc: "We will initiate a refund to your original payment method or offer an alternative resolution, as applicable.",
                },
                {
                  heading: "Gift Cards:",
                  desc: "We will process a refund to your original payment method, or issue store credit, as applicable.",
                },
              ],
            },
          },
          {
            li: {
              desc: "The time it takes for a refund to be processed and reflect in your account may vary depending on your payment method and financial institution. We will provide an estimated timeframe when confirming the refund.",
            },
          },
        ],
      },
    },
    {
      heading: "Denied Refund Requests",
      content: {
        ul: [
          {
            li: {
              desc: "We reserve the right to deny refund requests under the following circumstances:",
              subList: [
                {
                  desc: "The request does not meet the eligibility criteria stated in this Policy.",
                },
                {
                  desc: "The refund request is fraudulent or made in bad faith.",
                },
                {
                  desc: "The refund request violates our Terms and Conditions.",
                },
              ],
            },
          },
        ],
      },
    },
    {
      heading: "Contact Information",
      content: {
        p: [
          {
            p: "If you have any questions or concerns about our refund policy or need assistance with a refund request, please contact our customer support team at",
            link: {
              href: "mailto:support@tranzift.com",
              content: "support@tranzift.com",
            },
          },
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
  const filePath = path.join("./mdxData/ourPolicy", "refundPolicy" + ".mdx");

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
