import React from "react";
import styles from "./rmu_OfferDetailSummary.module.scss";
const RMU_OfferDetailSummary = ({ DetailSummary }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Summer Sale with Bank of Baroda Credit Cards
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: DetailSummary }}
      ></div>
    </div>
  );
};

export default RMU_OfferDetailSummary;
