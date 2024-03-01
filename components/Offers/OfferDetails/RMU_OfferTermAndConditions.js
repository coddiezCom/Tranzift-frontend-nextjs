import React from "react";
import styles from "./RMU_OfferTermAndConditions.module.scss";
const RMU_OfferTermAndConditions = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Terms and Conditions</div>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.term}</li>;
        })}
      </ul>
    </div>
  );
};

export default RMU_OfferTermAndConditions;
