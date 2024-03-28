import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
const ourBrandingPartners = {
  heading: "Our Branding Partners",
  cards: [
    {
      link: "",
      title: "AirAsia",
      image: {
        url: "/images/category/subCategory/AirAsia.png",
        alt: "AirAsia",
      },
    },
    {
      links: "",
      title: "Himalaya",
      image: {
        url: "/images/category/subCategory/Himalaya.png",
        alt: "Himalaya",
      },
    },
    {
      links: "",
      title: "Barbeque_Nation",
      image: {
        url: "/images/category/subCategory/Barbeque_Nation.png",
        alt: "Barbeque_Nation",
      },
    },
    {
      links: "",
      title: "Jockey",
      image: {
        url: "/images/category/subCategory/Jockey.png",
        alt: "Jockey",
      },
    },
    {
      links: "",
      title: "Skechers",
      image: {
        url: "/images/category/subCategory/Skechers.png",
        alt: "Skechers",
      },
    },
    {
      links: "",
      title: "Jack&Jones",
      image: {
        url: "/images/category/subCategory/Jack&Jones.png",
        alt: "Jack",
      },
    },
    {
      links: "",
      title: "Body_craft",
      image: {
        url: "/images/category/subCategory/Body_craft.png",
        alt: "Body_craft",
      },
    },
    {
      links: "",
      title: "Myntra",
      image: {
        url: "/images/category/subCategory/Myntra.png",
        alt: "Myntra",
      },
    },
    {
      links: "",
      title: "Ray_Ban",
      image: {
        url: "/images/category/subCategory/Ray_Ban.png",
        alt: "Ray_Ban",
      },
    },
    {
      links: "",
      title: "Taneir",
      image: {
        url: "/images/category/subCategory/Taneir.png",
        alt: "Taneir",
      },
    },
    {
      links: "",
      title: "Van_Heusen",
      image: {
        url: "/images/category/subCategory/Van_Heusen.png",
        alt: "Van_Heusen",
      },
    },
    {
      links: "",
      title: "Amazon",
      image: {
        url: "/images/category/subCategory/Amazon.png",
        alt: "Amazon",
      },
    },
    {
      links: "",
      title: "Bigbasket",
      image: {
        url: "/images/category/subCategory/Bigbasket.png",
        alt: "Bigbasket",
      },
    },
    {
      links: "",
      title: "Tanishq",
      image: {
        url: "/images/category/subCategory/Tanishq.png",
        alt: "Tanishq",
      },
    },
    {
      links: "",
      title: "Oven_Story",
      image: {
        url: "/images/category/subCategory/Oven_Story.png",
        alt: "Oven_Story",
      },
    },
  ],
};
const index = () => {
  return (
    <div className={styles.__container}>
      <div className={styles.heading}>
        <span>{ourBrandingPartners?.heading}</span>
      </div>
      <div className={styles.cardsContainer}>
        {ourBrandingPartners?.cards?.map((items, index) => {
          return (
            <div className={`${styles.__card} border-2 border-gray-200 shadow-sm rounded-md  `} key={index}>
              <Image src={items?.image?.url} alt={items?.image?.alt} width={500} height={500} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
