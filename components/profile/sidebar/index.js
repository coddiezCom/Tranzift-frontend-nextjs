// import React Liabary
import { sidebarData } from "../../../data/profile";
// import components
import Item from "./Item";
// import styles
import styles from "./styles.module.scss";
// import react icons
import { RxCross2 } from "react-icons/rx";
// import react avtar
import Avatar from "react-avatar";
export default function Sidebar({ data, handleSideBar }) {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__close} onClick={() => handleSideBar(false)}>
          <RxCross2 />
        </div>
        <div className={styles.sidebar__container}>
          <Avatar name={data?.firstName + " " + data?.lastName} size="40" round={true} />
          <span className={styles.sidebar__name}>{data?.firstName + " " + data?.lastName}</span>
          <ul>
            {sidebarData?.map((item, i) => (
              <Item key={i} item={item} visible={data.tab == i.toString()} index={i.toString()} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.sidebar__overlay} onClick={() => handleSideBar(false)}></div>
    </>
  );
}
