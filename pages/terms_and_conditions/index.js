import React from "react";
// Styles
import styles from "@/styles/term_and_condition.module.scss";
// MDX Utility
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// Components
import { BannerWithoutSwiper } from "@/components/Banner";
import { BestGiftingOption, MoreAboutUs } from "../aboutUs";
// Layout
import FooterLinkLayout from "@/Layout/FooterLinkLayout";
const Index = ({ frontMatter, mdxSource }) => {
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
      heading: "",
      content: {
        p: [
          `The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`,
        ],
      },
    },
    {
      heading: "User Registration",
      content: {
        ul: [
          {
            li: {
              desc: "To access certain features or services on our Website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and update this information as needed to keep it accurate, current, and complete.",
            },
          },
          {
            li: {
              desc: "You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activities that occur under your account.",
            },
          },
        ],
      },
    },
    {
      heading: "Services Offered",
      content: {
        ul: [
          {
            li: {
              desc: "The Website provides a platform for users to recharge mobile phones, make utility bill payments, and purchase gift cards. The availability of specific services may vary based on your location and the partners we work with.",
            },
          },
          {
            li: {
              desc: "We reserve the right to modify or discontinue any part of our services without prior notice.",
            },
          },
        ],
      },
    },
    {
      heading: "Payments and Fees",
      content: {
        ul: [
          {
            li: {
              desc: "Payment for services on our Website may be subject to fees or charges. You agree to pay all fees and charges associated with your use of our services in accordance with the pricing and payment terms provided.",
            },
          },
          {
            li: {
              desc: "We may use third-party payment processors to handle payments. Your use of such processors is subject to their terms and policies.",
            },
          },
        ],
      },
    },
    {
      heading: "User Conduct",
      content: {
        ul: [
          {
            li: {
              desc: "You agree not to use the Website for any unlawful or prohibited purposes.",
            },
          },
          {
            li: {
              desc: "You agree not to engage in any conduct that disrupts or interferes with the proper functioning of the Website.",
            },
          },
        ],
      },
    },
    {
      heading: "Privacy",
      content: {
        ul: [
          {
            li: {
              desc: "Your use of the Website is also governed by our Privacy Policy, which can be found here. By using the Website, you consent to the collection and use of your information as described in the Privacy Policy.",
            },
          },
        ],
      },
    },
    {
      heading: "Intellectual Property",
      content: {
        ul: [
          {
            li: {
              desc: "The content and materials on the Website, including but not limited to text, graphics, logos, and images, are protected by intellectual property laws and are the property of Aashiya Technologies Private Limited or its licensors.",
            },
          },
          {
            li: {
              desc: "You may not reproduce, distribute, modify, or otherwise use any content from the Website without the express written consent of Aashiya Technologies Private Limited.",
            },
          },
        ],
      },
    },
    {
      heading: "Liability and Disclaimer",
      content: {
        ul: [
          {
            li: {
              desc: `The Website is provided on an "as-is" and "as-available" basis, without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any information on the Website.`,
            },
          },
          {
            li: {
              desc: "To the fullest extent permitted by law, Aashiya Technologies Private Limited and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
            },
          },
        ],
      },
    },
    {
      heading: "Termination",
      content: {
        ul: [
          {
            li: {
              desc: "We reserve the right to terminate or suspend your account and access to the Website at our discretion, without notice and for any reason.",
            },
          },
        ],
      },
    },
    {
      heading: "Changes to Terms and Conditions",
      content: {
        ul: [
          {
            li: {
              desc: "We may update these Terms and Conditions from time to time. Your continued use of the Website after any changes shall constitute your consent to such changes.",
            },
          },
          {
            li: {
              desc: "State that you reserve the right to modify your Terms and Conditions at any time and provide a notice period for users to review and accept the changes.",
            },
          },
        ],
      },
    },
    {
      heading: "Contact Information",
      content: {
        ul: [
          {
            li: {
              desc: "If you have any questions or concerns about these Terms and Conditions, please contact us at.",
              link: {
                href: "mailto:support@tranzift.com",
                content: "support@tranzift.com.",
              },
            },
          },
        ],
      },
    },
    {
      heading: "Cancellation and Refund Policy",
      content: {
        ul: [
          {
            li: {
              desc: "Clearly outline your website's cancellation and refund policy for recharges, bill payments, and gift card purchases, referring to the separate cancellation policy for detailed information.",
            },
          },
        ],
      },
    },
    {
      heading: "Gift Card Terms and Conditions",
      content: {
        ul: [
          {
            li: {
              desc: "If applicable, provide a summary of important terms and conditions specific to gift cards, including their expiration dates, usage restrictions, and any fees associated with them.",
            },
          },
        ],
      },
    },
    {
      heading: "Account Termination and Suspension",
      content: {
        ul: [
          {
            li: {
              desc: "Specify the circumstances under which you may terminate or suspend user accounts, including violations of your terms, fraudulent activities, or misuse of the platform.",
            },
          },
        ],
      },
    },
    {
      heading: "User Responsibilities",
      content: {
        ul: [
          {
            li: {
              desc: "Outline users' responsibilities when using your services, such as accurate information provision, adherence to your policies, and compliance with all applicable laws and regulations.",
            },
          },
        ],
      },
    },
    {
      heading: "Dispute Resolution",
      content: {
        ul: [
          {
            li: {
              desc: "Explain how disputes between users and your platform will be resolved, including any requirements for arbitration, mediation, or legal action.",
            },
          },
        ],
      },
    },
    {
      heading: "User Feedback and Reviews",
      content: {
        ul: [
          {
            li: {
              desc: "Discuss how user-generated content, such as reviews and comments, is handled on your platform, including your rights to moderate or remove such content.",
            },
          },
        ],
      },
    },
    {
      heading: "Security Measures",
      content: {
        ul: [
          {
            li: {
              desc: "Describe the security measures you have in place to protect user information and transactions, such as encryption, data protection, and fraud prevention.",
            },
          },
        ],
      },
    },
    {
      heading: "User Communications",
      content: {
        ul: [
          {
            li: {
              desc: "Specify how you may communicate with users, including email notifications, newsletters, and updates about your services.",
            },
          },
        ],
      },
    },
    {
      heading: "Governing Law",
      content: {
        ul: [
          {
            li: {
              desc: "Specify the governing law and jurisdiction that will apply in case of any legal disputes.",
            },
          },
        ],
      },
    },
    {
      heading: "Indemnification",
      content: {
        ul: [
          {
            li: {
              desc: "Clarify that users agree to indemnify and hold your company harmless from any claims, losses, or damages arising from their use of your services or violation of your terms.",
            },
          },
        ],
      },
    },
    {
      heading: "Entire Agreement",
      content: {
        ul: [
          {
            li: {
              desc: "Confirm that your Terms and Conditions constitute the entire agreement between the user and your company, superseding any prior agreements or understandings.",
            },
          },
        ],
      },
    },
    {
      heading: "Severability",
      content: {
        ul: [
          {
            li: {
              desc: "Include a clause stating that if any part of your Terms and Conditions is found to be invalid or unenforceable, the rest of the agreement remains in effect.",
            },
          },
        ],
      },
    },
    {
      heading: "Contact Information",
      content: {
        ul: [
          {
            li: {
              desc: "Reiterate your contact information for users to reach out for inquiries, concerns, or support-related matters.",
            },
          },
        ],
      },
    },
    {
      heading: "Effective Date",
      content: {
        ul: [
          {
            li: {
              desc: "Clearly state the effective date of your Terms and Conditions and mention that it is subject to updates and revisions.",
            },
          },
        ],
      },
    },
    {
      heading: "Cookies",
      content: {
        p: [
          "We employ the use of cookies. By accessing Tranzift, you agreed to use cookies in agreement with the Tranzift's Privacy Policy.",
          "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners",
        ],
      },
    },
    {
      heading: "License",
      content: {
        p: [
          "Unless otherwise stated, Tranzift and/or its licensors own the intellectual property rights for all material on Tranzift. All intellectual property rights are reserved. You may access this from Tranzift for your own personal use subjected to restrictions set in these terms and conditions",
        ],
      },
    },

    {
      heading: "You must not",
      content: {
        ul: [
          {
            li: {
              desc: "Republish material from Tranzift.",
            },
            li: {
              desc: "Sell, rent or sub-license material from Tranzift.",
            },
            li: {
              desc: "Reproduce, duplicate or copy material from Tranzift.",
            },
            li: {
              desc: "Redistribute content from Tranzift.",
            },
          },
        ],
        p: [
          "This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms and Conditions Generator.",
          "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Tranzift does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Tranzift,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Tranzift shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
          "Tranzift reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
        ],
      },
    },
    {
      heading: "You warrant and represent that:",
      content: {
        ul: [
          {
            li: {
              desc: "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.",
            },
            li: {
              desc: "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party.",
            },
            li: {
              desc: "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.",
            },
            li: {
              desc: "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
            },
          },
        ],
        p: [
          "You hereby grant Tranzift a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media",
        ],
      },
    },
    {
      heading: "Hyperlinking to our Content",
      content: {
        p: ["The following organizations may link to our Website without prior written approval:"],
        ul: [
          {
            li: {
              desc: "Government agencies.",
            },
          },
          {
            li: {
              desc: "Search engines.",
            },
          },
          {
            li: {
              desc: "News organizations.",
            },
          },
          {
            li: {
              desc: "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.",
            },
          },
          {
            li: {
              desc: "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
            },
          },
        ],
        p: [
          "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.",
        ],
      },
    },
    {
      heading: "We may consider and approve other link requests from the following types of organizations:",
      content: {
        ul: [
          {
            li: {
              desc: "commonly-known consumer and/or business information sources.",
            },
          },
          {
            li: {
              desc: "dot.com community sites.",
            },
          },
          {
            li: {
              desc: "associations or other groups representing charities.",
            },
          },
          {
            li: {
              desc: "online directory distributors.",
            },
          },
          {
            li: {
              desc: "internet portals.",
            },
          },
          {
            li: {
              desc: "accounting, law and consulting firms; and.",
            },
          },
          {
            li: {
              desc: "educational institutions and trade associations.",
            },
          },
        ],
      },
    },
    {
      heading: "We will approve link requests from these organizations if we decide that:",
      content: {
        ul: [
          {
            li: {
              desc: "the link would not make us look unfavorably to ourselves or to our accredited businesses.",
            },
          },
          {
            li: {
              desc: "the organization does not have any negative records with us.",
            },
          },
          {
            li: {
              desc: "the benefit to us from the visibility of the hyperlink compensates the absence of Tranzift; and.",
            },
          },
          {
            li: {
              desc: "the link is in the context of general resource information.",
            },
          },
        ],
      },
    },
    {
      heading: "These organizations may link to our home page so long as the link:",
      content: {
        ul: [
          {
            li: {
              desc: "is not in any way deceptive.",
            },
          },
          {
            li: {
              desc: "does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and.",
            },
          },
          {
            li: {
              desc: "fits within the context of the linking party's site.",
            },
          },
        ],
        p: [
          "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Tranzift. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response",
        ],
      },
    },
    {
      heading: "Approved organizations may hyperlink to our Website as follows:",
      content: {
        ul: [
          {
            li: {
              desc: "By use of our corporate name.",
            },
          },
          {
            li: {
              desc: "By use of the uniform resource locator being linked to.",
            },
          },
          {
            li: {
              desc: "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.",
            },
          },
        ],
        p: [
          "No use of Tranzift's logo or other artwork will be allowed for linking absent a trademark license agreement.",
        ],
      },
    },
    {
      heading: "iFrames",
      content: {
        p: [
          "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.",
        ],
      },
    },
    {
      heading: "Content Liability",
      content: {
        p: [
          "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
        ],
      },
    },

    {
      heading: "Reservation of Rights",
      content: {
        p: [
          "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
        ],
      },
    },
    {
      heading: "Removal of links from our website",
      content: {
        p: [
          "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.",
        ],
      },
    },
  ];
  return (
    <div className={styles.__container}>
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
  const filePath = path.join("./mdxData/ourPolicy", "termAndConditions" + ".mdx");

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
export default Index;
