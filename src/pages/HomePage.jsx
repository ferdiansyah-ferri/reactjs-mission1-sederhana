import HomePages from "../components/HomePages";
import Home from "../components/Home";
import HeaderDua from "../components/HeaderDua";
import HomeCta from "../components/HomeCta";
import Footer from "../components/Footer";
import styles from "../components/HomePages.module.css";
import Card from "../components/Card";
import Gambar3 from "../components/img/gmbar3.jpg";
import Gambar1 from "../components/img/gmbar1.jpg";
import Gambar2 from "../components/img/gmbar2.jpg";
import Avatar from "../components/img/avatar.jpg";
import Rating from "../components/Rating";
import api from "../services/api";

const HomePage = () => {
  const cardsData = [
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar3,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 350K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar3,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 350K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar3,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 350K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar2,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 250K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar2,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 250K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar2,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 250K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar1,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 300K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar1,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 300K",
    },
    {
      icon: <Rating totalStars={5} />,
      title: "Big 4 Auditor Financial Analyst",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
      image: Gambar1,
      Avatar: Avatar,
      nama: "Peri Perdiansah",
      nameRq: "Senior Accountan di Gojek",
      Harga: "Rp. 300K",
    },
  ];

  return (
    <>
      <div className={styles.HomePage}>
        <HomePages />
        <Home />
        <HeaderDua />
        <div className={styles.CardSlider}>
          {cardsData.map((card) => (
            <div key={card.id} className={styles.CardContent}>
              <Card {...card} />
            </div>
          ))}
        </div>
        <HomeCta />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
