import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.scss";

export default function AdminInput({ styleType, placeholder, handleChange, value, label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`${styleType ? styles[styleType] : styles.style1}`}>
      <label className={`${styles.label} ${meta.touched && meta.error ? styles.inputError : ""}`}>
        <span>{label}</span>
        <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props} />
      </label>
      {meta.touched && meta.error && (
        <div className={styles.inputError__msg}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
