import React from "react";
import styles from "./styles.module.scss";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { MdFlight } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";

const index = () => {
  return <DetailedServiceCard />;
};
export const ServiceCards = () => {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const ourServices = [
    {
      img: "/images/ourServices/gift.png",
      title: "Gift Cards",
      link: "/",
      description: {
        mobile: "Gift of choice and delight!",
        desktop: "Give the gift of choice and delight with our versatile and customizable gift cards for any occasion.",
      },
    },
    {
      img: "/images/ourServices/utility.png",
      title: "Utility",
      link: "/",
      description: {
        mobile: "Utility services for all your needs",
        desktop:
          "Experience convenience at its best with our comprehensive range of utility services for all your needs.",
      },
    },
    {
      img: "/images/ourServices/recharge.png",
      title: "Recharge",
      link: "/",
      description: {
        mobile: "Hassle-free recharges for your mobile",
        desktop: "Stay connected with hassle-free recharges for your mobile, anytime and anywhere.",
      },
    },
    {
      img: "/images/ourServices/travel.png",
      title: "Travel",
      link: "/",
      description: {
        mobile: "Exceptional travel experiences",
        desktop:
          "Embark on unforgettable journeys and create lasting memories with our exceptional travel experiences.",
      },
    },
  ];

  return (
    <div className="">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`ourServices ${styles.services_container}  `}
        breakpoints={{
          200: {
            // spaceBetween: 3,
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            // spaceBetween: 3,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          968: {
            // spaceBetween: 3,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1025: {
            // spaceBetween: 3,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1100: {
            spaceBetween: 40,
          },
          1200: {
            spaceBetween: 60,
            // spaceBetween: 5,
          },
          1525: {
            spaceBetween: 50,

            // spaceBetween: 5,
          },
        }}
      >
        {ourServices.map((items, index) => (
          <SwiperSlide
            key={index}
            className=" bg-transparent     rounded-xl   overflow-hidden border-2 border-gray-200"
          >
            <div className={`${styles.services_card} `}>
              <Box
                className={`${styles.ImageContainer}   hover:scale-105 hover:drop-shadow-xl transition ease-in-out delay-150  duration-300`}
              >
                <Image src={items.img} alt="banner" className={styles.__img} width={5000} height={5000} />
              </Box>
              <CardContent className={styles.contentContainer}>
                <Typography
                  variant="h5"
                  component="div"
                  className={`${styles.contentContainer__title}   transition-colors ease-linear delay-300`}
                >
                  {items?.title}
                </Typography>
                <p className={`text-lg ${styles.contentContainer__description}`}>
                  {isMobile ? items?.description?.mobile : items?.description?.desktop}
                </p>
                <span className={styles.contentContainer__link}>
                  <LuMoveRight />
                </span>
              </CardContent>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export const DetailedServiceCard = () => {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const servicesInDetailed = [
    {
      title: "Gift Cards",
      icon: {
        url: "/images/icons/gift.png",
        alt: "gift",
      },
      description: "Unlock a world of our gift cards, allowing your loved ones to pick their perfect present.",
      link: "/",
      cards: [
        {
          title: "Kitchen and Furniture",
          image: {
            url: "/images/category/furniture.jpg",
            alt: "Kitchen and Furniture",
          },
          link: "/",
        },
        {
          title: "Gaming & Toys",
          image: {
            url: "/images/category/Gaming&Toys.jpg",
            alt: "Gaming & Toys",
          },
          link: "/",
        },
        {
          title: "Health and Wellness",
          image: {
            url: "/images/category/healthAndwellness.jpg",
            alt: "Health and Wellness",
          },
          link: "/",
        },
        {
          title: "Insurance and Services",
          image: {
            url: "/images/category/insurance.jpg",
            alt: "Insurance and Services",
          },
          link: "/",
        },
        {
          title: "Jewellery",
          image: {
            url: "/images/category/jewellery.jpg",
            alt: "Jewellery",
          },
          link: "/",
        },
        {
          title: "Travel & Hospitality",
          image: {
            url: "/images/category/Travel.jpg",
            alt: "Travel & Hospitality",
          },
          link: "/",
        },
        {
          title: "Electronics & Appliances",
          image: {
            url: "/images/category/Electronics_&_Appliances.jpg",
            alt: "Electronics & Appliances",
          },
          link: "/",
        },

        {
          title: "Accessories",
          image: {
            url: "/images/category/accessories.jpg",
            alt: "Accessories",
          },
          link: "/",
        },
        {
          title: "Beauty and Cosmetics",
          image: {
            url: "/images/category/beautyAndCosmetics.jpg",
            alt: "Beauty and Cosmetics",
          },
          link: "/",
        },
        {
          title: "E-commerce & Stores",
          image: {
            url: "/images/category/ecommerce&Stors.jpg",
            alt: "E-commerce & Stores",
          },
          link: "/",
        },
        {
          title: "Entertainment",
          image: {
            url: "/images/category/entertainment.jpg",
            alt: "Entertainment",
          },
          link: "/",
        },
        {
          title: "Fashion",
          image: {
            url: "/images/category/Fashion.jpg",
            alt: "Fashion",
          },
          link: "/",
        },

        {
          title: "Food and Beverage",
          image: {
            url: "/images/category/foodAndBeverage.jpg",
            alt: "Food and Beverage",
          },
          link: "/",
        },
      ],
    },
    {
      title: "Bills & Recharges",
      icon: {
        url: "/images/bharat_Pay/BBPS_normal.png",
        alt: "Bharat_pay",
      },
      description: "Streamline your life with our efficient utility solutions for a smoother everyday experience.",
      link: "/",
      cards: [
        {
          title: "Electricity",
          image: {
            url: "/images/category/electricity.png",
            alt: "electricity",
          },
          link: "/",
        },
        {
          title: "LPG",
          image: {
            url: "/images/category/LPG.png",
            alt: "LPG",
          },
          link: "/",
        },
        {
          title: "DTH",
          image: {
            url: "/images/category/DTH.png",
            alt: "DTH",
          },
          link: "/",
        },
        {
          title: "Piped Gas",
          image: {
            url: "/images/category/Piped_Gas.png",
            alt: "Piped_Gas",
          },
          link: "/",
        },
        {
          title: "Fast Tag Recharge",
          image: {
            url: "/images/category/fastTagReacharge.png",
            alt: "fastTagReacharge",
          },
          link: "/",
        },
        {
          title: "Mobile",
          image: {
            url: "/images/category/mobile.png",
            alt: "mobile",
          },
          link: "/",
        },
        {
          title: "Wifi",
          image: {
            url: "/images/category/wifi.png",
            alt: "wifi",
          },
          link: "/",
        },
      ],
    },
    {
      title: "Travel",
      icon: {
        url: "/images/category/ar.png",
        alt: "Bharat_pay",
      },
      description: "Discover the wonders with ease through our reliable and personalized travel services.",
      link: "/",
      cards: [
        {
          title: "Flights",
          image: {
            url: "/images/category/ar.png",
            alt: "test",
          },
          link: "/",
        },
        {
          title: "Hotels",
          image: {
            url: "/images/category/hotal.png",
            alt: "test",
          },
          link: "/",
        },
        {
          title: "Trains",
          image: {
            url: "/images/category/tr.png",
            alt: "test",
          },
          link: "/",
        },
        {
          title: "Metro",
          image: {
            url: "/images/category/metro.png",
            alt: "test",
          },
          link: "/",
        },
        {
          title: "Bus",
          image: {
            url: "/images/category/bus1.png",
            alt: "test",
          },
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className={styles.detailedServiceCardContainer}>
      {servicesInDetailed.map((items, index) => {
        return (
          <div className={`${styles.detailedServiceCard} border-2 border-gray-200 shadow-sm rounded-md`} key={index}>
            <div className={styles.cardDesc}>
              <div className={styles.__card}>
                {items?.icon?.url && (
                  <div className={styles.__card__imgContainer}>
                    <Image src={items?.icon?.url} alt={items?.icon?.alt} width={500} height={500} />
                  </div>
                )}
                <div className={styles.__card__title}>
                  <Typography variant="h2" component="div" className={styles.cardDesc__title}>
                    {items.title}
                  </Typography>
                </div>
              </div>
              <Typography variant="h5" component="div" className={styles.cardDesc__desc}>
                {isMobile ? items?.description.substring(0, 100) : items?.description}
              </Typography>
              <Link href={items.link} className="text-blue-400">
                Explore more
              </Link>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 200000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={`ourServices ${styles.cardContainer}`}
              breakpoints={{
                200: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                762: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                962: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1525: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              {items.cards.map((items, index) => (
                <SwiperSlide key={index} className={`  rounded-md ${styles.swipeCard} `}>
                  <Link href={items.link}>
                    <div className={`${styles.card}  border-2 border-gray-200 shadow-sm rounded-md `}>
                      <Box className={styles.ImageContainer}>
                        <Image
                          src={items?.image?.url}
                          alt="banner"
                          className={styles.__img}
                          width={5000}
                          height={5000}
                        />
                      </Box>
                      <div className={styles.contentContainer}>
                        <span className={styles.contentContainer__title}>
                          {items?.title.length > 15
                            ? items?.title.substring(0, 15) + "..."
                            : items?.title.substring(0, 20)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};
export default index;
