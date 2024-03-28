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
import { MoreAboutUs } from "../aboutUs";
// Layout
import FooterLinkLayout from "../../Layout/FooterLinkLayout";

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
      heading: "No Warranty",
      content: {
        ul: [
          {
            li: {
              desc: 'The information, content, services, and materials on the Website are provided "as-is" and "as-available" without any warranties, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
            },
          },
          {
            li: {
              desc: "We do not guarantee the accuracy, completeness, timeliness, or reliability of any information, content, or services on the Website. You acknowledge that any reliance on such information or services is at your own risk.",
            },
          },
        ],
      },
    },
    {
      heading: "Services and Products",
      content: {
        ul: [
          {
            li: {
              desc: "The services offered on the Website, including recharges, bill payments, and gift card purchases, are subject to availability and may vary based on your location and our partnerships with service providers and gift card issuers.",
            },
          },
          {
            li: {
              desc: "We do not endorse or guarantee the availability, quality, or suitability of the services or products offered by third-party service providers or gift card issuers, and we are not responsible for any transactions or issues that may arise from their services or products.",
            },
          },
        ],
      },
    },
    {
      heading: "Security and Privacy",
      content: {
        ul: [
          {
            li: {
              desc: "We employ reasonable security measures to protect user information and transactions. However, we cannot guarantee the absolute security of data transmitted through the Internet or stored on our servers. You acknowledge and accept the inherent risks of online transactions.",
            },
          },
          {
            li: {
              desc: "Your use of the Website is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Website, you consent to the collection and use of your information as described in the Privacy Policy.",
            },
          },
        ],
      },
    },
    {
      heading: "Third-Party Links and Content",
      content: {
        p: [
          "The Website may contain links to third-party websites or content that we do not control. We are not responsible for the content, policies, or practices of any third-party websites, and your use of such websites is at your own risk.",
        ],
      },
    },
    {
      heading: "Limitation of Liability",
      content: {
        p: [
          "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
        ],
      },
    },
    {
      heading: "Changes and Updates",
      content: {
        p: [
          "We reserve the right to modify, update, or change the Website, its content, services, or policies at any time without prior notice.",
        ],
      },
    },
    {
      heading: "Jurisdiction",
      content: {
        p: [
          "This disclaimer shall be governed by and construed in accordance with the laws of Delhi. Any disputes arising from or related to this disclaimer or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Delhi.",
        ],
      },
    },
    {
      heading: "Contact Information",
      content: {
        p: [
          {
            p: "If you have any questions or concerns about this disclaimer, please contact us at",
            link: {
              href: "mailto:support@tranzift.com?subject = Feedback&body = Message",
              content: "support@tranzift.com.",
            },
          },
        ],
      },
    },
  ];
  return (
    <div className={`${styles.__container} ${footerLinkStyles.__container}`}>
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
