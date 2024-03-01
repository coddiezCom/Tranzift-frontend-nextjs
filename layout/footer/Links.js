import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links({ links }) {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul key={i}>
          <li>
            <b>{link.heading}</b>
          </li>
          {link.links.map((link, index) => (
            <li key={index}>
              <Link href={link.link} style={{ color: link.color }}>
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
