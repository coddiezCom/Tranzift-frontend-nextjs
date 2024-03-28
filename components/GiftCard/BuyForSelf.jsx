// import react Liabary
import React from "react";
import Image from "next/image";
// import styles
import styles from "../../styles/gift-card.module.scss";
const Index = ({ data }) => {
  return (
    <div className={styles.__buyForSelf}>
      <div className={styles.__heading}>{data.heading}</div>
      <ul className={styles.__cards}>
        {data.cards.map((item, index) => {
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

export default Index;
