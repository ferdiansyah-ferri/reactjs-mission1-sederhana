import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <h3 id="Judul1" className={styles.HomeJudul}>
        Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video
        Interaktif!
      </h3>
      <p className={styles.Para}>
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        Pembelajaran berkualitas tinggi.Tidak hanya itu,anda juga dapat
        berpartisipasi dalam latihan yang akan meningkatkan pemahan anda.
      </p>
      <button className={styles.BTN}>
        Temukan Video Course Untuk Dipelajari!
      </button>
    </div>
  );
};

export default Home;
