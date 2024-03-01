import React from "react";
import styles from "./offerBanner.module.scss";
const OfferBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2>Great Offers & Amazing Deals</h2>
      </div>
    </div>
  );
};

export default OfferBanner;
