import React, { useState } from "react";
import styles from "../../styles/pay_bill.module.scss";
import Banner from "../../components/Banner";
import Image from "next/image";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import AdminInput from "../../components/inputs/adminInput";
import SingularSelect from "../../components/selects/SingularSelect";
import Faq from "../../components/Faq";
export const PayBillContainer = () => {
  const initialvalues = {
    paytype: "",
    fName: "",
    lName: "",
    phone: "",
    email: "",
    OurTerms: "",
    success: "",
    error: "",
  };
  const [loading, setLoading] = useState(false);
  const data = {
    heading: {
      mainHeading: "Pay Bill and Fee",
      subHeading: "Lowest Charges. Instant Transfers.",
    },
    ourServices: [
      {
        heading: {
          mainHeading: "Cashback Dhamaka",
          subHeading: "It's raining cashback! Every 100th user gets ₹100 or ₹1000 cashback",
        },
        img: {
          url: "/images/payBill/cashback.png",
          alt: "cashback",
        },
      },
      {
        heading: {
          mainHeading: "Renter's Club",
          subHeading: "Get 50% Off on processing fees by inviting your friends",
        },
        img: {
          url: "/images/payBill/refer.png",
          alt: "refer",
        },
      },
      {
        heading: {
          mainHeading: "Pay Society Maintenance",
          subHeading: "All your property payments at one place - rent, maintenance, deposit, token",
        },
        img: {
          url: "/images/payBill/society_maintenance.png",
          alt: "society_maintenance",
        },
      },
      {
        heading: {
          mainHeading: "Earn Rewards upto ₹30,000/-",
          subHeading:
            "Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.",
        },
        img: {
          url: "/images/payBill/reward.png",
          alt: "",
        },
      },
      {
        heading: {
          mainHeading: "Pay with Credit Card",
          subHeading: "We accept major cards like Visa and Mastercard so your property payment is hassle free.",
        },
        img: {
          url: "/images/payBill/credit_card.png",
          alt: "",
        },
      },
      {
        heading: {
          mainHeading: "Digital Receipts",
          subHeading:
            "Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.",
        },
        img: {
          url: "/images/payBill/recept.png",
          alt: "",
        },
      },
      {
        heading: {
          mainHeading: "Tranzift Trust",
          subHeading: "Tranzift Pay is a product by Tranzift and is 100% secure with PCI compliant payment gateway.",
        },
        img: {
          url: "/images/payBill/trust.png",
          alt: "",
        },
      },
    ],
  };
  const [user, setUser] = useState(initialvalues);
  const { paytype, fName, lName, phone, email, OurTerms, success, error } = user;
  const [parent, setParent] = useState("");

  const validate = Yup.object({
    paytype: Yup.string().required("Please choose a payment type."),
    fName: Yup.string()
      .required("First name is required.")
      .min(2, "First name must be bewteen 2 and 30 characters.")
      .max(30, "First name must be bewteen 2 and 30 characters."),
    lName: Yup.string()
      .required("Last name is required.")
      .min(2, "Last name must be bewteen 2 and 30 characters.")
      .max(30, "Last name must be bewteen 2 and 30 characters."),
    phone: Yup.number()
      .required("Phone number is required.")
      .min(10, "Phone number must be 10 digits.")
      .max(10, "Phone number must be 10 digits."),
    email: Yup.string().email("Email is invalid.").required("Email is required."),
    OurTerms: Yup.string().required("Please accept our terms and conditions."),
  });
  const submitHandler = async () => {
    try {
      const { data } = await axios.post("/api/admin/subCategory", {
        name,
        parent,
      });
      setSubCategories(data.subCategories);
      setName("");
      setParent("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const categories = [
    {
      _id: "65403a8d0cf9cf17853d2b23",
      name: "Ladies Purse",
      slug: "ladies-purse",
      createdAt: "2023-10-30T23:21:49.193Z",
      updatedAt: "2023-10-30T23:21:49.193Z",
      __v: 0,
    },
    {
      _id: "62d69f9e60276c9915a995b8",
      name: "Women Clothing",
      slug: "women-clothing",
      createdAt: "2022-07-19T12:12:14.124Z",
      updatedAt: "2022-07-19T12:12:14.124Z",
      __v: 0,
    },
    {
      _id: "62cfeb1e119f0cd432b478d6",
      name: "Men's Clothing",
      slug: "men's-clothing",
      createdAt: "2022-07-14T10:08:30.799Z",
      updatedAt: "2022-07-14T10:08:30.799Z",
      __v: 0,
    },
    {
      _id: "62c46ff0062128444ad59193",
      name: "Women's Clothing",
      slug: "women's-clothing",
      createdAt: "2022-07-05T17:08:00.067Z",
      updatedAt: "2022-07-05T17:08:00.067Z",
      __v: 0,
    },
    {
      _id: "62c2bdd58b564896ec16cc6b",
      name: "Gaming",
      slug: "gaming",
      createdAt: "2022-07-04T10:15:49.921Z",
      updatedAt: "2022-07-04T10:15:49.921Z",
      __v: 0,
    },
  ];
  return (
    <div className={styles.__payBill}>
      <div className={styles.__payBill__Container}>
        <div className={styles.__heading}>
          <h2>{data.heading.mainHeading}</h2>
          <h3>{data.heading.subHeading}</h3>
        </div>
        <div className={styles.__payBillCardContainer}>
          <div className={styles.__leftContainer}>
            {data.ourServices.map((item, index) => {
              return (
                <div key={index} className={styles.__card}>
                  <span className={`${styles.__imgContainer} rounded-md`}>
                    <span className={styles.ImgContainer} style={{ backgroundImage: `url(${item.img.url})` }}></span>
                  </span>
                  <span className={styles.__contentContainer}>
                    <h2>{item.heading.mainHeading}</h2>
                    <p>{item.heading.subHeading}</p>
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.__rightContainer}>
            <div className="shadow-lg rounded-lg bg-gray-300 w-3/4">
              <h3>Pay Bill</h3>
              <Formik
                enableReinitialize
                initialValues={{ paytype, fName, lName, phone, email, OurTerms }}
                validationSchema={validate}
                onSubmit={() => {
                  submitHandler();
                }}
              >
                {(formik) => (
                  <Form>
                    <div className={styles.__paytype}>
                      <label className={styles.header}>Payment Type</label>
                      <SingularSelect
                        styleType={"style2"}
                        name="paytype"
                        value={paytype}
                        data={categories}
                        placeholder="Select Payment Type"
                        handleChange={(e) => setParent(e.target.value)}
                      />
                    </div>
                    <div className={styles.__Fname}>
                      <AdminInput
                        styleType={"style2"}
                        type="text"
                        label="Your First Name"
                        name="fName"
                        value={fName}
                        placeholder="Enter your first Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.__Lname}>
                      <AdminInput
                        styleType={"style2"}
                        type="text"
                        label="Your Last Name"
                        name="lName"
                        value={lName}
                        placeholder="Enter your last Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.__phone}>
                      <AdminInput
                        styleType={"style2"}
                        type="number"
                        label="Mobile Number"
                        name="phone"
                        value={phone}
                        placeholder="Enter phone Number"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.__email}>
                      <AdminInput
                        styleType={"style2"}
                        type="text"
                        label="Your Email"
                        name="email"
                        value={email}
                        placeholder="Enter your Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.__OurTerms}>
                      <AdminInput
                        styleType={"style2"}
                        type="checkbox"
                        label="I agree to the Tranzift Terms and Conditions"
                        name="OurTerms"
                        value={OurTerms}
                        placeholder="I agree to the Tranzift Terms and Conditions"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.btnWrap}>
                      <button type="submit" className={`${styles.btn} `}>
                        Get Started
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PayBillMiddleBanner = () => {
  return (
    <div className={styles.__PayBillMiddleBannerContainer}>
      <div className={styles.__cardContainer}>
        <div className={styles.__card}>
          <h2>Earn money with Tranzift Pay</h2>
          <p>Start paying rent using your credit card and earn miles, cashback and reward points.</p>
        </div>
        <div className={styles.__card}>
          <span>
            <Image src={"/images/icons/paybill.png"} alt="" width={500} height={500} />
          </span>
          <p>You can earn up to ₹30,000* by just paying rent for a year by using your credit card.</p>
        </div>
      </div>
      <div className={styles.__terms}>
        <p>*This is calculated assuming an annual rent of 4.5 Lakhs on a Club Vistara SBI Card PRIME (Premium)</p>
      </div>
    </div>
  );
};
export const BusinessPayment = () => {
  const cards = [
    {
      img: {
        url: "/images/icons/user_icon.png",
        alt: "user_icon",
      },
      desc: "Register on the app",
    },
    {
      img: {
        url: "/images/icons/complete.png",
        alt: "complete",
      },
      desc: "Add your Credit Card",
    },
    {
      img: {
        url: "/images/icons/bank.png",
        alt: "bank",
      },
      desc: "Add payee bank account",
    },
    {
      img: {
        url: "/images/icons/wallet.png",
        alt: "wallet",
      },
      desc: "Pay!",
    },
  ];
  return (
    <div className={styles.__businessPaymentContainer}>
      <div className={styles.__heading}>
        <p>
          Step up your
          <span style={{ color: "#ff8eb5" }}> Business Payments </span>
          Game
        </p>
      </div>
      <div className={styles.__cardContainer}>
        {cards.map((items, index) => {
          return (
            <div className={styles.__container} key={index}>
              <div className={styles.__card}>
                <span>
                  <Image src={items.img.url} alt={items.img.alt} width={500} height={500} />
                </span>
                <span>
                  <p>{items.desc}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Invoice = () => {
  const data = {
    companyDetail: {
      logo: {
        url: "/logo.png",
        alt: "company logo",
      },
      contactDetail: {
        address: {
          line1: "One97 Communications Limited",
          line2: " B-121 Sector 5 Noida 201301 Uttar Pradesh",
        },
        PAN: "AAACO4007A",
        GSTIN: "09AAACO4007A123",
        CIN: "L72200DL2000PLC108985",
      },
    },
    userDetail: {
      name: "Jaspreet singh",
      contactDetail: {
        email: "Jaspreetsingh09912@gmail.com",
        phone: "1234567890",
      },
    },
    heading: "INVOICE",
    OrderId: "22869315180",
    InvoiceNumber: "RU23000446588461",
    InvoiceDate: "21 Jan, 2024, 11:03 AM",
    PlaceOfSupply: "Delhi",
    TRN_RefNo: "7058152052636102905958",
    HSIN_Code: "998599/Other Support Services",
    availService: {
      name: "Gift-card",
      amount: 100,
      quentity: 1,
      description: "Purchasing ",
      GST: {
        percent: 18,
      },
      SGST: {
        percent: 9,
      },
      CGST: {
        percent: 9,
      },
    },
  };
  return <div className={styles.__invoiceContainer}></div>;
};
export const Receipt = () => {
  return <div></div>;
};
const index = () => {
  const bannerImages = [
    {
      url: "/images/banner/payBillPay-1.png",
      alt: "mainBanner",
    },
    {
      url: "/images/banner/payBillPay-2.png",
      alt: "mainBanner",
    },
    {
      url: "/images/banner/payBillPay-3.png",
      alt: "mainBanner",
    },
  ];
  const FaqData = [
    {
      question: "How secure is Tranzift Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. Tranzift Pay does not store any of your financial information.",
    },
    {
      question: "What are the benefits of using Tranzift Pay?",
      answer:
        "Tranzift Pay allows you to pay your house rent using a range of payment options like Credit Cards, Debit Cards, E-Wallets etc. By using your card on Tranzift Pay, you stand to earn cashback and/or reward points based on your card’s reward schemes.",
    },
    {
      question: "What are the fees/charges for using Tranzift Pay?",
      answer:
        "We may levy a fee on making a payment via Tranzift Pay. The fee is mentioned on the payment page and included in the total payment when you are about to make the payment",
    },
    {
      question: "How do I make my house rent payment on Tranzift Pay?",
      answer:
        "The first time you use Tranzift Pay you will need to enter basic details such as – landlord’s contact &amp; account details, monthly rent amount and date of payment. These details are needed only ONCE, thereafter, you can make payments by just choosing your preferred mode of payment.",
    },
    {
      question: "How do I earn cashback/ rewards with Tranzift Pay?",
      answer:
        "When you make your rent payment on Tranzift Pay with a credit/debit card, you earn reward points, cashback or air miles on your transaction. If you don’t know how much you can earn, contact your bank, they will assist you as it depends on the card you have",
    },
    {
      question: "How does Tranzift pay my landlord?",
      answer:
        "When you submit your landlord’s bank details on Tranzift Pay and make your payment, we verify these details and transfer the rent amount directly to your landlord’s bank account. Please note that transfer may take up to 2 working days to reflect in your landlord’s bank account.",
    },
    {
      question: "I had made a payment but my transaction was put on hold, what to do now?",
      answer:
        "Our systems verify every payment using proprietary algorithms and put the transaction on hold if it does not look like a genuine rental transfer from tenant to landlord. In such cases, you need to upload your valid rental agreement to proceed with the transaction.",
    },
    {
      question: "How will my rent payment reflect in my landlord’s bank account?",
      answer:
        "Your rent payment will reflect in your landlord’s bank account from Tranzift with description - “September Rent Payment from Nithin”. The month will change based on when you make the payment and your name will be as per the details you provide us.",
    },

    {
      question: "If I have made the rent payment now, when will my landlord get the amount?",
      answer:
        "Although we try to process all payments as soon as possible, it may take up to 2 working days for the payment to reflect in your landlord’s bank account and statements.",
    },
    {
      question: "Does Tranzift provide any cashback/rewards?",
      answer:
        "The cashback / rewards / miles are provided by your respective card issuing banks. Tranzift does not provide any cashback or rewards.",
    },
    {
      question: "My landlord is not registered on Tranzift. Can I still pay my rent?",
      answer:
        "Absolutely! Your landlord does not need to be registered on Tranzift Pay to receive your rent amount. We send a confirmation SMS to both you and your landlord on successful rent payment. This is why it’s essential that you enter the accurate contact and bank information of your landlord.",
    },
    {
      question: "How do I get rent receipt on Tranzift Pay?",
      answer:
        "After making the rent payment on Tranzift Pay, you have to fill one time details like Landlord PAN (if rent is greater than ₹8333) and rental address. After each subsequent payment, rent receipt will be generated and automatically mailed to you. Even if you do not pay your rent through Tranzift Pay, you can generate rent receipts by clicking here and filling all the details manually.",
    },
    {
      question: "Can I claim my HRA by paying through Tranzift Pay?",
      answer:
        "Yes. We generate rent receipts for all payments done on Tranziftr Pay. You can submit your rent receipts to claim HRA exemption on your income tax filing.",
    },
    {
      question: "Can I set standing instructions or autopay on my card using Tranzift Pay?",
      answer:
        "We are currently working on this feature and you will soon be able to set standing instruction and autopay on your credit card or debit card.",
    },
  ];
  const FaqBannerData = {
    img: {
      url: "/images/banner/Faq.png",
      alt: "Faq",
    },
  };
  return (
    // <div className={styles.__container}>
    //   <Banner type="home" ImgData={bannerImages} />
    //   <PayBillContainer />
    //   <PayBillMiddleBanner />
    //   <BusinessPayment />
    //   <Faq hasBanner={true} header={"Frequently Asked Questions"} FaqData={FaqData} bannerData={FaqBannerData} />
    // </div>
    <div className="">
      <Invoice />
      <Receipt />
    </div>
  );
};

export default index;
