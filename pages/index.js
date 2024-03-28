import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
import { useMediaQuery } from "react-responsive";
import OurServices, { ServiceCards } from "../components/OurServices";
import OurBrandingPartner from "../components/OurBrandingPartner";
import HomeBottomBanner from "../components/Banner/HomeBottomBanner";
import ImageGallery from "../components/home/ImageGallery";
import Link from "next/link";
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
    <section class="slide_content">
      <div class="container container12">
        <div class="slider">
          <div class="box1 box">
            <div class="bg"></div>
            <div class="details">
              <h1 style="color:white;">Myntra E-Gift Card</h1>
              <p class="bg1">
                If there’s one brand that truly knows how to add some glam to your life, it’s Myntra. A top online
                fashion destination for men and women, Myntra offers a large collection of fashion clothing, accessories
                and footwear.
              </p>
              {/* <!--<button>Check Now</button>--> */}
            </div>

            <div class="illustration">
              <div class="">
                <Image width={500} height={500} src="/images/empty.png" class="index-image-offer" alt="tranzift" />
              </div>
            </div>
          </div>

          <div class="box2 box">
            <div class="bg"></div>
            <div class="details">
              <h1 style="color:white;">BlueStone E-Gift Cards</h1>
              <p class="bg1">
                Gift your loved one jewelry of their choice with a Bluestone gift card. With a wide variety of jewelry
                for the entire family – Women, Men & Children, there is something for everyone at Bluestone.
              </p>
              {/* <!--<button>Check Now</button>--> */}
            </div>

            <div class="illustration">
              <div class="">
                <Image width={500} height={500} alt="tranzift" src="/images/empty.png" class="index-image-offer" />
              </div>
            </div>
          </div>

          <div class="box3 box">
            <div class="bg"></div>
            <div class="details">
              <h1 style="color:white;">Lifestyle E-Gift Card B2B</h1>
              <p class="bg1">
                Lifestyle, over the years, has become synonymous with beauty, fashion, trends and good living. Lifestyle
                brings many product categories under one roof – fashion clothing and accessories, home needs, beauty and
                luxury goods.
              </p>
              {/* <!--<button>Check Now</button>--> */}
            </div>

            <div class="illustration">
              <div class="">
                <Image width={500} height={500} alt="tranzift" src="/images/empty.png" class="index-image-offer" />
              </div>
            </div>
          </div>

          <div class="box4 box">
            <div class="bg"></div>
            <div class="details">
              <h1 style="color:white;">Peter England E-Gift Voucher</h1>
              <p class="bg1">
                One can buy a richly-embroidered traditional sherwani here for a traditional event, or pick up classy
                jeans, denim jackets or casual sports clothing. Just purchase a Peter England e-Gift card, and it will
                be instantly delivered on email.
              </p>
              {/* <!--<button>Check Now</button>--> */}
            </div>

            <div class="illustration">
              <div class="">
                <Image width={500} height={500} alt="tranzift" src="/images/empty.png" class="index-image-offer" />
              </div>
            </div>
          </div>

          <div class="box5 box">
            <div class="bg"></div>
            <div class="details">
              <h1 style="color:white;">Hyatt India E-Gift Card</h1>
              <p class="bg1">
                GIFTED MOMENTS BY HYATT Gift inspiring experiences and precious memories with the Gifted Moments by
                Hyatt e-Gift Card.
              </p>
              {/* <!--<button>Check Now</button>--> */}
            </div>

            <div class="illustration">
              <div class="">
                <Image width={500} height={500} alt="tranzift" src="/images/empty.png" class="index-image-offer" />
              </div>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" />
        </svg>
        <div class="trail" style="display:none;">
          <div class="box1 active">1</div>
          <div class="box2">2</div>
          <div class="box3">3</div>
          <div class="box4">4</div>
          <div class="box5">5</div>
        </div>
      </div>
    </section>
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
const homeDesktopBanner = [
  // {
  //   url: "/images/banner/home-banner/6.png",
  //   alt: "mainBanner-1",
  // },
  // {
  //   url: "/images/banner/home-banner/2.png",
  //   alt: "mainBanner-2",
  // },
  // {
  //   url: "/images/banner/home-banner/3.jpg",
  //   alt: "mainBanner-3",
  // },
  // {
  //   url: "/images/banner/home-banner/4.png",
  //   alt: "mainBanner-4",
  // },
  // {
  //   url: "/images/banner/home-banner/5.jpg",
  //   alt: "mainBanner-5",
  // },
  // {
  //   url: "/images/banner/home-banner/6.png",
  //   alt: "mainBanner-6",
  // },
  // {
  //   url: "/images/banner/home-banner/7.jpg",
  //   alt: "mainBanner-7",
  // },
  // {
  //   url: "/images/banner/home-banner/8.jpg",
  //   alt: "mainBanner-8",
  // },
  // {
  //   url: "/images/banner/home-banner/9.jpg",
  //   alt: "mainBanner-9",
  // },
  // {
  //   url: "/images/banner/home-banner/10.jpg",
  //   alt: "mainBanner-10",
  // },
  // {
  //   url: "/images/banner/home-banner/11.jpg",
  //   alt: "mainBanner-11",
  // },
  // {
  //   url: "/images/banner/home-banner/12.jpg",
  //   alt: "mainBanner-12",
  // },
  {
    url: "/images/banner/home-banner/13.jpg",
    alt: "mainBanner-1",
  },
  // {
  //   url: "/images/banner/home-banner/14.png",
  //   alt: "mainBanner-1",
  // },
];
const homeTabletBanner = [
  {
    url: "/images/banner/home-banner/15.jpg",
    alt: "mainBanner-1",
  },
];
const homeMobileBanner = [
  // {
  //   url: "/images/banner/home-mobile-banner/1.png",
  //   alt: "mainBanner-1",
  // },
  {
    url: "/images/banner/home-mobile-banner/2.jpg",
    alt: "mainBanner-1",
  },
];
export default function Home({}) {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  // console.log(isMobile);
  const images = [
    {
      url: "/images/gallery-Image/1.jpg",
      alt: "gallery-Image-1",
      className: "gallery_img_1",
      content: {
        heading: "Plum Goodness",
        desc: "Gift the power of clear, glowing skin with our green tea pore-cleansing face wash.",
        link: {
          url: "/",
          text: "Shop Now",
        },
      },
    },
    {
      url: "/images/gallery-Image/2.jpg",
      alt: "gallery-Image-2",
      className: "gallery_img_2",
      content: {
        heading: "Caffeine Coffee",
        desc: "Transform your skin with mCaffeine's Exfoliating Coffee Body Scrub. 100% natural.",
        link: {
          url: "/",
          text: "Shop Now",
        },
      },
    },
    {
      url: "/images/gallery-Image/5.png",
      alt: "gallery-Image-3",
      className: "gallery_img_3",
      content: {
        heading: "Offer",
        content: {
          discout: 10,
          percent: true,
          type: "off",
        },
        desc: "Summer Sale",
        // link: {
        //   url: "/",
        //   text: "Shop Now",
        // },
      },
    },
    {
      url: "/images/gallery-Image/3.jpg",
      alt: "gallery-Image-4",
      className: "gallery_img_4",
      content: {
        heading: "BlueStone",
        desc: "Leading online jeweler with 8000+ unique designs in gold, diamond, and gemstones, offering customizable options.",
        link: {
          url: "/",
          text: "Shop Now",
        },
      },
    },
    {
      url: "/images/gallery-Image/4.jpg",
      alt: "gallery-Image-5",
      className: "gallery_img_5",
      content: {
        heading: "Pepperfry",
        desc: "Discover Quality and Style at Pepperfry - India's Premier Furniture Destination Attractive Discounts: Unlock big savings, explore a diverse range of furniture, and experience cost …",
        link: {
          url: "/",
          text: "Shop Now",
        },
      },
    },
  ];
  return (
    <>
      <div className={styles.home}>
        <div className={styles.__container}>
          <div className={styles.__container__content}>
            <Banner
              type="home"
              ImgData={isMobile ? homeMobileBanner : isTablet ? homeTabletBanner : homeDesktopBanner}
            />
            <ServiceCards />
            <OurServices />
            {/* <GsapCarousel /> */}
            <ImageGallery images={images} />
            <OurBrandingPartner />
            <HomeBottomBanner />
          </div>
        </div>
        {/* <div className={styles.mobile__container}>
          <Banner type="home" data={homeDesktopBanner} />
        </div> */}
      </div>
    </>
  );
}
