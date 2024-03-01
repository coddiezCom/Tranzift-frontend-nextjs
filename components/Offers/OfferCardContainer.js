import React from "react";
import styles from "./offerCardContainer.module.scss";
import OfferCards from "./OfferCards";
const OfferCardContainer = ({ data, subHeading }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{subHeading}</h2>
      <ul>
        {data.map((data, index) => {
          return <OfferCards key={index} data={data} />;
        })}
      </ul>
    </div>
  );
};

export default OfferCardContainer;
