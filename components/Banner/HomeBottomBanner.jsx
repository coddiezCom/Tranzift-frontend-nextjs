/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
const HomeBottomBanner = () => {
  const data = {
    heading: "Tranzift",
    subHeading: "INDIA'S MOST POPULAR!",
    services: [
      {
        title: "Genuine Products",
        img: {
          url: "/images/banner/GenuineProducts.png",
          alt: "GenuineProducts",
        },
      },
      {
        title: "Secure Shopping",
        img: {
          url: "/images/banner/SecureShopping.png",
          alt: "SecureShopping",
        },
      },
      {
        title: "Hassle - free Returns",
        img: {
          url: "/images/banner/Hassle_freeReturns.png",
          alt: "Hassle_freeReturns",
        },
      },
    ],
    downloads: [
      {
        link: "/",
        image: {
          url: "/images/banner/googleDownload.png",
          alt: "googleDownload",
        },
      },
      {
        link: "/",
        image: {
          url: "/images/banner/appleDownload.png",
          alt: "appleDownload",
        },
      },
    ],
    mainImage: {
      url: "/images/banner/homeBottomBanner.webp",
      alt: "homeBottomBanner",
    },
  };
  return (
    <div className={`${styles.main__container} border-gray-200 shadow-sm rounded-md`}>
      <div className={`${styles.__container} border-gray-200 shadow-sm rounded-md`}>
        <div className={styles.content_container}>
          {/* <h1>{data?.heading}</h1> */}
          <span className="w-44 pb-3 md:w-60">
            <Image src={"/T1/T4.png"} width={500} height={500} alt={"logo"} />
          </span>
          <h2>{data?.subHeading}</h2>
          <ul>
            {data.services.map((items, index) => {
              return (
                <li key={index}>
                  <span>
                    <Image src={items?.img?.url} width={5000} height={5000} alt={items?.img?.alt} />
                  </span>
                  <span>
                    <p>{items.title}</p>
                  </span>
                </li>
              );
            })}
          </ul>
          <ul>
            {data.downloads.map((items, index) => {
              return (
                <li key={index}>
                  <Link href={items.link}>
                    <Image src={items.image.url} width={500} height={500} alt={items?.image?.alt} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.image_container}>
          <Image src={data.mainImage.url} width={500} height={500} alt={data.mainImage.alt} />
        </div>
      </div>
    </div>
  );
};

export default HomeBottomBanner;
