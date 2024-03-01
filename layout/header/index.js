import * as React from "react";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { MdCardGiftcard, MdEmail } from "react-icons/md";
import { useState, useEffect, useMemo } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoPinterest, BiSolidOffer, BiUserCircle } from "react-icons/bi";
import { FaSuitcase } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import PreHeader from "./PreHeader";
import PostHeader from "./PostHeader";
const mobileLinks = [
  {
    href: "/",
    title: "Home",
    subtitle: "Login for the best deals & offers",
    icon: <BiUserCircle />,
  },
  {
    href: "/gift_card",
    title: "Gift-Card",
    subtitle: "Give the gift of travel! View and modify your trip with our convenient Gift Cards.",
    icon: <FaSuitcase />,
  },
  {
    href: "/recharge_&_billPay",
    title: "Recharge / Bill Pay",
    subtitle: "Recharge your account or pay bills hassle-free",
    icon: <MdCardGiftcard />,
  },
  {
    href: "/My_Wallet",
    title: "My Wallet",
    subtitle: "Manage your wallet balance and transactions",
    icon: <GiWallet />,
  },
  {
    href: "/offers_&_Deals",
    title: "Offers & Deals",
    subtitle: "Explore exclusive offers and amazing deals",
    icon: <BiSolidOffer />,
  },
  {
    href: "/contactUs",
    title: "Contact Us",
    subtitle: "Reach out to us for any assistance or inquiries",
    icon: <TbPlaneInflight />,
  },
  {
    href: "/userAgreement",
    title: "User Agreement",
    subtitle: "Read and understand our user agreement",
    icon: "",
  },
  {
    href: "/privacyPolicy",
    title: "Privacy Policy",
    subtitle: "Learn about our commitment to your privacy",
    icon: "",
  },
  {
    href: "TermsOfServices",
    title: "Terms of Services",
    subtitle: "Review the terms governing our services",
    icon: "",
  },
];
export default function Header({ country, searchHandler }) {
  const [showNavShadow, setShowNavShadow] = useState(false);

  useEffect(() => {
    if (typeof document != "undefined") {
      const handleScroll = () => {
        setTimeout(() => {
          if (window.scrollY >= 100) {
            setShowNavShadow(true);
          } else {
            setShowNavShadow(false);
          }
        }, 500);
      };
      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const preHeaderData = {
    contact: [
      {
        link: "/",
        data: {
          icon: <BsTelephoneFill />,
          content: "+91 7669665515",
          name: "phone",
        },
      },
      {
        link: "/",
        data: {
          icon: <MdEmail />,
          content: "support@tranzift.com",
          name: "email",
        },
      },
    ],
    socials: [
      {
        link: "/",
        content: {
          icon: <BsFacebook />,
          name: "facebook",
          color: "#1877f2",
        },
      },
      {
        link: "/",
        content: {
          icon: <AiFillInstagram />,
          name: "instagram",
          color: "#f0010d",
        },
      },
      {
        link: "/",
        content: {
          icon: <RiTwitterXFill />,
          name: "twitter",
          color: "#fdfdfe",
        },
      },
      {
        link: "/",
        content: {
          icon: <BiLogoPinterest />,
          name: "pinterest",
          color: "#e71b22",
        },
      },
    ],
    heading: "",
  };
  return (
    <header
      className={styles.header}
      style={{
        boxShadow: showNavShadow ? "0 10px 50px 0 rgba(46, 56, 220, 0.1)" : "",
      }}
    >
      <PreHeader hide={showNavShadow} preHeaderData={preHeaderData} />
      <PostHeader showOnly={showNavShadow} searchHandler={searchHandler} mobileLinks={mobileLinks} />
    </header>
  );
}
