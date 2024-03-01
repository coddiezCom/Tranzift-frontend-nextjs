import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/Assets/images/Offer/InternationFlight/BankOfBaroda.jpg"}
        width={2000}
        height={2000}
        alt="RMU"
      />
    </div>
  );
};

export default Banner;
