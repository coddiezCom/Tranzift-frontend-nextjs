import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { ErrorMessage, useField } from "formik";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { TiMessage } from "react-icons/ti";

export default function LoginInput({ icon, placeholder, styleType, ...props }) {
  const [field, meta] = useField(props);
  const returnIcon = (iconName) => {
    switch (iconName) {
      case "user":
        return <BiUser />;
      case "email":
        return <SiMinutemailer />;
      case "password":
        return <IoKeyOutline />;
      case "phone":
        return <MdOutlinePhone />;
      case "message":
        return <TiMessage />;
      default:
        return "";
    }
  };
  return (
    <div className={`${styles.__inputs} ${styles[styleType]}`}>
      <div className={`${styles.input}  ${meta.touched && meta.error ? styles.error : ""}`}>
        <div>
          {returnIcon(icon)}
          <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props} />
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
