import React from "react";
import NotFoundSvg from "../public/svg/3.svg";
import Image from "next/image";
// import styles from "../../styles/notFound.module.scss";
import styles from "../styles/notFound.module.scss";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center pb-4 ${styles.__notFoundContainer}`}>
      <div className="w-full">
        <Image src={"/images/NotFound/3.png"} width={1000} height={1000} alt="404" />
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => router.push("/")}
          className=" border-2 border-gray-900 shadow-md px-4 py-2 rounded-md font-bold hover:shadow-lg transition-all duration-700 hover:scale-105 hover:text-[#1973e8]"
        >
          Back to the homepage
        </button>
      </div>
    </div>
  );
};

export default Index;
