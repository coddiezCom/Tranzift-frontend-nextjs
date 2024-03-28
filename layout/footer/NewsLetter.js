import { useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const subscribe = async () => {
    setSuccess("");
    setError("");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/newsletter", { email });
      setSuccess(data.message);
      setLoading(false);
      setEmail("");
    } catch (error) {
      setSuccess("");
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className={styles.footer__newsletter}>
      <h2>Join Our NewsLetter</h2>
      <p className="">Stay Informed, Stay Connected: Receive Exclusive Updates from Tranzift</p>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <span className={styles.__btn}>
          <button
            className={`${styles.btn_primary_}   transition-all duration-1000 hover:scale-105 hover:text-[#1973e8]`}
            disbaled={loading == true ? true : undefined}
            style={{ cursor: `${loading ? "not-allowed" : ""}` }}
            onClick={() => subscribe()}
          >
            SUBSCRIBE
          </button>
        </span>
      </div>
      {loading && <div className="">loading...</div>}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
}
