import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import apiHelper from "@/utils/apiHelper";
import { useEffect, useMemo, useState } from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import UserMenu from "./UserMenu";
import HamburgerNavBar from "./HamburgerNavBar";
import { useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";

const PostHeader = ({ showOnly, mobileLinks }) => {
  const router = useRouter();
  const { userDetail } = useSelector((state) => ({ ...state }));
  // console.log(userDetail, "userData");

  const [visible, setVisible] = useState(false);
  const [giftCardHeader, setGiftCardHeader] = useState();

  const navigationLinks = useMemo(
    () => [
      { text: "Home", link: "/" },
      { text: "Gift Cards", link: "/gift-cards?selectedCategories=All", sublinks: [] },
      { text: "Recharge", link: "/recharge" },
      { text: "Pay Bill", link: "/pay_bill" },
      { text: "Offer", link: "/Offers" },
      { text: "Contact", link: "/contactUs" },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiHelper("categories/get-all-category");
        setGiftCardHeader(res?.data);
        return res;
      } catch (error) {
        return "error";
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={`${styles.__postHeader}  ${showOnly ? styles.showOnly : ""}   m-auto flex justify-between`}>
        <Link href="/" className={`${styles.__icon} w-64 `} style={{ width: "11.5em" }}>
          <Image src={"/T1/T4.png"} width={500} height={500} alt="tranzift" />
        </Link>
        <ul className={`${styles.__menu} flex flex-row items-center justify-evenly gap-8`}>
          {navigationLinks.map((item, index) => {
            const displayPath = router.pathname.replace(/\/\[slug\]/, "");
            return (
              <li key={index} className={styles.__menu__list}>
                <Link
                  href={item.link || "/"}
                  className={`${styles.menu__listTitle} ${
                    displayPath === item.link ? styles.__activeLink : styles.__nonActiveLink
                  }`}
                >
                  {item.text}
                </Link>
                {item.sublinks && giftCardHeader?.length > 0 && (
                  <ul className={styles.__subList}>
                    {giftCardHeader?.map((item, index) => {
                      const navigatePath = `/gift-cardS?selectedCategories=${item?._id}`;
                      return (
                        <li
                          key={index}
                          style={{ background: `url('${item?.categoryImg?.desktopImg}')` }}
                          onClick={() => router.push(navigatePath)}
                        >
                          <div className={styles._Overlay}></div>
                          <span>{item?.categoryName}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className={styles.buttons}>
          <div
            className={styles.__accountBtn}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <div className={`${styles.flex} ${styles.__btn}`}>
              {userDetail.token ? <HiUserCircle /> : <RiAccountPinCircleLine />}
            </div>
            {<UserMenu session={""} visible={visible} userDetail={userDetail} />}
          </div>
        </div>
      </div>
      <HamburgerNavBar mobileLinks={mobileLinks} />
    </>
  );
};
export default PostHeader;
