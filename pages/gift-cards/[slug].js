/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import styles from "../../styles/gift-card.module.scss";
import { useRouter } from "next/router";
import { TfiGift } from "react-icons/tfi";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import getSymbolFromCurrency from "currency-symbol-map";
import "react-phone-input-2/lib/style.css";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DotLoaderSpinner from "@/components/loaders/dotLoader";
import { useDispatch, useSelector } from "react-redux";
// import { updateCart, addToCart } from "@/store/cartSlice";
import { validateEmail } from "@/utils/validation";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Textarea from "@mui/joy/Textarea";
import FormHelperText from "@mui/joy/FormHelperText";
import apiHelper from "@/utils/apiHelper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { load } from "@cashfreepayments/cashfree-js";
import Head from "next/head";
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
export const GiftCardDetailed = ({ card, data, selectedDeliveryOption, handleDeliveryOption, CardImg }) => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row" }}
      className={`${styles.GiftCardDetailed} shadow-md m-1  px-0 py-3 rounded-lg`}
    >
      <GiftCardImageContainer card={card} data={data} CardImg={CardImg} />
      <GiftCardFormContainer
        card={card}
        data={data}
        selectedDeliveryOption={selectedDeliveryOption}
        handleDeliveryOption={handleDeliveryOption}
      />
      <GiftCardOfferContainer card={card} data={data} />
    </Box>
  );
};
export const GiftCardImageContainer = ({ card, data, CardImg }) => {
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
  }, []);

  return (
    <CardContent sx={{ padding: 0 }} className={styles.__cardDetail}>
      <Typography gutterBottom variant="h6" sx={{ fontSize: "1em" }} component="div" className={styles.__name}>
        {card?.name}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ fontSize: "0.5em" }} component="div" className={styles.__valid}>
        {card?.expiry ? " Validity: " + card?.expiry : ""}
      </Typography>
      <div className={styles.__imageContainer}>
        <div className={styles.__discount}>
          {data.discounts[0]?.discount?.amount ? "Off " + data.discounts[0]?.discount?.amount + "%" : ""}
        </div>
        <CardMedia
          component="img"
          className={styles.__img}
          alt={"card.productName"}
          image={card_img ? card_img : "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg"}
        />
      </div>
      <Typography gutterBottom variant="p" sx={{ fontSize: "0.5em" }} component="div" className={styles.__validity}>
        Validity: xx xx xxxx
      </Typography>
    </CardContent>
  );
};
export const GiftCardFormContainer = ({ card, data, selectedDeliveryOption, handleDeliveryOption }) => {
  // console.log(card, "card");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("Send_as_Gift");
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const cancellationPolicy = [
    {
      heading: "REFUND AND CANCELLATION POLICY",
      data: [
        { content: "Refunds will be done only through the original payment method used for purchasing." },
        {
          content:
            "Refunds shall be applicable if weAreSeller does not deliver the goods to the delivery method provided by the buyer. For purchased digital/virtual products, refunds shall be applicable if, for any reason caused by weAreSeller, weAreSeller does not deliver the ordered product to the User’s registered email of sms phone number. ",
        },
        {
          content:
            "weAreSeller will offer a complete refund of the good’s value, or exchange with another good for any buyer if the ordered product was damaged during transit to delivery or not working properly. For digital/virtual products, if the voucher code/pin has been used/redeemed before the purchase date, the user must show a confirmation from the publisher that this voucher code/pin or license has been used/redeemed before the delivery time.",
        },
        { content: "Refunds, exchange or returns are NOT APPLICABLE to digital/virtual products." },
        {
          content:
            "If a user received a wrong product due to shipping error or omission from us, weAreSeller will deliver the correct product as soon as possible after receiving the returned order. For a digital product, weAreSeller will deliver the correct product to the User’s account within seventy-two (72) hours a complaint has been lodged.",
        },
        {
          content:
            "If a User is finding it difficult to redeem a purchased e-Card or Voucher code/pin on the merchant’s website or portal, the user should contact the merchant or publisher directly. The publisher’s contact details are made available on the brand page on the Website.",
        },
        {
          content:
            "weAreSeller is not responsible for any technical error or redemption issue on the merchant or the publisher's website or portal.",
        },
        { content: " An order cannot be cancelled once it has been made." },
      ],
    },
    {
      heading: "PURCHASE AND SHIPPING POLICY",
      data: [
        {
          content:
            "Any purchased products will be delivered to the shipping address filled on the order details, while digital or virtual products will be delivered via email or sms and physical delivery will not be needed unless the ordered voucher is physical. The User will be able to login to his/her registered account and download or view the purchased digital product.",
        },
        {
          content:
            "The User consent and acknowledge he/she has read the merchant, issuer or publisher description, restrictions, terms and condition, and system requirements for any product before making a purchase. The instructions and conditions are available before the payment page and supported by links to the publisher, issuers or merchants’ terms and conditions.",
        },
        {
          content:
            "Customers must read and accept “terms and conditions” instructions of every product bought carefully before using the product.",
        },
        {
          content:
            "weAreSeller is an online website made available for global online network and sales. Hence, users/buyers must buy the product which is usable or applicable to his/her country, region or residency only based on the publisher's regional instructions and restrictions! weAreSeller is not responsible for any damages caused by product misuse of any user.",
        },
        {
          content:
            "weAreSeller is not responsible if the user account got blocked on any merchant website or portal or third-party website due to service abuse, misuse or any other related offense.",
        },
        {
          content:
            " Physical product will be delivered to the shipping address within 3 working days. Digital product will be delivered within 24 hours.",
        },
        { content: "Each transaction includes a purchase fee." },
      ],
    },
  ];
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    name: Yup.string()
      .required("What's your name?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ\s]+$/, "Numbers and special characters are not allowed."),
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currencyCode, setCurrencyCode] = useState(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    quantity: 1,
    denomination: card?.denominationType == "RANGE" ? card?.minRecipientDenomination : "",
    OurTermNdConditions: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    quantity: "",
    denomination: "",
    OurTermNdConditions: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name == "denomination") {
      // Enforce maximum length of 10 digits
      if (value == "") {
        setFormData({ ...formData, denomination: value });
      } else if (parseInt(value) <= card.maxRecipientDenomination && parseInt(value) >= card.minRecipientDenomination) {
        setFormData({ ...formData, denomination: value });
      }
    } else if (name == "email") {
      // const email1 = validateEmail(value);
      if (!validateEmail(value)) {
        setFormErrors({ ...formErrors, [name]: "Enter a Valid Email" });
      } else if (validateEmail(value)) {
        setFormErrors({ ...formErrors, [name]: "" });
        setFormData({ ...formData, email: value });
      }
    } else if (name == "name") {
      try {
        // Validate the specific field using Yup
        await validationSchema.validateAt(name, { [name]: value });

        // Clear the error if validation passes
        setFormErrors({ ...formErrors, [name]: "" });

        // Update the form data
        setFormData({ ...formData, [name]: value });
      } catch (error) {
        // Handle Yup validation error
        setFormErrors({ ...formErrors, [name]: error.message });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };
  const checkFormValidation = () => {
    let isValid =
      !formErrors.denomination &&
      formData.denomination !== "" &&
      !formErrors.email &&
      formData.email !== "" &&
      !formErrors.name &&
      formData.name !== "" &&
      !formErrors.phoneNumber &&
      formData.phoneNumber !== "" &&
      !formErrors.quantity &&
      formData.quantity !== "" &&
      !formErrors.OurTermNdConditions &&
      formData.OurTermNdConditions !== false &&
      !formErrors.phoneNumber;
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = checkFormValidation();
    if (isValid) {
      addToCartHandler("data", true);
    } else {
      toast.error("Fill the Order Form Properly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const fetchCurrencyCode = async () => {
      try {
        const code = await getSymbolFromCurrency(card.recipientCurrencyCode);
        // console.log("Resolved currency code:", code);
        setCurrencyCode(code);
      } catch (error) {
        console.error("Error fetching currency code:", error);
        // Handle errors appropriately
      }
    };

    fetchCurrencyCode();
  }, [card?.recipientCurrencyCode]);
  // console.log(formData.phoneNumber, "card");
  const { cart } = useSelector((state) => ({ ...state }));
  const addToCartHandler = async (data, redirect) => {
    let exist = cart.cartItems.find((p) => orderData.productId === card.productId);
    // if (checkFormValidation()) {
    //   const orderData = {
    //     productId: card.productId,
    //     recipientCurrencyCode: card.recipientCurrencyCode,
    //     discountPercentage: card.discountPercentage,
    //     productName: card.productName,
    //     countryCode: card.country.isoName,
    //     quantity: formData.quantity,
    //     unitPrice: formData.denomination,
    //     customIdentifier: `${formData.name}-${Math.floor(Math.random() * 999) + 1}`,
    //     senderName: formData.name,
    //     recipientEmail: formData.email,
    //     recipientPhoneDetails: {
    //       countryCode: formData.phoneNumber.countryCode,
    //       phoneNumber: formData.phoneNumber.number,
    //     },
    //     logo: card?.logoUrls[0],
    //   };
    //   if (exist) {
    //     let newCart = cart.cartItems.map((p) => {
    //       if (orderData.productId == exist.productId) {
    //         return { ...orderData, qty: orderData.quantity };
    //       }
    //       return p;
    //     });
    //     dispatch(updateCart(newCart));
    //   } else {
    //     dispatch(
    //       addToCart({
    //         ...orderData,
    //         qty: 1,
    //       })
    //     );
    //     if (redirect) {
    //       router.push("/cart");
    //     } else {
    //       toast.success("GiftCard is Added", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     }
    //   }
    //   toast.success("Item is added to the cart", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } else {
    //   toast.error("Fill the Order Form Properly", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };
  const [loading, setLoading] = useState(false);

  const checkPhoneValidation = (country, value) => {
    const formatRegex = new RegExp(`\\+${country.format.replace(/\./g, "\\d")}`);
    // Get the source of the regular expression pattern
    const regexSource = formatRegex.source;
    // Initialize count variable
    let count = 0;
    // Loop through the regular expression pattern
    for (let i = 0; i < regexSource.length; i++) {
      // Check if the current character is '\d'
      if (regexSource[i] === "\\" && regexSource[i + 1] === "d") {
        count++;
      }
    }
    if (count == value.length || value.length == country.countryCode.length) {
      // setFormErrors({ ...formErrors, phoneNumber: "" })
      return true;
    } else {
      // setFormErrors({ ...formErrors, phoneNumber: "Enter a valid Number" })
      return "Enter a valid Number";
    }
  };
  // console.log(randomize("randomthis"), "randomize")
  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}

      <Box
        component="form"
        className={styles.__cardForm}
        onSubmit={() => {
          handleSubmit();
        }}
      >
        {card?.price?.type == "FIXED" ? (
          <>
            <Typography
              component="p"
              sx={{ fontSize: "1em", margin: 0, padding: 0, fontWeight: "600", textAlign: "start" }}
              className={styles.__denominationFixed}
            >
              <span>Amount: </span>
              <span>
                {data.price.denomination &&
                  data?.price?.denomination?.map((item, index) => {
                    return (
                      <Button
                        variant="outlined"
                        className={styles.__denominationBtn}
                        sx={{ color: "gray", borderColor: "gray" }}
                        key={index}
                        onClick={() => {
                          setFormData({ ...formData, denomination: item });
                        }}
                        name="fixedDenomination"
                      >
                        {`${data?.price?.currency?.symbol}  ${item}`}
                      </Button>
                    );
                  })}
              </span>
            </Typography>
          </>
        ) : (
          <>
            <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__denominationVary}>
              <TextField
                sx={{ margin: 0, padding: 0 }}
                className={styles.__denominationInput}
                required
                id=" "
                type="number"
                name="denomination"
                label="Enter denomination"
                defaultValue={formData?.denomination}
                onChange={handleChange}
                variant="standard"
                value={formData?.denomination}
                helperText={`Min: ${card?.price?.min} Max: ${card?.price?.max}`}
                // onChange={handleChange}
              />
            </CardContent>
          </>
        )}
        <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__quentity}>
          <TextField
            sx={{ margin: 0, padding: 0 }}
            className={styles.__quentityInput}
            required
            id=" "
            type="number"
            name="quantity"
            label="Quantity"
            defaultValue={1}
            onChange={handleChange}
            variant="standard"
            value={1}
            helperText={`Min: 0 Max: 10`}
            // onChange={handleChange}
          />
        </CardContent>

        <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__deliveryOptions}>
          <FormLabel id="demo-controlled-radio-buttons-group">Delivery Options</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="demo-controlled-radio-buttons-group"
            value={selectedDeliveryOption}
            onChange={handleDeliveryOption}
          >
            <FormControlLabel value="send_as_Gift" control={<Radio color="warning" />} label="Send as Gift" />
            <FormControlLabel
              value="buy_for_Self"
              control={<Radio color="warning" />}
              label="Buy for Self (This E-gift card will be added to your account)"
            />
          </RadioGroup>
        </CardContent>
      </Box>
    </>
  );
};
export const GiftCardOfferContainer = ({ data, card }) => {
  const content = <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>;
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  const handleCopy = (codeToCopy) => {
    // console.log("Text copied to clipboard:", codeToCopy);
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
    // You can add any additional logic here, like showing a success message
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
export const DeliveryMode = ({ data }) => {
  const router = useRouter();
  let cashfree;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  initializeSDK();

  const handleChange = async (e) => {
    // console.log(e);
  };
  const [DeliveryMode, setDeliveryMode] = useState("Email");
  const handleDeliveryMode = (e) => {
    setDeliveryMode(e.target.value);
  };

  const UserDetail = useSelector((state) => state.userDetail);
  const doPayment = async () => {
    console.log(UserDetail, "UserDetail1");
    try {
      const sampleData = {
        amount: 10,
        username: UserDetail?.user_name,
        name: "akash",
        email: UserDetail?.email_id,
        mobile: "8130184926",
      };
      const orderResponse = await axios.post("http://127.0.0.1:8000/api/v1/payment/createorder", sampleData);
      let checkoutOptions = {
        paymentSessionId: orderResponse.data.data.payment_session_id,
        redirectTarget: "_self",
      };
      console.log(orderResponse, "orderResponse");
      cashfree.checkout(checkoutOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.__deliveryModeContainer}>
      <div className={styles.__deliveryMode}>
        <div className={styles.__heading}>
          <h3>Delivery Mode</h3>
        </div>
        <div className={styles.__content}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={DeliveryMode}
              onChange={handleDeliveryMode}
            >
              <FormControlLabel value="Email" control={<Radio color="warning" />} label="Email" />
              <FormControlLabel value="SMS" control={<Radio color="warning" />} label="SMS" />
              <FormControlLabel value="Both" control={<Radio color="warning" />} label="Both" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className={styles.__giftingDetails}>
        <div className={styles.__heading}>
          <h3>Gifting Details</h3>
        </div>
        <div className={styles.__form}>
          <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_name}>
            <TextField
              sx={{ margin: 0, padding: 0 }}
              className={styles.__reciver_name_input}
              required
              id=" "
              type="text"
              name="reciver_name"
              label="Reciever Name"
              onChange={handleChange}
              variant="standard"
            />
          </CardContent>
          {(DeliveryMode == "Email" || DeliveryMode == "Both") && (
            <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_email}>
              <TextField
                sx={{ margin: 0, padding: 0 }}
                className={styles.__reciver_email_input}
                required
                id=" "
                type="email"
                name="reciver_email"
                label="Reciever Email"
                onChange={handleChange}
                variant="standard"
                helperText={`Will be delivered this id via Email`}
              />
            </CardContent>
          )}
          {(DeliveryMode == "SMS" || DeliveryMode == "Both") && (
            <CardContent
              sx={{
                margin: 0,
                padding: 0,
              }}
              className={styles.__reciver_number}
            >
              <TextField
                sx={{ margin: 0, padding: 0 }}
                className={styles.__reciver_number_input}
                required
                id=" "
                type="number"
                name="reciver_number"
                label="Reciever's Mobile Number"
                // defaultValue={1}
                onChange={handleChange}
                variant="standard"
                value={1}
                helperText={`Will be delivered to this number via SMS`}
                // onChange={handleChange}
              />
            </CardContent>
          )}
          {(DeliveryMode == "Email" || DeliveryMode == "SMS") && (
            <CardContent className={styles.__empty} sx={{ margin: 0, padding: 0, visibility: "hidden" }}></CardContent>
          )}
          <CardContent sx={{ margin: 0, padding: 0 }} className={styles.__reciver_message}>
            <Textarea
              className={styles.__reciver_message_input}
              aria-label="minimum height"
              name="reciver_message"
              value=""
              maxRows={2}
              minRows={2}
              placeholder="Message for Reciever"
              variant="standard"
              onChange={handleChange}
            />
            <FormHelperText>200 Character</FormHelperText>
          </CardContent>
          <div onClick={() => router.push("/checkout")}>
            <button className={`${styles.__submit} transition hover:scale-105 ease-in-out duration-700 `}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BuyForSelf = ({ data }) => {
  const data_ = {
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
    <div className={styles.__buyForSelf}>
      <div className={styles.__heading}>{data_.heading}</div>
      <ul className={styles.__cards}>
        {data_.cards.map((item, index) => {
          return (
            <li key={index}>
              <span className={styles.ImgContainer}>
                <Image src={item.url} alt={item.alt} width={100} height={100} />
              </span>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Index = ({ gift_card, error, sku, gift_cardDetail }) => {
  const router = useRouter();

  const data = {
    id: "24",
    sku: "GBV2PLEGC001",
    name: "Flipkart E-Gift Card base",
    description:
      "We live in a country that likes to celebrate its occasions by gifting. If Diwali isn't fast approaching then your anniversary surely is. We're forever bound by the challenge of 'how to top up last year's present?' \r\nThis is where Pantaloons Gift cards make an entry – gifting should be a joy for the receiver as much as for the shopper. You can gift them to your loved ones and be assured that they'll love treating themselves to their favourite things! Our gift cards are the perfect gift to give. Mission surprise and delight, completed.",
    price: {
      price: "RANGE",
      type: "RANGE",
      min: "100",
      max: "10000",
      denominations: ["100", "200", "300", "400", "500"],
      currency: { code: "INR", symbol: "₹", numericCode: "356" },
      cpg: [],
    },
    kycEnabled: "0",
    additionalForm: null,
    metaInformation: {
      page: { title: "Pantaloons E-Gift Card" },
      meta: {
        title: "Pantaloons E-Gift Card",
        keywords: "Pantaloons E-Gift Card",
        description: "Pantaloons E-Gift Card",
      },
      canonical: { url: null },
    },
    type: "DIGITAL",
    schedulingEnabled: false,
    currency: "356",
    images: {
      thumbnail: "https://gbdev.s3.amazonaws.com/uat/product/GBV2PLEGC001/d/thumbnail/24_microsite.jpg",
      mobile: "https://gbdev.s3.amazonaws.com/uat/product/GBV2PLEGC001/d/mobile/24_microsite.jpg",
      base: "https://gbdev.s3.amazonaws.com/uat/product/GBV2PLEGC001/d/image/24_microsite.jpg",
      small: "https://gbdev.s3.amazonaws.com/uat/product/GBV2PLEGC001/d/small_image/24_microsite.jpg",
    },
    tnc: {
      link: "https://woohooqa.app.link/e/6CjTB9artfb",
      content:
        'Amazon Gift Cards ("GCs") are issued by the Qwikcilver Solutions Private limited ("Qwikcilver"). Credit and Debit Cards issued outside India cannot be used to purchase Amazon.in Gift Cards.<br/>To add your GC to your Amazon Pay balance, visit www.amazon.in/addgiftcard<br/>Beneficiary can apply the 14 digit code (under scratch card) on amazon.in/addgiftcard and add the gift card balance in his/her Amazon.in account. This balance gets automatically applied at the time of next purchase. There is no cap on number of gift cards that can be added to an account.<br/>Amazon Pay balance is a sum of all balances associated with the GCs in your Amazon.in account.<br/>Amazon Pay balance are redeemable across all products on Amazon.in except apps, certain global store products and other Amazon.in gift cards.<br/>Amazon Pay balance must be used only towards the purchase of eligible products on amazon.in<br/>The GCs, including any unused Amazon Pay balance, expire one year from the date of issuance of the GC<br/>GCs cannot be transferred for value or redeemed for the cash.<br/>Qwikcilver, Amazon Seller Services Private Limited (Amazon) or their affiliates are not responsible if a GC is lost, stolen, destroyed or used without permission.<br/>For Complete terms and conditions, see www.amazon.in/giftcardtnc<br/>Amazon.in logo/trademark is an IP of Amazon or its affiliates and the Qwikcilver trademark/logo is an IP of Qwikcilver.<br/>To redeem your GC, visit www.amazon.in/addgiftcard<br/>E-Gift Cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 - 48 hours.<br/>For detailed T&Cs of this E-Gift Card please refer www.woohoo.in/termsandconditions<br/>Certain merchants may provide you services only on the pre-condition that you allow us to hold balances in your Amazon Pay balance: Gift Card till the service completion by the merchant. However, your prior consent would be taken before holding such balances. In such cases, you agree and authorize us to: (i) hold your balance until service completion; and (ii) fail the transaction if your balance in the Amazon Pay Gift Card is less than the actual amount charged by the merchant at the end of the services.<br/>You may request for revalidation of any expired Gift Cards. Upon receipt of such request, the Gift Card may be revalidated after due verification and subject to applicable terms and conditions.<br/>No returns and no refunds on gift cards, e-gift cards and gift vouchers shipped by woohoo.in. Please check the refund policy at http://www.woohoo.in/faq for further details.',
    },
    categories: [
      "5",
      "7",
      "22",
      "23",
      "25",
      "28",
      "45",
      "50",
      "51",
      "52",
      "54",
      "83",
      "108",
      "118",
      "121",
      "154",
      "165",
      "188",
      "271",
    ],
    themes: [
      {
        sku: "莎拉莎拉",
        price: "10.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/莎拉莎拉_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/莎拉莎拉_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/莎拉莎拉_email.jpeg",
      },
      {
        sku: "best_wishes",
        price: "0.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/best_wishes_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/best_wishes_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/best_wishes_email.jpeg",
      },
      {
        sku: "congo",
        price: "0.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/congo_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/congo_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/congo_email.jpeg",
      },
      {
        sku: "thanku",
        price: "0.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/thanku_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/thanku_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/thanku_email.jpeg",
      },
      {
        sku: "wedding",
        price: "0.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/wedding_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/wedding_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/wedding_email.jpeg",
      },
      {
        sku: "valentine",
        price: "0.0000",
        image: "https://static-uat.woohoo.in/media/catalog/customoptions/valentine_thumnail.jpeg",
        pdfImage: "https://static-uat.woohoo.in/media/catalog/customoptions/valentine_pdf.jpeg",
        emailImage: "https://static-uat.woohoo.in/media/catalog/customoptions/valentine_email.jpeg",
      },
    ],
    customThemesAvailable: true,
    handlingCharges: [],
    reloadCardNumber: false,
    expiry: "1 year from the date of issue",
    formatExpiry: null,
    discounts: [
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
    ],
    relatedProducts: [],
    storeLocatorUrl: null,
    brandName: "Jabong",
    etaMessage: "",
    createdAt: "2015-09-08T23:03:59+00:00",
    updatedAt: "2023-08-05T03:49:50+00:00",
    cpg: {
      barcode: { encoding: null },
      redemptionTerms: [],
      type: "clp",
      code: "Page Test eGift Card",
      erupi_purpose: null,
      erupi_payer_type: null,
      erupi_payee_type: null,
      erupi_recurrence_pattern: null,
      erupi_validity: null,
    },
    payout: {
      enabled: true,
      payment_methods: ["svc"],
      account_types: ["BANK_ACCOUNT", "UPI"],
      transaction_types: ["IMPS", "NEFT", "UPI"],
      maximum_beneficiaries: "1",
      validate_terms_and_condition: "",
      validation: {
        amount: "1",
        edit_beneficiary: true,
        convenience_charge: "",
      },
    },
    convenience_charges: [],
    allowedfulfillments: [{ code: false }],
  };
  const howToRedeem = [
    "Visit the outlet near you.",
    "Before making the purchase confirm about the acceptance of Gift Card at the store.",
    "Choose the products you would like to buy.",
    "Show your Gift Card details to the cashier at the time of billing & pay any balance amount by cash or card.",
  ];
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("send_as_Gift");
  const handleDeliveryOption = (event) => {
    setSelectedDeliveryOption(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const img = {
    Mob: gift_cardDetail?.productImgMob,
    Web: gift_cardDetail?.productImgWeb,
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
          <div class={`nav-link regular-x2 font-weight-bold active flex flex-row items-center gap-2`}>
            <TfiGift />
            <Link href={"/gift-cards"}>E-GIFT CARD</Link>
          </div>
        </div>
        <div className={styles.__card}>
          <GiftCardDetailed
            card={gift_card}
            data={data}
            CardImg={img}
            selectedDeliveryOption={selectedDeliveryOption}
            handleDeliveryOption={handleDeliveryOption}
          />
          {selectedDeliveryOption === "send_as_Gift" ? <DeliveryMode /> : <BuyForSelf />}
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
    // console.log(searchResult);
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
