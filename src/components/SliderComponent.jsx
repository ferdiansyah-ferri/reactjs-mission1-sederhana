import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/SemuaProduk.module.css";

import Card from "./Card";

import Avatar from "./img/avatar.jpg";
import Gambar1 from "./img/gmbar1.jpg";
import Gambar2 from "./img/gmbar2.jpg";

import Gambar3 from "./img/gmbar3.jpg";
import Rating from "./Rating";

const cardsData = [
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar1,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar1,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar1,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar2,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 250K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar2,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 250K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar3,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 350K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar3,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 350K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar1,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar1,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,cupiditate necessitatibus dicta ipsa molestias quidem.",
    image: Gambar3,
    Avatar: Avatar,
    nama: "Peri Perdiansah",
    nameRq: "Senior Accountan di Gojek",
    icon: <Rating totalStars={5} />,
    Harga: "Rp. 350K",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SliderComponent() {
  return (
    <div className={styles.Card}>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
