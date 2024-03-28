import React, { useState } from "react";
import styles from "./styles.module.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export const Accordion = ({ data }) => {
  const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
  ))(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .07)" : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .1)",
  }));
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.__Accordion}>
      {data.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            key={index}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
export const Banner = ({ data }) => {
  const { img } = data;
  return (
    <div className={styles.__bannerImg}>
      <Image src={img.url} width={500} height={500} alt={img.alt} />
    </div>
  );
};
const index = ({ hasBanner, header, FaqData, bannerData }) => {
  return (
    <div className={styles.__faqContainer}>
      <div className={styles.__faqContainer__heading}>
        <h2>{header}</h2>
      </div>
      <div className={styles.__faqContainer__content}>
        <Accordion data={FaqData} />
        {hasBanner && <Banner data={bannerData} />}
      </div>
    </div>
  );
};

export default index;
