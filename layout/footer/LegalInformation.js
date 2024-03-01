import styles from "./styles.module.scss";
import Link from "next/link";
export default function LegalInformation({ legalInformation }) {
  return (
    <div className={styles.footer__payment}>
      <ul>
        {legalInformation.map((link, index) => (
          <li key={index}>
            <Link href={link.link} style={{ color: link.color }}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
