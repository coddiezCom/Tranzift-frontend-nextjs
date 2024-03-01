import Link from "next/link";
import styles from "./styles.module.scss";
// import { signOut, signIn } from "next-auth/react";
import Register from "@/components/Register";
import { HiUserCircle } from "react-icons/hi2";
import { useRouter } from "next/router";
import { FaUserCircle, FaClipboardList, FaEnvelope, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

export default function UserMenu({ session, userDetail, visible }) {
  const router = useRouter();
  const signOut = () => {
    console.log("sign out");
  };
  const userMenuAfterLogin = [
    {
      icon: <FaUserCog />,
      name: "Account",
      link: "/profile",
    },
    {
      icon: <FaClipboardList />,
      name: "My Orders",
      link: "/profile/orders",
    },
    // {
    //   icon: <FaEnvelope />,
    //   name: "Message Center",
    //   link: "/profile/messages",
    // },
    {
      icon: <FaMapMarkerAlt />,
      name: "Manage Address",
      link: "/profile/address",
    },
    {
      icon: <FaSignOutAlt />,
      name: "Logout",
      link: "/api/auth/signout",
    },
  ];
  console.log(userDetail, "userDetail.token");
  return (
    <div className={styles.menu} style={{ display: visible ? "flex" : "none" }}>
      {!userDetail.token && <h4>Welcome to tranzift !</h4>}
      {userDetail.token ? (
        <div className={styles.flex}>
          {/* <img src={session?.user?.image} alt="" className={styles.menu__img} /> */}
          <HiUserCircle />
          <div className={styles.col}>
            <span>Welcome </span>
            <h3>{userDetail?.firstName + " " + userDetail?.lastName}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          {/* <button className={styles.btn_primary}>Register</button> */}
          <Register />
        </div>
      )}
      {userDetail.token && (
        <ul>
          {userMenuAfterLogin.map((item, index) => {
            return (
              <li key={index} onClick={() => router.push(item?.link)}>
                <span>{item?.icon}</span>
                <span>{item?.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
