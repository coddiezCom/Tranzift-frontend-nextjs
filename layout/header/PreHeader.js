import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
export const PreHeader = ({ hide, preHeaderData }) => {
  const { contact, heading, socials } = preHeaderData;
  return (
    <div className={styles.__preHeaderContainer}>
      <div className={`${styles.__preHeader} ${hide ? styles.hidePreHeader : ""}`}>
        <ul className={styles.__contact}>
          {contact?.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>
                  <span>{item.data.icon}</span>
                  <span>{item.data.content}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {heading && (
          <div className={styles.__heading}>
            <h2>{heading}</h2>
          </div>
        )}
        <ul className={styles.__socials}>
          {socials?.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>{item.content.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;
