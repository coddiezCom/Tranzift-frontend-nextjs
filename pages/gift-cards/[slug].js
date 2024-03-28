// import react liabary
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import styles from "../../styles/gift-card.module.scss";
// import MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { setGiftCardDetail } from "../../store/GiftCardSlice";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import form validation
import * as yup from "yup";
import { useFormik } from "formik";
// import toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import utility
import apiHelper from "../../utils/apiHelper";
// import react-icons
import { TfiGift } from "react-icons/tfi";
// import components
import GiftCardDetails from "../../components/GiftCard/GiftCardDetails";
import DeliveryMode from "../../components/GiftCard/DeliveryMode";
import BuyForSelf from "../../components/GiftCard/BuyForSelf";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));
function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}
MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};
const Index = ({ gift_card, error, sku, gift_cardDetail }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const giftCardInitialState = useSelector((state) => state.giftCardDetail);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("send_as_Gift");
  const minDenomination = gift_card?.price?.min ? gift_card?.price?.min : 1;
  const maxDenomination = gift_card?.price?.max ? gift_card?.price?.max : 100;
  // formik Validations
  const validationSchema = yup.object().shape({
    quantity: yup
      .number()
      .positive("Quantity should be a positive number")
      .typeError("Quantity should be a number")
      .min(1, "Quantity should be at least 1")
      .max(10, "Quantity can't be more than 10"),
    denomination: yup
      .number()
      .positive("Denomination should be a positive number")
      .typeError("Denomination should be a number")
      .min(minDenomination, `Denomination should be at least ${minDenomination}`)
      .max(maxDenomination, `Denomination can't be more than ${maxDenomination}`),
    // .string().matches(/^[0-9]*$/, "Denomination should contain only numbers"),
    reciver_name: yup
      .string()
      .matches(/^[A-Za-z ]+$/, "Receiver Name should contain only letters")
      .required("Receiver Name is required"),
    reciver_email: yup
      .string()
      .email("Enter a valid email")
      .when("DeliveryMode", {
        is: (val) => val === "Email" || val === "Both",
        then: yup.string().required("Receiver Email is required"),
      }),
    reciver_phone_number: yup.string().when("DeliveryMode", {
      is: (val) => val === "SMS" || val === "Both",
      then: yup
        .string()
        .min(10, "Receiver Phone Number is not valid. It should be 10 digits.")
        .max(10, "Receiver Phone Number is not valid. It should be 10 digits.")
        .required("Receiver Phone Number is required")
        .matches(/^[0-9]{10}$/, "Receiver Phone Number is not valid. It should be 10 digits."),
    }),
    reciver_message: yup.string().max(200, "Message should be at most 200 characters"),
  });
  // formik
  console.log(gift_card);
  const formik = useFormik({
    initialValues: {
      sku: giftCardInitialState?.sku,
      quantity: giftCardInitialState?.quantity || 1,
      denomination: giftCardInitialState?.denomination,
      reciver_name: giftCardInitialState?.reciver_name,
      reciver_email: giftCardInitialState?.reciver_email,
      reciver_phone_number: giftCardInitialState?.reciver_phone_number,
      reciver_message: giftCardInitialState?.reciver_message,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        setGiftCardDetail({
          ...giftCardInitialState, // Preserve other values
          ...values,
          gift_card_name: gift_card?.name,
          sku: gift_card?.sku,
        })
      );
      router.push(`/checkout?gift_card=${gift_card?.sku}`);
    },
  });
  // formik onChange
  const handleformChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };
  const handleDeliveryOption = (event) => {
    setSelectedDeliveryOption(event.target.value);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const buyForSeftData = {
    heading: "Add Gift Cards to your account",
    cards: [
      {
        url: "/images/icons/sendAsGift.jpg",
        alt: "sendAsGift",
        content:
          "If you want to print or forward this Email gift card with an attractive template, please select the 'Send as a Gift' option.",
      },
      {
        url: "/images/icons/addWallet.jpg",
        alt: "addWallet",
        content: "The e-gift card that you order from this page, will be added to your Woohoo account automatically.",
      },
      {
        url: "/images/icons/secure.jpg",
        alt: "secure",
        content: "For better security of your e-gift card, the details of your gift card will not be sent separately.",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>E-Gift Card</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta
          name="Keyword"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.giftCardContainer}>
        <div className={styles.__header}>
          <div className={`nav-link regular-x2 font-weight-bold active flex flex-row items-center gap-2`}>
            <TfiGift />
            <p>{gift_card?.price?.type}</p>
            <Link href={"/gift-cards"}>E-GIFT CARD</Link>
          </div>
        </div>
        <div className={styles.__card}>
          <GiftCardDetails
            card={gift_card}
            CardImg={{
              Mob: gift_cardDetail?.productImgMob,
              Web: gift_cardDetail?.productImgWeb,
            }}
            selectedDeliveryOption={selectedDeliveryOption}
            handleDeliveryOption={handleDeliveryOption}
            handleformChange={handleformChange}
            formik={formik}
          />
          {selectedDeliveryOption === "send_as_Gift" ? (
            <DeliveryMode formik={formik} handleformChange={handleformChange} />
          ) : (
            <BuyForSelf data={buyForSeftData} />
          )}
        </div>
        <div className={styles.__cardDesc}>
          <Box sx={{ width: "100%" }} className={styles.__tabsContainer}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }} className={styles.__tabsContainer}>
              <Tabs value={value} onChange={handleChange} className={styles.__tabs} aria-label="basic tabs example">
                <Tab label="DESCRIPTION" {...a11yProps(0)} className={styles.__headerTab} />
                <Tab label="TERMS & CONDITIONS" {...a11yProps(1)} className={styles.__headerTab} />
                {/* <Tab label="HOW TO REDEEM" {...a11yProps(2)} className={styles.__headerTab} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className={styles.__tabPanel}>
              <p>{gift_card?.description}</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className={styles.__tabPanel}>
              <p dangerouslySetInnerHTML={{ __html: gift_card?.tnc?.content }} />
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={2} className={styles.__tabPanel}>
              <ul>
                {howToRedeem.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </CustomTabPanel> */}
          </Box>
        </div>
      </div>
    </>
  );
};
export default Index;
export async function getServerSideProps(context) {
  try {
    const { query } = context;
    // const page = query.page ? query.page : 0;
    const gift_card = await getGiftCardById(query.slug);
    const sku = gift_card?.sku;
    let giftCardDetail;
    try {
      const gift_card = await getGiftCardDetail(sku);
      giftCardDetail = gift_card;
    } catch (error) {
      giftCardDetail = null;
      console.error("Error fetching getGiftCardDetail:");
    }
    return {
      props: {
        gift_card: gift_card,
        sku: "sku",
        gift_cardDetail: giftCardDetail.GCDetails,
        error: null, // Set error to null when there is no error
      },
    };
  } catch (error) {
    return {
      props: {
        gift_card: null, // Set gift_card to null when there is an error
        sku: null,
        gift_cardDetail: null,
        error: error.message || "error occurred",
      },
    };
  }
}
const getGiftCardById = async (productid) => {
  try {
    const searchResult = await apiHelper(`/woohooproduct/getdetails/${productid}`);
    return searchResult.giftCardDetails;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    throw error;
  }
};
const getRedeemInstructionByBrandId = async (brandId) => {
  const baseUrl = "http://localhost:3000/api/v3/gift-cards/redeem";
  const redeemInstructionParam = {
    brandId,
  };
  try {
    const searchResult = await axios.get(baseUrl, { params: redeemInstructionParam });
    return searchResult.data;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    throw error;
  }
};
const getGiftCardDetail = (sku) => {
  try {
    const baseUrl = `giftcards/gcdetails/${sku}`;
    const giftCardDetail = apiHelper(baseUrl);
    return giftCardDetail;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    throw error;
  }
};
