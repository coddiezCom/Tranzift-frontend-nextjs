// import react liabrary
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import image
import Image from "next/image";
// import MUI Components
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import styles
import styles from "../../styles/gift-card.module.scss";

const Index = ({ card }) => {
  const router = useRouter();
  const handleBuyNow = (productId) => {
    router.push(`/gift-cards/${productId}`);
  };
  return (
    <>
      <div
        className={`${styles.gift_card} shadow-sm rounded-xl   transition duration-700 cursor-pointer ease-out    p-2        hover:shadow-2xl hover:scale-105 `}
        onClick={() => handleBuyNow(card.sku)}
      >
        <div className={`${styles.gift_card__imageContainer}`}>
          {card?.discountPercentage > 0 && (
            <span className={`${styles.gift_card__discount}`}>
              <span className={`${styles.gift_card__discount__img}`}>
                <Image src={"/images/icons/offerImg.png"} width={500} height={500} alt="discount" />
              </span>
              <span className={`${styles.gift_card__discount__text}`}>Off {card?.discountPercentage} %</span>
            </span>
          )}
          <CardMedia
            component="img"
            alt={card?.nameOnWoohoo}
            className={`${styles.gift_card__img}`}
            height="140"
            image={card?.productImgWeb ? card?.productImgWeb : "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"}
          />
        </div>
        <CardContent className={`${styles.gift_card__content}`}>
          <Typography className={`${styles.gift_card__name__nd_valid}`} gutterBottom variant="h6" component="div">
            <span>{card?.nameOnWoohoo.substr(0, 35) + ".."}</span>
          </Typography>
        </CardContent>
      </div>
    </>
  );
};

export default Index;
