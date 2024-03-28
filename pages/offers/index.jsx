import React from "react";
import { TfiGift } from "react-icons/tfi";
import Image from "next/image";
export const OfferCard = ({ img, offerTitle, couponCode, offerPeriod, termsAndConditions }) => {
  return (
    <div className={styles.offerCard}>
      <div className={styles.offerCard__image}>
        <Image width={500} height={500} src={img.url} alt={img.alt} />
      </div>
      <div className={styles.offerCard__title}> {offerTitle} </div>
      <div className={styles.offerCard__couponCode}> {couponCode} </div>
      <div className={styles.offerCard__offerPeriod}> {offerPeriod} </div>
      <div className={styles.offerCard__termsAndConditions}>
        <ul className="">
          {termsAndConditions.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const Index = () => {
  const data = [
    {
      img: {
        url: "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg",
        alt: "offer",
      },
      offerTitle: "Get assured cashback on using Paytm UPI",
      couponCode: "Use Code: JAWAN5",
      offerPeriod: "Offer period - 08th September to 31st March 2024",
      termsAndConditions: [
        "This offer is applicable on purchase of any E-gift card worth ₹ 50 or above on Woohoo.in or Woohoo App (Click here to download) except Amazon Shopping Voucher, Amazon Shopping Voucher Special, Amazon Pay E-Gift Card during the offer period.",
        "Use code JAWAN5 to get flat 10% cashback (max cashback is Rs.5). Applicable on payment via Paytm UPI.",
        "Customers will receive the cash back in the form of Woohoo Loyalty Points which will be credited to customer’s Woohoo Account within 1 hour of successful order completion. (1 Loyalty Point = 1 rupee).",
        "Woohoo Loyalty Points can be used to purchase 100+ Gift Cards on Woohoo.",
        "Customer can avail the offer a maximum of 1 time during the offer period.",
        "If due to technical glitches and network issues the Woohoo Coins are not disbursed, customers should contact Woohoo within 5 days and Woohoo will attempt to rectify the same in 10 working days.",
        "The brands available under the offer, and the offer in its entirety can be modified/withdrawn from Woohoo.in and Woohoo App on any day, and at any time, without any prior intimation.",
        "This offer cannot be clubbed with any other offers currently available on Woohoo.",
        "Terms and Conditions are subject to change without prior notice at the sole discretion of Qwikcilver Solutions Private. Ltd.",
        "For any queries contact www.woohoo.in at 080 6980 6393 or write to us on support@woohoo.in.",
      ],
    },
    {
      img: {
        url: "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg",
        alt: "offer",
      },
      offerTitle: "Get assured cashback on using Paytm UPI",
      couponCode: "Use Code: JAWAN5",
      offerPeriod: "Offer period - 08th September to 31st March 2024",
      termsAndConditions: [
        "This offer is applicable on purchase of any E-gift card worth ₹ 50 or above on Woohoo.in or Woohoo App (Click here to download) except Amazon Shopping Voucher, Amazon Shopping Voucher Special, Amazon Pay E-Gift Card during the offer period.",
        "Use code JAWAN5 to get flat 10% cashback (max cashback is Rs.5). Applicable on payment via Paytm UPI.",
        "Customers will receive the cash back in the form of Woohoo Loyalty Points which will be credited to customer’s Woohoo Account within 1 hour of successful order completion. (1 Loyalty Point = 1 rupee).",
        "Woohoo Loyalty Points can be used to purchase 100+ Gift Cards on Woohoo.",
        "Customer can avail the offer a maximum of 1 time during the offer period.",
        "If due to technical glitches and network issues the Woohoo Coins are not disbursed, customers should contact Woohoo within 5 days and Woohoo will attempt to rectify the same in 10 working days.",
        "The brands available under the offer, and the offer in its entirety can be modified/withdrawn from Woohoo.in and Woohoo App on any day, and at any time, without any prior intimation.",
        "This offer cannot be clubbed with any other offers currently available on Woohoo.",
        "Terms and Conditions are subject to change without prior notice at the sole discretion of Qwikcilver Solutions Private. Ltd.",
        "For any queries contact www.woohoo.in at 080 6980 6393 or write to us on support@woohoo.in.",
      ],
    },
    {
      img: {
        url: "/images/gift_card/Fastrack_E-Gift_Card_dtp.jpg",
        alt: "offer",
      },
      offerTitle: "Get assured cashback on using Paytm UPI",
      couponCode: "Use Code: JAWAN5",
      offerPeriod: "Offer period - 08th September to 31st March 2024",
      termsAndConditions: [
        "This offer is applicable on purchase of any E-gift card worth ₹ 50 or above on Woohoo.in or Woohoo App (Click here to download) except Amazon Shopping Voucher, Amazon Shopping Voucher Special, Amazon Pay E-Gift Card during the offer period.",
        "Use code JAWAN5 to get flat 10% cashback (max cashback is Rs.5). Applicable on payment via Paytm UPI.",
        "Customers will receive the cash back in the form of Woohoo Loyalty Points which will be credited to customer’s Woohoo Account within 1 hour of successful order completion. (1 Loyalty Point = 1 rupee).",
        "Woohoo Loyalty Points can be used to purchase 100+ Gift Cards on Woohoo.",
        "Customer can avail the offer a maximum of 1 time during the offer period.",
        "If due to technical glitches and network issues the Woohoo Coins are not disbursed, customers should contact Woohoo within 5 days and Woohoo will attempt to rectify the same in 10 working days.",
        "The brands available under the offer, and the offer in its entirety can be modified/withdrawn from Woohoo.in and Woohoo App on any day, and at any time, without any prior intimation.",
        "This offer cannot be clubbed with any other offers currently available on Woohoo.",
        "Terms and Conditions are subject to change without prior notice at the sole discretion of Qwikcilver Solutions Private. Ltd.",
        "For any queries contact www.woohoo.in at 080 6980 6393 or write to us on support@woohoo.in.",
      ],
    },
  ];
  return (
    <div className="">
      <div className="divide-y divide-dashed">
        <h2>Trazift Offers</h2>
      </div>
      <ul className="">
        {data.map((item, i) => (
          <li key={i}>
            <OfferCard
              img={item.img}
              offerTitle={item.offerTitle}
              couponCode={item.couponCode}
              offerPeriod={item.offerPeriod}
              termsAndConditions={item.termsAndConditions}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
