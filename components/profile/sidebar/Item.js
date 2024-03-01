import { useState } from "react";
import styles from "./styles.module.scss";
// import { signOut } from "next-auth/react";
import Link from "next/link";
// import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import slugify from "slugify";
import { useRouter } from "next/router";
// import { TbArrowBadgeLeftFilled } from "react-icons/tb";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

export default function Item({ item, visible, index }) {
  const [show, setShow] = useState(visible);
  const router = useRouter();
  const signOut = () => {
    console.log("signout");
  };
  return (
    <li>
      {item.heading == "Sign out" ? (
        <b onClick={() => signOut()}>
          <span className="flex items-center">
            <span>{item?.icon}</span>
            <span>{item.heading}</span>
          </span>
        </b>
      ) : (
        <b onClick={() => setShow((prev) => !prev)}>
          <span className="flex items-center">
            <span>{item?.icon}</span>
            <span>{item.heading}</span>
          </span>
          <span className="rotate-90">{show ? <LiaAngleLeftSolid /> : <LiaAngleRightSolid />}</span>
        </b>
      )}
      {show && (
        <ul>
          {item.links.map((link, i) => {
            console.log(slugify(link.name, { lower: true }), router.query.q?.split("__")[0] || "", "test");
            return (
              <>
                {link.link.startsWith("/profile/orders") ? (
                  <li
                    className={`${
                      (router.query.q?.split("__")[0] || "") == slugify(link.name, { lower: true }) ? styles.active : ""
                    } flex items-center  `}
                  >
                    {link?.icon}
                    <Link
                      href={`${link.link}?tab=${index}&q=${slugify(link.name, {
                        lower: true,
                      })}__${link.filter}`}
                    >
                      <>{link.name}</>
                    </Link>
                  </li>
                ) : (
                  <li
                    className={`${
                      (router.query.q || "") == slugify(link.name, { lower: true }) ? styles.active : ""
                    } flex items-center `}
                  >
                    {link?.icon}
                    <Link
                      href={`${link.link}?tab=${index}&q=${slugify(link.name, {
                        lower: true,
                      })}`}
                    >
                      <>{link.name}</>
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      )}
    </li>
  );
}
