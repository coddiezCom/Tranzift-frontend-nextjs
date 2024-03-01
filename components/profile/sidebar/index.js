import { sidebarData } from "../../../data/profile";
import Item from "./Item";
import styles from "./styles.module.scss";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar({ data, handleSideBar }) {
  // console.log(data);
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__close} onClick={() => handleSideBar(false)}>
          <RxCross2 />
        </div>
        <div className={styles.sidebar__container}>
          <Image src={data.image} alt="" width={500} height={500} />
          <span className={styles.sidebar__name}>{data.name}</span>
          <ul>
            {sidebarData.map((item, i) => (
              <Item key={i} item={item} visible={data.tab == i.toString()} index={i.toString()} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.sidebar__overlay} onClick={() => handleSideBar(false)}></div>
    </>
  );
}
