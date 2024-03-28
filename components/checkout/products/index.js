import { FaStaylinked } from "react-icons/fa";
import styles from "./styles.module.scss";
import Image from "next/image";
export default function Products({ cart }) {
  return (
    <div className={styles.products}>
      <div className={styles.products__header}>
        <h1>Cart</h1>
        <span>{cart.products.length == 1 ? "1 item" : `${cart.products.length} items`}</span>
      </div>
      <div className={styles.products__wrap}>
        {cart.products.map((product, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.product__img}>
              <Image width={500} height={500} src={product.image} alt="" />
              <div className={styles.product__infos}>
                <Image width={500} height={500} src={product.color.image} alt="" />
                <span>{product.size}</span>
                <span>x{product.qty}</span>
              </div>
            </div>
            <div className={styles.product__name}>
              {product.name.length > 18 ? `${product.name.substring(0, 18)}...` : product.name}
            </div>
            <div className={styles.product__price}>{(product.price * product.qty).toFixed(2)}₹</div>
          </div>
        ))}
      </div>
      <div className={styles.products__total}>
        Subtotal : <b>{cart.cartTotal}₹</b>
      </div>
    </div>
  );
}
