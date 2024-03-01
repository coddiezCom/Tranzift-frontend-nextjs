import React from "react";
import styles from "./offerCards.module.scss";
import Link from "next/link";
const OfferCards = ({ data, key }) => {
  // console.log(data);
  const myObject = { name: "Genie", age: 100 };
  const myObjectAsString = JSON.stringify(data); // "{"name":"Genie","age":100}"
  // console.log(myObjectAsString);
  return (
    <li
      key={key}
      title="Airtel Campaign"
      data-trackcategory="Offers Page"
      data-trackaction="International Flights"
      data-trackvalue="View Offer Details - Airtel Campaign"
      className={styles.OfferList}
    >
      <Link
        href={`/Offers/details/${encodeURIComponent(myObjectAsString)}`}
        data-trackcategory="Offers Page"
        data-trackaction="International Flights"
        data-trackvalue="View Offer Details - Airtel Campaign"
        className={styles._Content}
      >
        <span className={styles.offerContent}>
          <span className={styles.offerImgContainer}>
            <img src={data.img} className={styles.offerImg} alt="RMU" />
          </span>
          <span className={styles.details}>
            <div className={styles.__content}>
              <span className={styles.__title}>
                <span className={styles.offerTitleContainer}>
                  <span className={styles.offerTitle}>{data.title}</span>
                </span>
                {data.couponCode && <p className={styles.wfull}>Coupon Code : YRHDFCEMI</p>}
              </span>
              <span className={styles.validity}>
                <p className={styles.__heading}>Validity:</p>
                <p className={styles.data}>Jul 03, 2023</p>
              </span>
            </div>
            <span className={styles.ViewDetailContainer}>
              <span className={styles.view_btn}>View Details</span>
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
};

export default OfferCards;
