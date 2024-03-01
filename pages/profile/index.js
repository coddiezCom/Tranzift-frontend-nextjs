import Layout from "@/components/profile/layout";
import styles from "@/styles/profile.module.scss";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export function UserProfile({ user }) {
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
      value: "Jaspreet singh",
    },
    {
      name: "Email",
      value: "jaspreetsingh.coddiez@gmail.com",
    },
    {
      name: "Mobile No.",
      value: "8586832717",
    },
    {
      name: "Pincode",
      value: "-",
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
  console.log(userData, "userData");
  const user = {
    user: {
      name: "jaspreet singh",
      email: "jaspreetsingh09912@gmail.com",
      image: "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
      id: "6582ab3fa5db0cd756b93d1c",
      role: "admin",
    },
    expires: "2024-03-22T06:29:09.453Z",
  };
  const tab = 0;
  return (
    <Layout session={user.user} tab={tab}>
      <div className={styles.__profile}>
        <Banner />
        <UserProfile user={user.user} />
      </div>
    </Layout>
  );
}
