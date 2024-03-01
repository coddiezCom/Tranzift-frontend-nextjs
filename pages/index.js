import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Banner from "@/components/Banner";
import { useMediaQuery } from "react-responsive";
import OurServices from "@/components/OurServices";
import OurBrandingPartner from "@/components/OurBrandingPartner";
import HomeBottomBanner from "@/components/Banner/HomeBottomBanner";
// swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import { CSSRulePlugin } from "gsap";
// Initialize GSAP plugins
gsap.registerPlugin(CSSRulePlugin);

// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
export const GsapCarouselItem = ({ heading, desc, images }) => {
  return (
    <div className={`${styles.__parallax__Item} box`}>
      <div className={`${styles.__parallax__Item_bg}`}></div>
      <div className={styles.__parallax__Item__details}>
        <h1>{heading}</h1>
        <p className={styles.__parallax__Item__details__bg1}>{desc}</p>
      </div>
      <div className={styles.__parallax__Item__illustration}>
        <div className="">
          <Image src={images.url} width={500} height={500} alt={images.alt} />
        </div>
      </div>
    </div>
  );
};

export const GsapCarousel = () => {
  const data = [
    {
      heading: "Myntra E-Gift Card",
      desc: "If there’s one brand that truly knows how to add some glam to your life,it’s Myntra. A top online fashion destination for men and women,Myntra offers a large collection of fashion clothing, accessories and footwear.",
      images: {
        url: "/images/swiper/Gift_Cards/Myntra.jpg",
        alt: "Myntra E-Gift Card",
      },
    },
    {
      heading: "BlueStone E-Gift Cards",
      desc: "Gift your loved one jewelry of their choice with a Bluestone gift card. With a wide variety of jewelry for the entire family – Women, Men & Children, there is something for everyone at Bluestone.",
      images: {
        // url: "/images/GiftCards/BlueStone_E-Gift_Card_dtp.jpg",
        url: "/images/swiper/Gift_Cards/Bluestone.jpg",
        alt: "BlueStone E-Gift Card",
      },
    },
    {
      heading: "Lifestyle E-Gift Card B2B",
      desc: "Lifestyle, over the years, has become synonymous with beauty, fashion, trends and good living. Lifestyle brings many product categories under one roof – fashion clothing and accessories, home needs, beauty and luxury goods.",
      images: {
        url: "/images/swiper/Gift_Cards/Lifestyle.jpg",
        alt: "Lifestyle E-Gift Card B2B",
      },
    },
    {
      heading: "Peter England E-Gift Voucher",
      desc: "One can buy a richly-embroidered traditional sherwani here for a traditional event, or pick up classy jeans, denim jackets or casual sports clothing. Just purchase a Peter England e-Gift card, and it will be instantly delivered on email.",
      images: {
        url: "/images/swiper/Gift_Cards/PeterEngland.jpg",
        alt: "Peter England E-Gift Voucher",
      },
    },
    {
      heading: "Hyatt India E-Gift Card",
      desc: "GIFTED MOMENTS BY HYATT Gift inspiring experiences and precious memories with the  Gifted Moments by Hyatt e-Gift Card.",
      images: {
        url: "/images/swiper/Gift_Cards/HyattHotels.jpg",
        alt: "Hyatt India E-Gift Card",
      },
    },
  ];
  const [value, setValue] = useState(0);
  const interval = 4000;

  useEffect(() => {
    const slider = document.querySelector(".slider");
    let start;

    const slide = (condition) => {
      clearInterval(start);
      condition === "increase" ? initiateINC() : initiateDEC();
      animate();
      start = setInterval(() => slide("increase"), interval);
    };

    const initiateINC = () => {
      value === 80 ? setValue(0) : setValue(value + 20);
    };

    const initiateDEC = () => {
      value === 0 ? setValue(80) : setValue(value - 20);
    };

    const animate = () => {
      gsap.to(".slider", { x: `-${value}%`, duration: 0.6, ease: "power2.inOut" });
    };

    start = setInterval(() => slide("increase"), interval);

    return () => {
      clearInterval(start);
    };
  }, [value]);
  return (
    <div className={styles.__gsap__carousel}>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mainSwiper"
        >
          {data.map((items, index) => (
            <SwiperSlide key={index}>
              <GsapCarouselItem key={index} heading={items.heading} desc={items.desc} images={items.images} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
const bannerImages = [
  {
    url: "/images/banner/mainBanner-1.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-2.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-3.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-4.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-5.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-6.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-7.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-8.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-9.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-10.jpg",
    alt: "mainBanner",
  },
  {
    url: "/images/banner/mainBanner-11.jpg",
    alt: "mainBanner",
  },
];
export default function Home({}) {
  // console.log("products", products);
  // const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  return (
    <>
      <div className={styles.home}>
        <div className={styles.__container}>
          <Banner type="home" ImgData={bannerImages} />
          <OurServices />
          <GsapCarousel />
          <OurBrandingPartner />
          <HomeBottomBanner />
        </div>
        <div className={styles.mobile__container}>
          <Banner type="home" data={bannerImages} />
        </div>
      </div>
      {/* <Footer country={country} /> */}
    </>
  );
}
