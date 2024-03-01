import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function Socials({ socials }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className={styles.footer__socials}>
      <section>
        <ul>
          {socials.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredIndex === index ? item.hover_color : "inherit",
                transition: "color ease-in-out 0.5s",
              }}
            >
              <Link href={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
