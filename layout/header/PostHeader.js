import styles from "./styles.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
// image
import Image from "next/image";
// react-icon
import { RiAccountPinCircleLine } from "react-icons/ri";
// utils
import apiHelper from "../../utils/apiHelper";
// components
import UserMenu from "./UserMenu";
import HamburgerNavBar from "./HamburgerNavBar";
const PostHeader = ({ showOnly, mobileLinks, navigationLinks }) => {
  const router = useRouter();
  const { userDetail } = useSelector((state) => ({ ...state }));

  const [visible, setVisible] = useState(false);
  const [giftCardHeader, setGiftCardHeader] = useState();
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
  const toggleUserMenu = (value) => {
    setVisible(value);
  };
  return (
    <div className={styles.__postHeaderContainer}>
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
                      const navigatePath = `/gift-cards?selectedCategories=${item?._id}`;
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
            onMouseOver={() => toggleUserMenu(true)}
            onMouseLeave={() => toggleUserMenu(false)}
          >
            <div className={`${styles.flex} ${styles.__btn}`}>
              {userDetail.token ? (
                <Avatar name={userDetail?.firstName} size="40" round={true} />
              ) : (
                <RiAccountPinCircleLine />
              )}
            </div>
            {<UserMenu toggleUserMenu={toggleUserMenu} session={""} visible={visible} userDetail={userDetail} />}
          </div>
        </div>
      </div>
      <HamburgerNavBar mobileLinks={mobileLinks} />
    </div>
  );
};
export default PostHeader;
