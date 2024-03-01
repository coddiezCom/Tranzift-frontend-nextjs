import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
// import Header from "../../header";
import Sidebar from "../sidebar";
import { sidebarData } from "@/data/profile";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";

export default function Layout({ tab, children }) {
  // console.log(session);
  const session = {
    name: "jaspreet singh",
    email: "jaspreetsingh09912@gmail.com",
    image: "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
    id: "6582ab3fa5db0cd756b93d1c",
    role: "admin",
  };
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleSideBar = (value) => {
    setToggleSideBar(value);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) {
        setToggleSideBar(true);
      }
    }
  });
  return (
    <div className={styles.layout}>
      <Head>
        <title>{session?.user?.name}</title>
      </Head>
      {/* <Header /> */}
      <div className={styles.layout__container}>
        {toggleSideBar ? (
          <Sidebar
            data={{
              ...session,
              tab,
            }}
            handleSideBar={handleSideBar}
          />
        ) : (
          <>
            <ul className={`bg-zinc-50 p-2 py-4 flex flex-col items-center gap-5 ${styles.__sidebarMobileLikes}`}>
              <li className="text-3xl cursor-pointer flex" onClick={() => handleSideBar(true)}>
                {/* <span className="text-sm text-gray-400">-</span> */}
                <span className="text-2xl  text-gray-600 font-light">
                  <IoMenu />
                </span>
              </li>
              {sidebarData.map((item, index) => {
                return (
                  <li key={index} className="text-2xl font-light">
                    {item.icon}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <div className={styles.layout__content}>{children}</div>
      </div>
    </div>
  );
}
