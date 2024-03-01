import React from "react";
import styles from "./detailContent.module.scss";
import Coupons from "./OfferDetails/Coupons";
import RMU_OfferDetail from "./OfferDetails/RMU_OfferDetail";
import RMU_OfferTermAndConditions from "./OfferDetails/RMU_OfferTermAndConditions";
import RMU_OfferDetailSummary from "./OfferDetails/RMU_OfferDetailSummary";
import { BiRupee } from "react-icons/bi";
import QuickLook from "./quickLook/QuickLook";
const DetailContent = () => {
  const data = {
    termAndCondition: [
      {
        term: "This offer from Yatra and IDFC FIRST Bank is open to all residents of India holding IDFC FIRST Bank Credit Cards. The offer can be availed by the customers making a full purchase only through their IDFC FIRST Bank Credit Cards on Yatra's website www.yatra.com ('Website').",
      },
      {
        term: "Customers have to fill the promo code 'IDFCFEST' in the promo code field on Yatra.com's payment page along with IDFC FIRST Bank Credit Cards details to avail the discount.",
      },
      {
        term: "IDFC FIRST Bank Cardholders are not bound in any way to participate in this offer. Any participation is voluntary and the offer is being made purely on a 'best effort' basis.",
      },
      {
        term: "This offer is non-encashable, not extendable and non-negotiable.",
      },
      {
        term: "This Offer shall be subject to all applicable laws, rules and regulations which are in existence and which may be promulgated anytime by any statutory authority.",
      },
      {
        term: "IDFC FIRST Bank is not making these offers and neither warrant nor guarantees the delivery, quality, merchantability or suitability of products/services availed of by the IDFC FIRST Bank Credit Cards members under this offer and the member shall be solely responsible for all effects and consequences therefrom.",
      },
      {
        term: "Any disputes as regards delivery, quality, warranty, merchantability or suitability of products/services availed of under this offer must be strictly addressed by the IDFC FIRST Bank Credit Cards members in writing to Merchant/ Brand directly and IDFC FIRST Bank will not entertain any communication in this regard.",
      },
      {
        term: "IDFC FIRST Bank shall not be liable for any loss or damage whatsoever or for any personal injury that may be suffered, by a IDFC FIRST Bank Credit Cards member, directly or indirectly, by use or non-use of products/services availed of under this offer.",
      },
      {
        term: "IDFC FIRST Bank reserves the right, at any time, without prior notice and without assigning any reason whatsoever, to add/alter/modify/change or vary all of these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar to this offer or not, or to extend or withdraw it altogether.",
      },
      {
        term: "Above offers is by way of a special offer for select IDFC FIRST Bank Credit Cards members only and nothing contained herein shall prejudice or affect the terms and conditions of the card member agreement. The terms of the above offers shall be in addition to and not in derogation of the terms contained in the Card members Agreement.",
      },
      {
        term: "All disputes pertaining to IDFC FIRST Bank Credit Cards, if any, arising out of or in connection with or as a result of above offers or otherwise relating hereto shall be subject to the exclusive jurisdiction of the competent courts / tribunals in Mumabi only, irrespective of whether courts / tribunals in other areas have concurrent or similar jurisdiction.",
      },
      {
        term: "All standard Terms and Conditions (as amended from time to time) mentioned on Yatra website would apply. In case of third party services/products, customer's sole recourse against the third party services/products being provided by third party suppliers shall be with the concerned suppliers only, and shall be subject to said supplier's own terms and conditions.",
      },
      {
        term: "This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.",
      },
      {
        term: "This offer is not valid for split bookings where customer makes multiple bookings to avail multiple discounts. Yatra reserves the right to recover the discounted amount or cancel the booking if such a case is brought or comes to Yatra's notice.",
      },
    ],
    coupons: [
      {
        img: "/Assets/images/Offer/offer.jpg",
        type: {
          typeName: "Coupon Code",
          value: "RMUHKASD21",
        },
      },
      {
        img: "/Assets/images/Offer/offer.jpg",
        type: {
          typeName: "Validity Till",
          value: "May 30, 2023",
        },
      },
      {
        img: "/Assets/images/Offer/offer.jpg",
        type: {
          typeName: "Applicable on",
          value: "Flights, Domestic Hotels and Bus",
        },
      },
    ],
    OfferDetail: {
      tableHead: ["Product", "Min. Transaction Value", "Discount"],
      content: [
        {
          Product: "Domestic Flight",
          "Min. Transaction Value": {
            icon: <BiRupee />,
            data: "4,000",
          },
          Discount: {
            discount: "Flat 14% OFF",
            upto: {
              icon: <BiRupee />,
              data: "1,800",
            },
          },
        },
        {
          Product: "International Flight",
          "Min. Transaction Value": {
            icon: <BiRupee />,
            data: "20,000",
          },
          Discount: {
            discount: "Flat 10% OFF",
            upto: {
              icon: <BiRupee />,
              data: "7,500",
            },
          },
        },
        {
          Product: "Domestic Hotels",
          "Min. Transaction Value": {
            icon: <BiRupee />,
            data: "4,000",
          },
          Discount: {
            discount: "Flat 25% OFF",
            upto: {
              icon: <BiRupee />,
              data: "1,800",
            },
          },
        },
        {
          Product: "Bus",
          "Min. Transaction Value": {
            icon: "",
            data: "No min. booking amount",
          },
          Discount: {
            discount: "Flat 15% OFF",
            upto: {
              icon: <BiRupee />,
              data: "500",
            },
          },
        },
      ],
      desc: [
        {
          title: "Offer validity :",
          desc: "",
          boldWord: "between May 25 - 30, 2023",
        },
        {
          title: "Offer valid on",
          desc: "only.",
          boldWord: "Bank of Baroda Credit Cards",
        },
        {
          title: "Use promo code :",
          desc: "to avail this offer.",
          boldWord: "BOBFEST",
        },
        {
          title: "",
          desc: "Offer is valid once per user, per product, per card during the offer period.",
          boldWord: "",
        },
        {
          title: "",
          desc: "This offer is valid only on online confirmed bookings.",
          boldWord: "",
        },
        {
          title: "",
          desc: "This offer is valid on selected domestic hotels only.",
          boldWord: "",
        },
      ],
    },
    DetailSummary: `<strong>Summer Sale</strong>, on Travel with Bank of Baroda Credit Cards. <strong>Flat 14% OFF (upto  ₹1,800) on domestic flights</strong>, <strong>Flat 10% OFF (upto  ₹7,500) on international flights</strong>, <strong>Flat 25% OFF (upto  ₹3,000) on domestic hotels</strong> and <strong>Flat 15% OFF (upto  ₹500) on bus</strong>. Hurry ! This offer is valid between<strong> May 25 - 30, 2023</strong>. Use promo code <strong>BOBFEST</strong> with Bank of Baroda Credit Cards only.`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <QuickLook data={data.coupons} />
        <RMU_OfferDetailSummary DetailSummary={data.DetailSummary} />
        <RMU_OfferDetail offerDetail={data.OfferDetail} />
        <RMU_OfferTermAndConditions data={data.termAndCondition} />
      </div>
    </div>
  );
};

export default DetailContent;
