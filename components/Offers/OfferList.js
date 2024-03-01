import React, { useState } from "react";
import styles from "./offerList.module.scss";
const OfferList = ({ list, handleList }) => {
  const [selectedList, setSelectedList] = useState("Domestic Flights");

  return (
    <div className={styles.container}>
      {list.map((data, index) => {
        return (
          <div
            key={index}
            style={{
              borderTop: selectedList === data.heading && "3px solid red",
              borderBottom: selectedList === data.heading && "none",
            }}
            onClick={(e) => {
              setSelectedList(data.heading);
              handleList(e, data.heading);
            }}
          >
            {data.heading}
          </div>
        );
      })}
    </div>
  );
};

export default OfferList;
