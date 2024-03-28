// import react liabrary
import { useEffect, useState } from "react";
import Head from "next/head";
// import styles
import styles from "./styles.module.scss";
// import components
import Sidebar from "../sidebar";
// import static data
import { sidebarData } from "../../../data/profile";
// import react-icons
import { IoMenu } from "react-icons/io5";

export default function Layout({ tab, children, session }) {
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
  }, []);
  return (
    <div className={styles.layout}>
      <Head>
        <title>{session?.firstName + " " + session?.lastName}</title>
      </Head>
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
