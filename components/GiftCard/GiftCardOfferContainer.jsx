// import react liabary
import React from "react";
import Image from "next/image";
// import MUI Components
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import Copy component
import CopyToClipboard from "react-copy-to-clipboard";
// import styles
import { styled } from "@mui/material/styles";
import styles from "../../styles/gift-card.module.scss";
const Index = ({ card }) => {
  // console.log(card, "card");
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  const handleCopy = (codeToCopy) => {
    toast.success(`coply to clipboard: ${codeToCopy}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <Box
      sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row" }}
      className={styles.__offerContainer}
    >
      <Root>
        <Divider textAlign="left">OFFERS</Divider>
      </Root>
      <ul className={styles.__offerList}>
        {card?.discounts > 0 ? (
          card?.discounts?.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  <span>
                    <Image src={"/images/icons/offerIcon.png"} alt="offerIcon" width={100} height={100} />
                  </span>
                  <span>
                    <p>USE CODE:</p>
                    <CopyToClipboard text={item?.coupon?.code} onCopy={() => handleCopy(item?.coupon?.code)}>
                      <p style={{ cursor: "pointer" }}>{item?.coupon?.code}</p>
                    </CopyToClipboard>
                  </span>
                </span>
                <span>
                  <p>{item?.discount?.desc}</p>
                </span>
              </li>
            );
          })
        ) : (
          <li> No Offers Available </li>
        )}
      </ul>
    </Box>
  );
};

export default Index;
