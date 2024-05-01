// import react liabary
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
// import styles
import styles from "../../styles/gift-card.module.scss";

const Index = ({ banner }) => {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  // console.log(isTablet);
  return (
    <div className={styles.giftCardBanner}>
      <span className={styles.giftCardBanner__img}>
        <Image
          width={1200}
          height={1200}
          src={isTablet ? banner?.tablet_img : banner?.laptop_img}
          alt="Gift Card Banner"
        />
      </span>
      <span className={styles.giftCardBanner__content}>
        <span className={styles.giftCardBanner__content__heading}>
          <h3>Gift Cards</h3>
        </span>
        <span className={styles.giftCardBanner__content__subHeading}>
          <span>
            <Link href={"/"}>Home</Link>
          </span>
          <span>-</span>
          <span>Gift Cards</span>
        </span>
      </span>
    </div>
  );
};

export default Index;
