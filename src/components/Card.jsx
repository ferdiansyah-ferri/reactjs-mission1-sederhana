import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles/SemuaProduk.module.css";

function Card({
  title,
  description,
  image,
  Avatar,
  nama,
  nameRq,
  icon,
  Harga,
}) {
  return (
    <>
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
    </>
  );
}

export default Card;
