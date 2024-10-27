import { useState, useEffect } from "react";
import axios from "axios";
import Gambar1 from "./img/gmbar1.jpg";
import Avatar from "./img/avatar.jpg";
import styles from "../components/styles/SemuaProduk.module.css";
import Rating from "./Rating";
import { validate } from "uuid";
function CardDataController() {
  const [cardsData, setCardData] = useState([
    {
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar1,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 300K",
      id: "1",
    },
  ]);

  useEffect(() => {
    const saveDataToMockAPI = async () => {
      try {
        const response = await axios.post(
          "https://670f589f3e715186165771a0.mockapi.io/cards",
          cardsData
        );
        console.log("Data berhasil disimpan:", response.data);
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);
      }
    };
    saveDataToMockAPI();
  }, []);

  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id} className={styles.cardContent}>
          <div className={styles.CardKomponen}>
            <img className={styles.gambarKomponen} src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className={styles.cardImageKomponen}>
              <img className={styles.avatarKomponen} src={card.Avatar} alt="" />
              <ul>
                <li>
                  <span className={styles.name}>{card.nama}</span>
                </li>
                <li>
                  <p className={styles.nameRq}>{card.nameRq}</p>
                </li>
              </ul>
            </div>
            <div className={styles.IconKomponen}>
              <Rating totalStars={5} />
              <p className={styles.HargaKomponen}>{card.Harga}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} // Komponen ini tidak perlu merender apapun, hanya mengelola data

export default CardDataController;
