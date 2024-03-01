import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const MobileFooter = ({ mobileLinks }) => {
  return (
    <div className={styles.mobile__fixedFooter}>
      <ul>
        {mobileLinks.map((item, index) => {
          // console.log(item, "item");
          return (
            <li key={index}>
              <Link href={item.link ? item.link : "/"}>
                <span>{item?.icon}</span>
                <span>{item?.head}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileFooter;
