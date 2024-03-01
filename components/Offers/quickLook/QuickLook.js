import React from "react";
import styles from "./quickLook.module.scss";
import Coupons from "../OfferDetails/Coupons";
const QuickLook = ({ data }) => {
  return (
    <div className={styles.quickLook}>
      <div className={styles.heading}>Quick Look</div>
      <div className={styles.content}>
        {data.map((item, index) => {
          return <Coupons img={item.img} type={item.type} key={index} />;
        })}
      </div>
    </div>
  );
};

export default QuickLook;
