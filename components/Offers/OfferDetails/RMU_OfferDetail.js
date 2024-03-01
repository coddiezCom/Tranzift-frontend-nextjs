import React from "react";
import styles from "./rmuOfferDetail.module.scss";
import { BiRupee } from "react-icons/bi";
const RMU_OfferDetail = ({ offerDetail }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Summer Sale with Bank of Baroda Credit Cards
      </div>
      <table
        className={styles.dealContentTable}
        bordercolor="#D8D8D8"
        border="1"
      >
        <tbody>
          <tr>
            <th>{offerDetail.tableHead[0]}</th>
            <th width="25%">{offerDetail.tableHead[1]}</th>
            <th>{offerDetail.tableHead[2]}</th>
          </tr>{" "}
          {offerDetail.content.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.Product}</td>
                <td>
                  {data["Min. Transaction Value"].icon}
                  {data["Min. Transaction Value"].data}
                </td>
                <td>
                  <strong>
                    {data.Discount.discount} ( upto {data.Discount.upto.icon}
                    {data.Discount.upto.data})
                  </strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className={styles.details}>
        {offerDetail.desc.map((item, index) => {
          return (
            <li key={index}>
              {item.title} <strong>{item.boldWord}</strong> {item?.desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RMU_OfferDetail;
