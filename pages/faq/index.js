import React from "react";
// import styles from "../../styles/policies.module.scss";
import styles from "../../styles/faq.module.scss";
import { BannerWithoutSwiper } from "../../components/Banner";
import { BestGiftingOption, MoreAboutUs } from "../aboutUs";
const index = () => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["FAQS"],
        loop: true,
        cursorStyle: "|",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      heading: "What is an e-gift card?",
      paragraph: [
        "An e-gift card is a digital version of a traditional gift card that can be purchased and sent electronically via email or other digital channels.",
      ],
    },
    bannerImage: {
      url: "/images/banner/Faq.png",
      alt: "Faq",
      reverse: true,
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
      heading: "How do I purchase an e-gift card?",
      content: {
        p: [
          "To purchase an e-gift card, visit our website and select the desired gift card. Enter the recipient's email address, choose the value, and complete the payment process",
        ],
      },
    },
    {
      heading: "How is an e-gift card delivered to the recipient?",
      content: {
        p: [
          "The e-gift card is usually delivered to the recipient's email address instantly or within a specified timeframe mentioned during the purchase.",
        ],
      },
    },
    {
      heading: "Can I customize the design and message of an e-gift card?",
      content: {
        p: ["Yes, you can often personalize the design and include a custom message when sending an e-gift card."],
      },
    },
    {
      heading: "Can I schedule the delivery of an e-gift card for a specific date?",
      content: {
        p: [
          "Depending on the platform, you may have the option to schedule the delivery of the e-gift card for a future date, such as for a birthday or holiday.",
        ],
      },
    },
    {
      heading: "Can I use an e-gift card for online and in-store purchases?",
      content: {
        p: ["Most e-gift cards can be used for both online and in-store purchases, unless specified otherwise."],
      },
    },
    {
      heading: "How do I redeem an e-gift card?",
      content: {
        p: [
          "The recipient can typically redeem an e-gift card by presenting the digital code or barcode associated with the card during checkout, either online or at a physical store.",
        ],
      },
    },
    {
      heading: "What is the expiration date of an e-gift card?",
      content: {
        p: [
          "The expiration date of an e-gift card is usually mentioned in the email or the terms and conditions accompanying the card.",
        ],
      },
    },
    {
      heading: "Can I check the balance of an e-gift card?",
      content: {
        p: [
          "Yes, you can often check the balance of an e-gift card by visiting the website provided or contacting the customer support of the issuing company.",
        ],
      },
    },
    {
      heading: "Can I return or exchange an e-gift card?",
      content: {
        p: [
          "E-gift cards are generally non-refundable and non-exchangeable, so it's important to double-check your selection before making a purchase.",
        ],
      },
    },
    {
      heading: "Can I add more value to an e-gift card?",
      content: {
        p: [
          "It depends on the platform and retailer. Some may allow you to add more value to an e-gift card, while others may not provide this option.",
        ],
      },
    },
    {
      heading: "Can I transfer an e-gift card to someone else?",
      content: {
        p: ["In most cases, e-gift cards are non-transferrable and can only be used by the original recipient."],
      },
    },
    {
      heading: "What should I do if I accidentally delete or lose the e-gift card email?",
      content: {
        p: [
          "If you accidentally delete or lose the e-gift card email, contact the customer support of the issuing company and provide them with relevant details to assist you in retrieving the e-gift card.",
        ],
      },
    },
    {
      heading: "Can I use an e-gift card multiple times until the balance is exhausted?",
      content: {
        p: [
          "Yes, e-gift cards can usually be used multiple times until the balance is fully utilized, unless otherwise specified.",
        ],
      },
    },
    {
      heading: "What happens if the value of the purchase exceeds the balance of the e-gift card?",
      content: {
        p: [
          "If the purchase amount exceeds the balance of the e-gift card, the recipient may need to pay the remaining balance using an additional payment method accepted by the retailer.",
          "Please note that these answers are provided as examples, and you should adapt them to reflect the specific policies and guidelines of your e-gift card platform or service",
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
      <MoreAboutUs data={moreAboutUs} />
    </div>
  );
};

export default index;
