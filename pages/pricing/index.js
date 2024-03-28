import React from "react";
import styles from "../../styles/pricing.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
export const Banner = () => {
  return (
    <div className={styles.__bannerContainer}>
      <div className={styles.__container}>
        <h2>0% Transaction Charges on Recharges & Bill Payments.</h2>
        <p>
          At Tranzift.com, we offer transparent and competitive pricing for all your recharge and bill payment needs.
          Whether you`re looking to top up your mobile phone, pay your utility bills, or recharge your DTH, we have a
          plan that suits your requirements.
        </p>
      </div>
    </div>
  );
};
export const BillPayContainer = () => {
  const data = {
    bannerImg: {
      url: "/images/priceImg.png",
      alt: "priceImg",
    },
    content: {
      heading: "Tranzift Bill Pay",
      subHeading: "Recharges & Bill Payments",
      desc: "Lightning fast payments, exciting rewards and seamless transactions on every recharge & bill payment.",
      service: [
        {
          content: "Grab exciting offers",
          icon: <FaCheckCircle />,
        },
        {
          content: "Win scratchcards",
          icon: <FaCheckCircle />,
        },
        {
          content: "No hidden charges",
          icon: <FaCheckCircle />,
        },
      ],
    },
  };
  return (
    <div className={styles.__billPayContainer}>
      <div className={styles.__imgContainer}>
        <Image src={data.bannerImg.url} width={500} height={500} alt={data.bannerImg.alt} />
      </div>
      <div className={styles.__contentContainer}>
        <div className={styles.__heading}>
          <h3>{data.content.heading}</h3>
        </div>
        <div className={styles.__subHeading}>
          <h2>{data.content.subHeading}</h2>
        </div>
        <div className={styles.__desc}>
          <p>{data.content.desc}</p>
        </div>
        <ul className={styles.__services}>
          {data.content.service.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.icon}</span>
                <span>{item.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const index = () => {
  return (
    <div className={styles.price__container}>
      <Banner />
      <BillPayContainer />
    </div>
  );
};

export default index;
