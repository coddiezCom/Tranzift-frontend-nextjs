import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { CgLayoutGrid } from "react-icons/cg";
import { MdOutlineLocalOffer } from "react-icons/md";

const ourService = [
  {
    id: 1,
    title: "Mobile",
    description: "Service for prepaid mobile phone subscriptions.",
    img: {
      url: "/images/category/mobile.png",
      alt: "Mobile Prepaid Image",
    },
    page: "mobile-prepaid",
  },
  {
    id: 2,
    title: "DTH",
    description: "Service for Direct-to-Home television subscriptions.",
    img: {
      url: "/images/category/DTH.png",
      alt: "DTH Image",
    },
    page: "dth",
  },
  {
    id: 3,
    title: "Credit Card",
    description: "Service for credit card transactions and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Credit Card Image",
    },
    page: "credit-card",
  },

  {
    id: 4,
    title: "Electricity",
    description: "Service for electricity bill payments and management.",
    img: {
      url: "/images/category/electricity.png",
      alt: "Electricity Image",
    },
    page: "electricity",
  },
  {
    id: 5,
    title: "Fastag",
    description: "Service related to Fastag for toll payments.",
    img: {
      url: "/images/category/fastTagReacharge.png",
      alt: "Fastag Image",
    },
    page: "fastag",
  },
  {
    id: 6,
    title: "Gas",
    description: "Service for gas bill payments and management.",
    img: {
      url: "/images/category/Piped_Gas.png",
      alt: "Gas Image",
    },
    page: "gas",
  },
  {
    id: 7,
    title: "Insurance",
    description: "Service for insurance policies and claims.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Insurance Image",
    },
    page: "insurance",
  },
  {
    id: 8,
    title: "Landline",
    description: "Service for postpaid landline subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Landline Postpaid Image",
    },
    page: "landline-postpaid",
  },
  {
    id: 9,
    title: "Loan",
    description: "Service for loan applications and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Loan Image",
    },
    page: "loan",
  },
  {
    id: 10,
    title: "Tax",
    description: "Service for tax payments and filing.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Tax Image",
    },
    page: "tax",
  },
  {
    id: 11,
    title: "Water",
    description: "Service for water bill payments and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Water Image",
    },
    page: "water",
  },
  {
    id: 12,
    title: "Cable TV",
    description: "Service for cable television subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Cable TV Image",
    },
    page: "cable-tv",
  },
  {
    id: 13,
    title: "Clubs and Associations",
    description: "Service related to clubs and associations memberships.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Clubs and Associations Image",
    },
    page: "clubs-and-associations",
  },
  {
    id: 14,
    title: "Municipal Service",
    description: "Service for municipal-related transactions and information.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Municipal Service Image",
    },
    page: "municipal-service",
  },
  {
    id: 15,
    title: "Municipal Taxes",
    description: "Service for municipal tax payments and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Municipal Taxes Image",
    },
    page: "municipal-taxes",
  },
  {
    id: 16,
    title: "Education",
    description: "Service for educational institution-related transactions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Education Image",
    },
    page: "education",
  },
  {
    id: 17,
    title: "LPG Cylinder",
    description: "Service for LPG cylinder bookings and deliveries.",
    img: {
      url: "/images/category/LPG.png",
      alt: "LPG Cylinder Image",
    },
    page: "lpg-cylinder",
  },
  {
    id: 18,
    title: "Subscription",
    description: "Service for managing various subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Subscription Image",
    },
    page: "subscription",
  },
  {
    id: 19,
    title: "Housing Society",
    description: "Service for housing society-related transactions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Housing Society Image",
    },
    page: "housing-society",
  },
  {
    id: 20,
    title: "Hospital",
    description: "Service for hospital-related transactions and appointments.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Hospital Image",
    },
    page: "hospital",
  },
  {
    id: 21,
    title: "Rental",
    description: "Service for rental property management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Rental Image",
    },
    page: "rental",
  },
];
const ourService_ = [
  {
    id: 1,
    title: "Broadband Postpaid",
    description: "Service for broadband postpaid subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Broadband Postpaid Image",
    },
    page: "prepaid-recharge",
  },
  {
    id: 2,
    title: "Credit Card",
    description: "Service for credit card transactions and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Credit Card Image",
    },
    page: "credit-card",
  },
  {
    id: 3,
    title: "DTH",
    description: "Service for Direct-to-Home television subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "DTH Image",
    },
    page: "dth",
  },
  {
    id: 4,
    title: "Electricity",
    description: "Service for electricity bill payments and management.",
    img: {
      url: "/images/icons/electricity.png",
      alt: "Electricity Image",
    },
    page: "electricity",
  },
  {
    id: 5,
    title: "Fastag",
    description: "Service related to Fastag for toll payments.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Fastag Image",
    },
    page: "fastag",
  },
  {
    id: 6,
    title: "Gas",
    description: "Service for gas bill payments and management.",
    img: {
      url: "/images/icons/piped.png",
      alt: "Gas Image",
    },
    page: "gas",
  },
  {
    id: 7,
    title: "Insurance",
    description: "Service for insurance policies and claims.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Insurance Image",
    },
    page: "insurance",
  },
  {
    id: 8,
    title: "Landline Postpaid",
    description: "Service for postpaid landline subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Landline Postpaid Image",
    },
    page: "landline-postpaid",
  },
  {
    id: 9,
    title: "Mobile Prepaid",
    description: "Service for prepaid mobile phone subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Mobile Prepaid Image",
    },
    page: "mobile-prepaid",
  },
  {
    id: 10,
    title: "Loan",
    description: "Service for loan applications and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Loan Image",
    },
    page: "loan",
  },
  {
    id: 11,
    title: "Mobile Postpaid",
    description: "Service for postpaid mobile phone subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Mobile Postpaid Image",
    },
    page: "mobile-postpaid",
  },
  {
    id: 12,
    title: "Tax",
    description: "Service for tax payments and filing.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Tax Image",
    },
    page: "tax",
  },
  {
    id: 13,
    title: "Water",
    description: "Service for water bill payments and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Water Image",
    },
    page: "water",
  },
  {
    id: 14,
    title: "Cable TV",
    description: "Service for cable television subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Cable TV Image",
    },
    page: "cable-tv",
  },
  {
    id: 15,
    title: "Clubs and Associations",
    description: "Service related to clubs and associations memberships.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Clubs and Associations Image",
    },
    page: "clubs-and-associations",
  },
  {
    id: 16,
    title: "Municipal Service",
    description: "Service for municipal-related transactions and information.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Municipal Service Image",
    },
    page: "municipal-service",
  },
  {
    id: 17,
    title: "Municipal Taxes",
    description: "Service for municipal tax payments and management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Municipal Taxes Image",
    },
    page: "municipal-taxes",
  },
  {
    id: 18,
    title: "Education",
    description: "Service for educational institution-related transactions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Education Image",
    },
    page: "education",
  },
  {
    id: 19,
    title: "LPG Cylinder",
    description: "Service for LPG cylinder bookings and deliveries.",
    img: {
      url: "/images/icons/dth.png",
      alt: "LPG Cylinder Image",
    },
    page: "lpg-cylinder",
  },
  {
    id: 20,
    title: "Subscription",
    description: "Service for managing various subscriptions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Subscription Image",
    },
    page: "subscription",
  },
  {
    id: 21,
    title: "Housing Society",
    description: "Service for housing society-related transactions.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Housing Society Image",
    },
    page: "housing-society",
  },
  {
    id: 22,
    title: "Hospital",
    description: "Service for hospital-related transactions and appointments.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Hospital Image",
    },
    page: "hospital",
  },
  {
    id: 23,
    title: "Recurring Deposit",
    description: "Service for recurring deposit account management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Recurring Deposit Image",
    },
    page: "recurring-deposit",
  },
  {
    id: 24,
    title: "Rental",
    description: "Service for rental property management.",
    img: {
      url: "/images/icons/dth.png",
      alt: "Rental Image",
    },
    page: "rental",
  },
];
function AllServiceDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={styles.__allServicesDialog}>
      <DialogTitle className={styles.__allServicesDialogTitle}>Recharge & Pay Bills</DialogTitle>
      <List className={styles.__allServicesList}>
        {ourService.map((service, index) => {
          return (
            <ListItem key={{ index }} className={styles.__allServicesListItem}>
              <Link href={`/recharge/${service.page}`} className={styles.__allServicesListItemLink}>
                <ListItemButton
                  onClick={() => handleListItemClick(service.page)}
                  className={styles.__allServicesListItemButton}
                >
                  <ListItemAvatar className={styles.__allServicesListItemAvatar}>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }} alt={service.img.alt} src={service.img.url}>
                      <MdOutlineLocalOffer />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={styles.__allServicesListItemText}
                    primary={service.title}
                    secondary={service.description}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
}

AllServiceDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export const OurServices = () => {
  const router = useRouter();
  const whitelist = ourService.map((service) => `${service.page}`);
  const handleClick = (page) => {
    if (whitelist.includes(page)) {
      router.push(page);
    } else {
      router.push("/recharge/mobile-prepaid");
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div className={styles.__ourServices}>
      <Swiper
        slidesPerView={7}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 70000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`rechargeSwiper ${styles.__ourServices__swiperContainer}`}
      >
        {ourService.map((items, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => handleClick(items.page)}
              className={styles.__ourServices__swiperSlide}
            >
              <div className={`${styles.__service} ${items.page == router.query.slug ? styles.__selectedService : ""}`}>
                <div className={styles.__serviceImg}>
                  <Image src={items.img.url} alt={items.img.alt} width={500} height={500} />
                </div>
                <div className={styles.__serviceContent}>
                  <h3>{items.title}</h3>
                  {/* <p>{items.description}</p> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.__ourServices__viewMore}>
        <button onClick={handleClickOpen}>
          More
          <CgLayoutGrid />
        </button>
      </div>
      <AllServiceDialog open={open} onClose={handleClose} />
    </div>
  );
};
const requestedBanner = (pageName) => {
  const url = `/images/banner/recharge-banner/${pageName}-banner/`;
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    arr.push({
      url: `${url}${i}.png`,
      alt: `${pageName} Image ${i}`,
    });
  }
  return arr;
};
export const ServiceForm = () => {
  const router = useRouter();
  const pageName = router.query.slug;
  const ourService = (pageName, usedFor) => {
    switch (pageName) {
      case "mobile-prepaid":
        return <Mobile_prepaid_form />;
      case "credit-card":
        return <Credit_card_form />;
      case "dth":
        return <Dth_form />;
      case "electricity":
        return <Electricity_form />;
      case "fastag":
        return <FastTag_form />;
      case "gas":
        return <Gas_form />;
      case "insurance":
        return <Insurance_form />;
      case "landline-postpaid":
        return <Landline_postpaid_form />;
      case "loan":
        return <Loan_form />;
      case "tax":
        return <tax_form />;
      case "water":
        return <Water_form />;
      case "cable-tv":
        return <Cable_tv_form />;
      case "clubs-and-associations":
        return <Clubs_and_associations_form />;
      case "municipal-services":
        return <Municipal_services_form />;
      case "municipal-taxes":
        return <Municipal_taxes_form />;
      case "education":
        return <Education_form />;
      case "lpg-cylinder":
        return <Lpg_cylinder_form />;
      case "subscription":
        return <Subscription_form />;
      case "housing-society":
        return <Housing_society_form />;
      case "hospital":
        return <Hospital_form />;
      case "recurring-deposit":
        return <Recurring_deposit_form />;
      case "rental":
        return <Rental_form />;
      default:
        return (
          <div className={styles.__serviceForm}>
            <h1>Page Not Found</h1>
          </div>
        );
    }
  };
  return <div className={styles.__serviceForm}>{ourService(pageName, "serviceForm")}</div>;
};
export const Mobile_prepaid_form = () => {
  return <div className={styles.__mobile_prepaid_form}>Mobile_prepaid_form</div>;
};
export const Mobile_prepaid_content = () => {
  return <div className={styles.__mobile_prepaid_content}>Mobile_prepaid_content</div>;
};
export const Credit_card_form = () => {
  return <div className={styles.__credit_card_form}>Credit_card_form</div>;
};
export const Credit_card_content = () => {
  return <div className={styles.__credit_card_content}>Credit_card_content</div>;
};
export const Dth_form = () => {
  return <div className={styles.__dth_form}>Dth_form</div>;
};
export const Dth_content = () => {
  return <div className={styles.__dth_content}>Dth_content</div>;
};
export const Electricity_form = () => {
  return <div className={styles.__electricity_form}>Electricity_form</div>;
};
export const Electricity_content = () => {
  return <div className={styles.__electricity_content}>Electricity_content</div>;
};
export const FastTag_form = () => {
  return <div className={styles.__fastag_form}>FastTag_form</div>;
};
export const FastTag_content = () => {
  return <div className={styles.__fastag_content}>FastTag_content</div>;
};
export const Gas_form = () => {
  return <div className={styles.__gas_form}>Gas_form</div>;
};
export const Gas_content = () => {
  return <div className={styles.__gas_content}>Gas_content</div>;
};
export const Insurance_form = () => {
  return <div className={styles.__insurance_form}>Insurance_form</div>;
};
export const Insurance_content = () => {
  return <div className={styles.__insurance_content}>Insurance_content</div>;
};
export const Landline_postpaid_form = () => {
  return <div className={styles.__landline_postpaid_form}>Landline_postpaid_form</div>;
};
export const Landline_postpaid_content = () => {
  return <div className={styles.__landline_postpaid_content}>Landline_postpaid_content</div>;
};

export const Loan_form = () => {
  return <div className={styles.__loan_form}>Loan_form</div>;
};
export const Loan_content = () => {
  return <div className={styles.__loan_content}>Loan_content</div>;
};
export const Mobile_postpaid_form = () => {
  return <div className={styles.__mobile_postpaid_form}>Mobile_postpaid_form</div>;
};
export const Mobile_postpaid_content = () => {
  return <div className={styles.__mobile_postpaid_content}>Mobile_postpaid_content</div>;
};
export const tax_form = () => {
  return <div className={styles.__tax_form}>tax_form</div>;
};
export const tax_content = () => {
  return <div className={styles.__tax_content}>tax_content</div>;
};
export const Water_form = () => {
  return <div className={styles.__water_form}>Water_form</div>;
};
export const Water_content = () => {
  return <div className={styles.__water_content}>Water_content</div>;
};
export const Cable_tv_form = () => {
  return <div className={styles.__cable_tv_form}>Cable_tv_form</div>;
};
export const Cable_tv_content = () => {
  return <div className={styles.__cable_tv_content}>Cable_tv_content</div>;
};
export const Clubs_and_associations_form = () => {
  return <div className={styles.__clubs_and_associations_form}>Clubs_and_associations_form</div>;
};
export const Clubs_and_associations_content = () => {
  return <div className={styles.__clubs_and_associations_content}>Clubs_and_associations_content</div>;
};
export const Municipal_services_form = () => {
  return <div className={styles.__municipal_services_form}>Municipal_services_form</div>;
};
export const Municipal_services_content = () => {
  return <div className={styles.__municipal_services_content}>Municipal_services_content</div>;
};
export const Municipal_taxes_form = () => {
  return <div className={styles.__municipal_taxes_form}>Municipal_taxes_form</div>;
};
export const Municipal_taxes_content = () => {
  return <div className={styles.__municipal_taxes_content}>Municipal_taxes_content</div>;
};
export const Education_form = () => {
  return <div className={styles.__education_form}>__education_form</div>;
};
export const Education_content = () => {
  return <div className={styles.__education_content}>__education_content</div>;
};
export const Lpg_cylinder_form = () => {
  return <div className={styles.__lpg_cylinder_form}>__lpg_cylinder_form</div>;
};
export const Lpg_cylinder_content = () => {
  return <div className={styles.__lpg_cylinder_content}>__lpg_cylinder_content</div>;
};
export const Subscription_form = () => {
  return <div className={styles.__subscription_form}>__subscription_form</div>;
};
export const Subscription_content = () => {
  return <div className={styles.__subscription_content}>__subscription_content</div>;
};
export const Housing_society_form = () => {
  return <div className={styles.__housing_society_form}>__housing_society_form</div>;
};
export const Housing_society_content = () => {
  return <div className={styles.__housing_society_content}>__housing_society_content</div>;
};
export const Hospital_form = () => {
  return <div className={styles.__hospital_form}>__hospital_form</div>;
};
export const Hospital_content = () => {
  return <div className={styles.__hospital_content}>__hospital_content</div>;
};
export const Recurring_deposit_form = () => {
  return <div className={styles.__recurring_deposit_form}>__recurring_deposit_form</div>;
};
export const Recurring_deposit_content = () => {
  return <div className={styles.__recurring_deposit_content}>__recurring_deposit_content</div>;
};
export const Rental_form = () => {
  return <div className={styles.__rental_form}></div>;
};
export const Rental_content = () => {
  return <div className={styles.__rental_content}>__rental_content </div>;
};
const Slug = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const whitelist = ourService.map((service) => `${service.page}`);
  useEffect(() => {
    const page = router.query.slug;
    if (!whitelist.includes(page)) {
      router.push("/recharge/mobile-prepaid");
    }
  }, [router, whitelist]);
  const pageName = router.query.slug;

  return (
    <div className={styles.__mainContainer}>
      <Banner type="home" ImgData={requestedBanner(pageName)} />
      <div className={styles.__container}>
        <div className={styles.__rechargeContainer}>
          <div className={styles.__recharge}>
            <OurServices />
            <ServiceForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;
