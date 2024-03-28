// import React Liabary
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import styles
import styles from "./styles.module.scss";
// import slugify liabary
import slugify from "slugify";
// import react icons
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
// import redux liabary
import { useDispatch } from "react-redux";
import { SetUserDetail } from "../../../store/UserSlice";
import { setCookie, destroyCookie } from "nookies";
export default function Item({ item, visible, index }) {
  const [show, setShow] = useState(visible);
  const dispatch = useDispatch();
  const router = useRouter();
  const signOut = () => {
    dispatch(
      SetUserDetail({
        user_id: "",
        email_id: "",
        token: "",
        firstName: "",
        lastName: "",
        phone: "",
        defaultAddress: "",
      })
    );
    destroyCookie(null, "token", {
      path: "/",
    });
    router.push("/");
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
      ) : item.heading == "My Wallet" ? (
        <b onClick={() => router.push(item.link)}>
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
