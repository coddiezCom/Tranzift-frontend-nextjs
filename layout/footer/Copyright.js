import styles from "./styles.module.scss";
import dayjs from "dayjs";
import Image from "next/image";
export default function Copyright({}) {
  const date = dayjs();
  const companyName = "Tranzift";
  const companyLogo = "/logo.png";
  return (
    <div className={styles.footer__copyright}>
      {/* <section className={styles.websiteLogo}>
        <Image src={companyLogo} width={100} height={100} alt={`${companyName}-logo`} />
      </section> */}
      <section>
        <section>
          {/* <h2>{companyName}</h2> */}
          <p>
            ©{date.format(`YYYY`)} {companyName} All Rights Resereved.
          </p>
        </section>
        <ul></ul>
      </section>
    </div>
  );
}
