import React, { useState } from "react";
import * as Yup from "yup";
import styles from "../../styles/contactUs.module.scss";
import { BannerWithoutSwiper } from "../../components/Banner";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { AiFillYoutube } from "react-icons/ai";
import LoginInput from "../../components/inputs/loginInput";
import CircledIconBtn from "../../components/buttons/circledIconBtn";
import { Form, Formik } from "formik";
import Card from "@mui/material/Card";

export const ContactUsForm = ({ heading }) => {
  const initialvalues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    success: "",
    error: "",
  };
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialvalues);
  const { name, email, phoneNumber, message, success, error } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const formValidation = Yup.object({
    name: Yup.string()
      .required("Please provide your name.")
      .min(2, "Name must be between 2 and 16 characters.")
      .max(16, "Name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Only letters are allowed in the name."),
    email: Yup.string().required("Please enter your email address.").email("Enter a valid email address."),
    phoneNumber: Yup.number()
      .required("Phone number is required.")
      .min(3, "Phone number must be at least 3 characters long.")
      .max(30, "Phone number must be less than 30 characters long."),
    message: Yup.string()
      .required("Please provide a message.")
      .min(5, "Message must be at least 5 characters long.")
      .max(100, "Message must be less than 100 characters long."),
  });
  return (
    <Card className={styles.__form}>
      <div className={styles.__form__header}>
        <h2>{heading}</h2>
      </div>
      <Formik
        className={styles.__form__form}
        enableReinitialize
        initialValues={{
          name,
          email,
          phoneNumber,
          message,
        }}
        validationSchema={formValidation}
        onSubmit={() => {
          // console.log("hii");
        }}
      >
        {(form) => (
          <Form>
            <div>
              <label for="name">Name</label>
              <LoginInput
                type="text"
                styleType="style1"
                name="name"
                // icon="user"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="email">Email</label>
              <LoginInput
                type="text"
                styleType="style1"
                name="email"
                // icon="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="phone">Phone No.</label>
              <LoginInput
                styleType="style1"
                type="phone"
                name="phoneNumber"
                // icon="phone"
                placeholder="phone number"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="message">Message</label>
              <LoginInput
                styleType="style1"
                type="text"
                name="message"
                // icon="message"
                placeholder="Enter your Message"
                onChange={handleChange}
              />
            </div>

            <CircledIconBtn type="submit" styleType="style1" text="Contact Us" />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export const SideBar = ({ data }) => {
  return (
    <Card className={styles.__sideBar}>
      <div className={styles.__sideBar__heading}>
        <h2>{data.heading}</h2>
      </div>
      <div className={styles.__sideBar__content}>
        {data.content.map((item, index) => {
          const tag = Object.keys(item)[0];
          switch (tag) {
            case "h3":
              return <h3>{item[tag]}</h3>;
            case "p":
              return <p>{item[tag]}</p>;
            default:
              "";
              break;
          }
        })}
      </div>
    </Card>
  );
};
export const card = () => {};
const index = () => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["CONTACT US"],
        loop: true,
        cursorStyle: "!",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      email: {
        icon: <CiMail />,
        content: {
          text: "info@tranzift.com",
          href: "/info@tranzift.com",
        },
      },
      socialIcon: [
        {
          icon: <FaFacebookF />,
          href: "/",
        },
        {
          icon: <BsTwitterX />,
          href: "/",
        },
        {
          icon: <SiIndeed />,
          href: "/",
        },
        {
          icon: <AiFillYoutube />,
          href: "/",
        },
      ],
    },
    bannerImage: {
      url: "/images/banner/contactUs.png",
      alt: "disclaimer",
      reverse: false,
    },
    alignItem: "center",
  };
  const sideBarContent = {
    heading: "CONTACT US",
    content: [
      { h3: "Customer Delight" },
      { p: "Call us at +917669665515 (10 am-7 pm, 7 days a week)" },
      { p: "or" },
      { p: "Write to us at support@tranzift.com" },
      { h3: "Corporate Sales" },
      {
        p: "For all corporate sales related queries please write to us at sales@tranzift.com For bulk enquiries or sales associations please contact sales@tranzift.com",
      },
      { h3: "Office Address" },
      { p: "Plot No. 600, G/F, Metro Pillar No. 531" },
      { p: "Near Union Bank, Mundka, New Delhi - 110041" },
    ],
  };
  return (
    <div className={styles.contactUs__container}>
      <BannerWithoutSwiper data={data} />
      <div className={styles.__card}>
        <SideBar data={sideBarContent} />
        <ContactUsForm heading={"HAVE A QUESTION?"} />
      </div>
    </div>
  );
};

export default index;
