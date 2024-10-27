import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../services/api";
import Rating from "./Rating";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles/SemuaProduk.module.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function Card({
  icon,
  title,
  description,
  image,
  Avatar,
  nama,
  nameRq,
  Harga,
}) {
  return (
    <>
      <div>
        <div className={styles.CardKomponen}>
          <img className={styles.gambarKomponen} src={image} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.cardImageKomponen}>
            <img className={styles.avatarKomponen} src={Avatar} alt="" />
            <ul>
              <li>
                <span className={styles.name}>{nama}</span>
              </li>
              <li>
                <p className={styles.nameRq}>{nameRq}</p>
              </li>
            </ul>
          </div>
          <div className={styles.IconKomponen}>
            {icon}
            <p className={styles.HargaKomponen}>{Harga}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
