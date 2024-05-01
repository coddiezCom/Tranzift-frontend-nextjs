// import Components
import Copyright from "./Copyright";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import LegalInformation from "./LegalInformation";
import Socials from "./Socials";
import MobileFooter from "./MobileFooter";
// import Styles
import styles from "./styles.module.scss";
// import Icons
import { VscChevronRight } from "react-icons/vsc";
import { FaGift, FaHome, FaMoneyCheckAlt, FaUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsPinterest } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import CompanyLogo from "./CompanyLogo";

export const Divider = () => {
  return (
    <div className={styles.footer__divider}>
      <hr />
    </div>
  );
};
export default function Footer({}) {
  const legalInformation = [
    {
      name: "Privacy Center",
      link: "/privacy_center",
    },
    {
      name: "Terms & Conditions",
      link: "/terms_and_conditions",
    },
    {
      name: "Terms Of Use",
      link: "/terms_of_use",
    },
    {
      name: "Disclaimer",
      icon: <VscChevronRight />,
      link: "/disclaimer",
    },
  ];
  const links = [
    {
      heading: "Engage With Us",
      links: [
        {
          name: "About us",
          icon: <VscChevronRight />,
          link: "/aboutUs",
        },
        {
          name: "Contact us",
          icon: <VscChevronRight />,
          link: "/contactUs",
        },

        {
          name: "Pricing",
          icon: <VscChevronRight />,
          link: "/pricing",
        },
        {
          name: "Shipping",
          icon: <VscChevronRight />,
          link: "/shipping",
        },
      ],
    },

    {
      heading: "Customer Support",
      links: [
        {
          name: "Product & Services",
          icon: <VscChevronRight />,
          link: "/product_and_services",
        },
        {
          name: "Promotional Offers",
          icon: <VscChevronRight />,
          link: "/promotional_offers",
        },
        {
          name: "FAQ",
          icon: <VscChevronRight />,
          link: "/faq",
        },
        {
          name: "Blogs",
          icon: <VscChevronRight />,
          link: "/blogs",
        },
      ],
    },
    {
      heading: "Legal Center",
      links: [
        {
          name: "Privacy Policy",
          icon: <VscChevronRight />,
          link: "/privacy_policy",
        },
        {
          name: "Cancellation Policy",
          icon: <VscChevronRight />,
          link: "/cancellation_policy",
        },
        {
          name: "Refund Policy",
          icon: <VscChevronRight />,
          link: "/refund_policy",
        },
        {
          name: "Cookies Policy",
          icon: <VscChevronRight />,
          link: "/cookies",
        },
      ],
    },
  ];
  const socials = [
    {
      name: "Facebook",
      link: "/",
      icon: <FaFacebookF />,
      hover_color: "#4267B2",
    },
    {
      name: "Instagram",
      link: "/",
      icon: <BsInstagram />,
      hover_color: "#E1306C",
    },
    {
      name: "Twitter",
      link: "/",
      icon: <BsTwitterX />,
      hover_color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      link: "/",
      icon: <BiLogoLinkedin />,
      hover_color: "#0077B5",
    },
    {
      name: "Pinterest",
      link: "/",
      icon: <BsPinterest />,
      hover_color: "#BD081C",
    },
  ];
  const mobileLinks = [
    // {
    //   head: "Bill Payment",
    //   icon: <HiCreditCard />,
    //   link: "/",
    // },
    {
      head: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      head: "Gift-Card",
      icon: <FaGift />,
      link: "/gift-cards",
    },
    {
      head: "Cashback",
      icon: <FaMoneyCheckAlt />,
      link: "/",
    },
    {
      head: "Account",
      icon: <FaUser />,
      link: "/profile",
    },
  ];
  const companyDetail = {
    logo: {
      img: "/logo.png",
      alt: "Tranzift",
    },
    name: "Tranzift",
  };
  return (
    <>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <CompanyLogo detail={companyDetail} />
            <Links links={links} />
            <NewsLetter />
            <Socials socials={socials} />
          </div>
          {/* <Divider /> */}
          <div className={`flex justify-between bg-blue-500  ${styles.footer__copyright_legalInformation}`}>
            <div className={`flex justify-between bg-blue-500 py-4 `}>
              <Copyright />
              <LegalInformation legalInformation={legalInformation} />
            </div>
          </div>
        </footer>
        <MobileFooter mobileLinks={mobileLinks} />
      </div>
    </>
  );
}
