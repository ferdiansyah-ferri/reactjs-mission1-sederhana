import React, { useState } from "react";
import { Star } from "feather-icons-react";
import styles from "./styles/SemuaProduk.module.css";
function Rating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleSelect = (starIndex) => {
    setSelectedStars(starIndex + 1);
  };

  return (
    <div className={styles.IconKomponen}>
      {[...Array(totalStars)].map((_, index) => (
        <div
          key={index}
          className={`${styles.star} ${
            index < selectedStars ? styles.selected : ""
          }`}
          selected={index < selectedStars}
          onClick={() => handleSelect(index)}
        >
          <Star
            size={20}
            color={index < selectedStars ? "gold" : "gray"}
            cursor="pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default Rating;
