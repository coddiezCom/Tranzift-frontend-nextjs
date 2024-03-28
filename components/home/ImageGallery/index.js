import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = ({ images }) => {
  return (
    <div className={`${styles.__image_gallery} `}>
      {images?.map((items, index) => {
        return (
          <div
            key={index}
            className={`${styles[items?.className]} overflow-hidden    cursor-pointer rounded-xl relative group`}
          >
            <span className="rounded-xl z-50  group-hover:opacity-100 opacity-95  transition duration-300 ease-in-out cursor-pointer  from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white  ">
              <Image
                src={items?.url}
                alt={items.alt}
                fill
                className="hover:scale-105 transition duration-300 ease-in-out"
              />
            </span>
            {items.content.heading != "Offer" ? (
              <div className={styles.__cardContent}>
                <h3 className="text-lg font-bold">{items?.content?.heading}</h3>
                <p className="text-sm font-light text-gray-900">
                  {items?.content?.desc.length > 140
                    ? items?.content?.desc.substr(0, 140) + "..."
                    : items?.content?.desc}
                </p>
                <button className="text-sm font-bold text-gray-900">{items?.content?.link?.text}</button>
              </div>
            ) : (
              <div className={styles.__cardContent}>
                <h3 className="text-lg font-bold">
                  <span>{items?.content?.content?.discout}</span>
                  <span>
                    <span>{items?.content?.content?.percent ? "%" : ""}</span>
                    <span>{items?.content?.content?.type}</span>
                  </span>
                </h3>
                <p className="text-sm font-light text-gray-900">{items?.content?.desc}</p>
                <button className="text-sm font-bold text-gray-900">{items?.content?.link?.text}</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
