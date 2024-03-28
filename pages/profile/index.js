// import components
import Layout from "../../components/profile/layout";
// import react liabary
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
// import react-icons
import { FaEdit } from "react-icons/fa";

export function UserProfile({ user }) {
  // console.log(user, "user");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
  };
  const [shipping, setShipping] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });
  };
  const userProfileStaticData = [
    {
      name: "Name",
      value: user?.firstName + " " + user?.lastName || "---",
    },
    {
      name: "Email",
      value: user?.email_id || "---",
    },
    {
      name: "Mobile No.",
      value: user?.phone || "---",
    },
  ];
  return (
    <div className={styles.__ourProfile__container}>
      <div className={styles.header}>
        <span>Your Profile :</span>
        <Link href="/profile/editProfile?tab=0&q=edit-profile">
          <h3>EDIT PROFILE</h3>
          <FaEdit />
        </Link>
      </div>
      <div className={styles.__ourProfile__container__list}>
        <ul>
          {userProfileStaticData.map((data, index) => {
            return (
              <li key={index}>
                <span>{data.name}</span>
                <span>{data.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export function UserKyc({ user }) {
  // console.log(user, "user");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
  };
  const [shipping, setShipping] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });
  };
  const userProfileStaticData = [
    {
      name: "Aadhaar No.",
      value: user?.aadhaar_number || "---",
    },
    {
      name: "PAN No.",
      value: user?.pan_number || "---",
    },
  ];
  return (
    <div className={styles.__ourProfile__container}>
      <div className={styles.header}>
        <span>Your Kyc :</span>
        <Link href="/profile/editProfile?tab=0&q=edit-profile">
          <h3>EDIT Kyc</h3>
          <FaEdit />
        </Link>
      </div>
      <div className={styles.__ourProfile__container__list}>
        <ul>
          {userProfileStaticData.map((data, index) => {
            return (
              <li key={index}>
                <span>{data.name}</span>
                <span>{data.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export function Banner({}) {
  const data = {
    img: {
      url: "/images/icons/profile.png",
      alt: "profile",
    },
    content: {
      header: "Complete your profile & get rewards!",
      desc: "Don't miss out on EXTRA discounts! Update your profile details now and get instant xCLusive Points, and an Extra 5%* off during your Birthday and Anniversary months! *TCA.",
    },
  };
  return (
    <div className={styles.__banner}>
      <div className={styles.__icon}>
        <Image src={data.img.url} alt={data.img.alt} width={500} height={500} />
      </div>
      <div className={styles.banner__content}>
        <h2>{data.content.header}</h2>
        <p>{data.content.desc}</p>
      </div>
    </div>
  );
}
export default function Index({}) {
  const userData = useSelector((state) => state.userDetail);
  const tab = 0;
  return (
    <Layout session={userData} tab={tab}>
      <div className={styles.__profile}>
        <Banner />
        <UserProfile user={userData} />
        <UserKyc user={userData} />
      </div>
    </Layout>
  );
}
