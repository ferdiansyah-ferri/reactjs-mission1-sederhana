import styles from "./HomeCta.module.css";

const HomeCta = () => {
  return (
    <div className={styles.HomeCta}>
      <p className={styles.JudulCta}>NEWSLETTER</p>
      <h3 className={styles.JudulCta2}>Mau Belajar Lebih Banyak?</h3>
      <p className={styles.ParagraphCta}>
        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
        spesial dari program-program terbaik dari hariesok.id
      </p>
      <div className={styles.controlCta}>
        <input type="text" placeholder="Masukan Emailmu" />
        <button className={styles.btnCta} type="submit">
          Suscribe
        </button>
      </div>
    </div>
  );
};

export default HomeCta;
