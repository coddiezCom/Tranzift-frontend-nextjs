import React from "react";
import styles from "./coupons.module.scss";
import Image from "next/image";
const Coupons = ({ img, type }) => {
  const { typeName, value } = type;
  return (
    <div className={styles.container}>
      <div className={styles.couponImg}>
        {" "}
        <Image src={img} height={50} width={50} alt="RMU" />
      </div>
      <div className={styles.couponCodeContainer}>
        <h5>{typeName}</h5>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Coupons;
