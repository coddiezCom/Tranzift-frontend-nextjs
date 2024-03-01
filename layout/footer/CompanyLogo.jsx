import React from "react";
import style from "./styles.module.scss";
import Image from "next/image";
const CompanyLogo = () => {
  const companyDetail = {
    logo: {
      img: "/T1/T4.png",
      alt: "Tranzift",
    },
    name: "Tranzift",
  };
  return (
    <div className={`${style.footer__companyLogo}`}>
      <span className=" ">
        <Image src={companyDetail?.logo?.img} alt={companyDetail?.logo?.alt} width={500} height={500} />
      </span>
      {/* <span className="">
        <h2>{companyDetail?.name}</h2>
      </span> */}
    </div>
  );
};

export default CompanyLogo;
