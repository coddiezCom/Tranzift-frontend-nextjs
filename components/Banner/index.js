import React from "react";
import styles from "./styles.module.scss";
import MainSwiper from "../home/main/swiper";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
export const BannerWithoutSwiper = ({ data }) => {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div
      className={styles.__bannerWithoutSwiperConatainer}
      style={{ flexDirection: data?.bannerImage?.reverse ? "row-reverse" : "row" }}
    >
      <div className={styles.contentContainer} style={{ justifyContent: data.alignItem }}>
        {data?.title?.enableTypewriter ? (
          <h1>
            <Typewriter
              words={data?.title?.typewriter?.words}
              loop={data?.title?.typewriter?.loop}
              cursor
              cursorStyle={data?.title?.typewriter?.cursorStyle}
              typeSpeed={data?.title?.typewriter?.typeSpeed}
              deleteSpeed={data?.title?.typewriter?.deleteSpeed}
              delaySpeed={data?.title?.typewriter?.delaySpeed}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h1>
        ) : (
          <h1>{data?.title?.content}</h1>
        )}
        {data.content.heading && <h2>{data?.content?.heading}</h2>}
        {data?.content?.paragraph &&
          data?.content?.paragraph.map((item, index) => {
            return item.p ? (
              <p key={index}>
                {" "}
                {item.p} <Link href={item.link.href}>{item.link.content}</Link>
              </p>
            ) : (
              <p key={index}>{item}</p>
            );
          })}

        {data?.button && (
          <span className={`${styles.__btn} flex flex-row items-center`}>
            <Link href={data?.button?.link} className="border-2 shadow-sm text-gray-500 border-gray-400 rounded-md ">
              <button>{data?.button?.content}</button>
            </Link>
          </span>
        )}
        {data.content.email && (
          <Link className={styles.__email} href={data.content.email.content.href}>
            <span>{data.content.email.icon}</span>
            <span>{data.content.email.content.text}</span>
          </Link>
        )}
        {data.content.socialIcon && (
          <ul className={styles.__socialIcon}>
            {data.content.socialIcon.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.imageContainer}>
        <Image src={data?.bannerImage?.url} alt={data?.bannerImage?.alt} width={600} height={600} />
      </div>
    </div>
  );
};
const index = ({ ImgData }) => {
  return (
    <>
      <MainSwiper ImgData={ImgData} />
    </>
  );
};

export default index;
