import React, { useState } from "react";
import Image from "next/image";
import styles from "./flightOffer.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
const FlightOffers = (props) => {
  const { imgUrl, FlightName, AboutFlight, description } = props;
  const [isZoomed, setIsZoomed] = useState(true);

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.ImgContainer} ${isZoomed ? styles.zoomIn : styles.zoomOut}`} onClick={handleZoom}>
        <Image src={imgUrl} alt="5" width={500} height={500} className="" />
      </div>
      <div className={styles.header}>
        <ul className={styles.packageDetails}>
          <li className={styles.time}>7 night 8 days tour</li>
          <li className={styles.type}>Family tour</li>
        </ul>
        <h2 className={styles.heading}>London aliqua irure proident esse</h2>
        <div className={styles.locationContainer}>
          <span className={styles.icon}>
            <CiLocationOn />
          </span>
          <span className={styles.location}>new delhi, India</span>
        </div>
        <div className={styles.RatingContainer}>
          <span className={styles.ratingCard}>
            <span className={styles.rating}>4.8/5</span>
            <span className={styles.ratingType}>Excellent</span>
          </span>
          <span className={styles.priceContainer}>
            <span className={styles.price}>
              <FaRupeeSign />
              2000
            </span>
            <span className={styles.priceDesc}>/Per person</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightOffers;
