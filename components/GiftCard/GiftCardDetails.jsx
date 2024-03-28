// import react liabary
import React from "react";
// import Components
import GiftCardImageContainer from "./GiftCardImageContainer";
import GiftCardFormContainer from "./GiftCardFormContainer";
import GiftCardOfferContainer from "./GiftCardOfferContainer";
// import Mui Components
import Box from "@mui/material/Box";
// import styles
import styles from "../../styles/gift-card.module.scss";
const Index = ({ card, selectedDeliveryOption, handleDeliveryOption, CardImg, formik, handleformChange }) => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row" }}
      className={`${styles.GiftCardDetailed} shadow-md m-1  px-0 py-3 rounded-lg`}
    >
      <GiftCardImageContainer card={card} CardImg={CardImg} />
      <GiftCardFormContainer
        card={card}
        formik={formik}
        handleformChange={handleformChange}
        selectedDeliveryOption={selectedDeliveryOption}
        handleDeliveryOption={handleDeliveryOption}
      />
      <GiftCardOfferContainer card={card} />
    </Box>
  );
};

export default Index;
