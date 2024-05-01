import React from "react";
// Styles
import styles from "../../styles/aboutUs.module.scss";
// Components
import { BannerWithoutSwiper } from "../../components/Banner";
import Image from "next/image";
import Link from "next/link";
export const Card = ({ data }) => {
  return (
    <div className={styles.__cardContainer}>
      <div className={styles.__card}>
        <span className={styles.ImgContainer}>
          <Image src={data?.img?.url} width={500} height={500} alt={data?.img?.alt} />
        </span>
        <span className={styles.__heading}>
          <h3>{data?.title}</h3>
        </span>
        <span className={styles.desc}>
          <p>{data?.description}</p>
        </span>
      </div>
    </div>
  );
};
export const BestGiftingOption = ({ data }) => {
  return (
    <div className={styles.__bestGiftOptionContainer}>
      <div className={styles.__heading}>
        <h2>{data?.title}</h2>
      </div>
      <div className={styles.__cardContainer}>
        {data.card.map((items, index) => {
          return <Card data={items} key={index} />;
        })}
      </div>
    </div>
  );
};
export const MoreAboutUs = ({ data }) => {
  return (
    <div className={styles.__moreAboutUs}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.__moreAboutUs__cards}>
            <div className={styles.__heading}>
              <h2>{item.heading}</h2>
            </div>
            <div className={styles.__content}>
              {item.content.p &&
                item?.content?.p?.map((item, index) => {
                  // console.log(item);
                  return (
                    <p key={index}>
                      {item.p ? (
                        <>
                          {item?.p} <Link href={item?.link?.href}>{item?.link?.content}</Link>
                        </>
                      ) : (
                        <>{item}</>
                      )}
                    </p>
                  );
                })}
              {item.content.ul && (
                <ul>
                  {item?.content?.ul?.map((item, index) => (
                    <li key={index}>
                      <span>{item?.li?.heading}</span>
                      <span>{item?.li?.desc}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.content.QuesNdAns &&
                item.content.QuesNdAns.map((item, index) => (
                  <div key={index} className={styles.__QNA}>
                    <div className={styles.__question}>{item?.heading}</div>
                    <div className={styles.__answer}>{item?.desc}</div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const index = () => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["About Us"],
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
        "Welcome to TRANZIFT.COM, your go-to destination for easy and convenient gifting. We are a leading provider of digital gift cards that can be used at a variety of popular retailers and service providers. Our mission is to make gifting hassle-free and enjoyable for everyone.",
        "At TRANZIFT.COM, we understand that finding the perfect gift can be a challenge. That's why we offer a wide selection of gift cards to suit every taste and occasion. Whether you're shopping for a birthday, anniversary, holiday, or just because, we've got you covered.",
        "Welcome to Tranzift.com, your one-stop destination for convenient and hassle-free recharges and bill payments. At Tranzift.com, we are committed to simplifying your life by providing a seamless platform to recharge your mobile phones, pay your utility bills, and more, all from the comfort of your home or on the go.",
      ],
    },
    bannerImage: {
      url: "/images/banner/AboutBannerImg.png",
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
      heading: "Our Mission",
      content: {
        p: [
          "Our mission is to empower individuals and businesses by offering a secure and user-friendly platform that makes managing everyday financial transactions easier than ever before. We understand the value of your time, and we're here to save you the effort of standing in long queues or dealing with complicated payment processes.",
        ],
      },
    },
    {
      heading: "Why Choose Us?",
      content: {
        ul: [
          {
            li: {
              heading: "Convenience:",
              desc: "We believe that convenience should be at the heart of every financial transaction. With Tranzift.com, you can recharge your mobile phone, pay your electricity, water, and gas bills, and even recharge your DTH or internet connection effortlessly.",
            },
          },
          {
            li: {
              heading: "Security:",
              desc: "Your security is our top priority. We employ robust security measures to ensure that your transactions are safe and your personal information remains confidential.",
            },
          },
          {
            li: {
              heading: "Wide Range of Services:",
              desc: "Whether you need to top up your mobile balance, settle your monthly bills, or recharge your prepaid services, we offer a comprehensive range of services to meet all your financial needs.",
            },
          },
          {
            li: {
              heading: "User-Friendly Interface:",
              desc: "Our website is designed with simplicity in mind. You don't need to be tech-savvy to use our platform. Just a few clicks, and you're done!",
            },
          },
          {
            li: {
              heading: "Customer Support:",
              desc: "Have a question or need assistance? Our dedicated customer support team is here to help. We're just a message or call away, ready to assist you with any inquiries or concerns you may have.",
            },
          },
        ],
      },
    },
    {
      heading: "Our Commitment",
      content: {
        p: [
          "We are committed to continuously improving and expanding our services to make your life more convenient. Your feedback and suggestions are invaluable to us, and we're always eager to hear from you as we strive to enhance your experience on Tranzift.com.",
        ],
      },
    },
    {
      heading: "Our Team",
      content: {
        p: [
          "Behind Tranzift.com, there's a dedicated team of professionals who are passionate about making your financial transactions seamless. Our team is comprised of experts in technology, finance, and customer service, all working together to provide you with the best experience possible.",
        ],
      },
    },
    {
      heading: "Our Vision",
      content: {
        p: [
          "We envision a future where everyone can manage their financial obligations effortlessly. Our vision is to be at the forefront of digital financial services, continually innovating to bring you cutting-edge solutions for your everyday needs.",
        ],
      },
    },
    {
      heading: "Community Involvement",
      content: {
        p: [
          "At Tranzift.com, we believe in giving back to the community. We are actively involved in initiatives that support social causes, education, and environmental sustainability. By choosing our services, you're contributing to these efforts as well.",
        ],
      },
    },
    {
      heading: "Transparency",
      content: {
        p: [
          "We believe in transparency in all our dealings. You will find clear and easy-to-understand pricing information, terms of service, and policies on our website. We want you to have full confidence in every transaction you make with us.",
        ],
      },
    },

    {
      heading: "Partnerships",
      content: {
        p: [
          "To provide you with the widest range of services, we partner with leading utility companies, mobile service providers, and financial institutions. These partnerships allow us to offer you exclusive deals, discounts, and promotions to help you save money.",
        ],
      },
    },
    {
      heading: "Our Journey",
      content: {
        p: [
          "Tranzift.com started with a simple idea: to make recharges and bill payments a breeze for everyone. Over the years, we have grown from a small startup to a trusted platform serving thousands of satisfied customers. Our journey is a testament to our commitment to excellence.",
        ],
      },
    },
    {
      heading: "Join Us",
      content: {
        p: [
          "We invite you to join us on this journey towards financial simplicity. Whether you're a busy professional, a student, or a homemaker, Tranzift.com is here to simplify your life. Sign up today and experience the ease and convenience of managing your finances with us.",
        ],
      },
    },
    {
      heading: "Stay Connected",
      content: {
        p: [
          [
            "Stay connected with us on social media and subscribe to our newsletter to stay updated on the latest offers, promotions, and industry news. We value your trust and strive to keep you informed and engaged.",
          ],
          [
            "Thank you for choosing Tranzift.com as your trusted partner for recharges and bill payments. We look forward to serving you and making your financial transactions as simple and stress-free as possible",
          ],
          ["For any inquiries or feedback, please don't hesitate to reach out to us at +91-7669665515."],
        ],
      },
    },
  ];
  return (
    <div className={styles.__container}>
      <div className={styles.__banner}>
        <BannerWithoutSwiper data={data} />
      </div>
      <BestGiftingOption data={bestGiftingOption} />
      <MoreAboutUs data={moreAboutUs} />
    </div>
  );
};

export default index;
