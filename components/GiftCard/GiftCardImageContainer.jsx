// import react Liabrary
import React from "react";
import { useState, useEffect } from "react";
// import MUI Components
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
// import styles
import styles from "../../styles/gift-card.module.scss";
const Index = ({ card, CardImg }) => {
  const [card_img, setCard_img] = useState("");
  useEffect(() => {
    if (typeof window != "undefined") {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setCard_img(CardImg.Mob);
      } else {
        setCard_img(CardImg.Web);
      }
    }
  }, [CardImg.Mob, CardImg.Web]);
  const discounts = [
    {
      startDate: "2023-08-13T18:30:00+0000",
      endDate: "2024-03-31T18:29:59+0000",
      discount: {
        type: "by_percent",
        amount: 6.5,
        desc: "Flat 6.5% OFF | Applicable on payment via UPI",
      },
      coupon: {
        code: "SPAR6",
      },
      priority: 0,
    },
    {
      startDate: "2023-08-27T18:30:00+0000",
      endDate: "2024-03-31T18:29:59+0000",
      discount: {
        type: "by_percent",
        amount: 5,
        desc: "Flat 5% OFF | Applicable on payment via UPI, Debit Card, Credit Card, Net Banking & Mobikwik Wallet.",
      },
      coupon: {
        code: "SPARD5",
      },
      priority: 1,
    },
  ];
  return (
    <CardContent sx={{ padding: 0 }} className={styles.__cardDetail}>
      <Typography gutterBottom variant="h6" sx={{ fontSize: "1em" }} component="div" className={styles.__name}>
        {card?.name.substr(0, 24) + "..."}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ fontSize: "0.5em" }} component="div" className={styles.__valid}>
        {card?.expiry ? " Validity: " + card?.expiry : ""}
      </Typography>
      <div className={styles.__imageContainer}>
        <div className={styles.__discount}>
          {discounts[0]?.discount?.amount ? "Off " + discounts[0]?.discount?.amount + "%" : ""}
        </div>
        <CardMedia
          component="img"
          className={styles.__img}
          alt={"card.productName"}
          image={card_img ? card_img : "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"}
        />
      </div>
    </CardContent>
  );
};

export default Index;
