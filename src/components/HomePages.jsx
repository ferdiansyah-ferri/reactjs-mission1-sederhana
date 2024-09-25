import avatar from "./img/avatar.jpg";
import styles from "./HomePages.module.css";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const HomePages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.NavbarHeader}>
        <div>
          <h2>Videobelajar</h2>
        </div>
        <div className={styles.menuToggle}>
          <input
            type="checkbox"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={isMenuOpen ? "slide" : ""}>
          <ul className={isMenuOpen ? styles.showMenu : styles.hideMenu}>
            <li>
              <HashLink to="#Judul1">Home</HashLink>
            </li>
            <li>
              <HashLink to="#ClassCard">Kelas</HashLink>
            </li>
            <li>
              <HashLink to="#Footer">Tentang kami</HashLink>
            </li>
            <li>Kategori</li>
            <li>
              <select name="" id="" className={styles.kategori}>
                <option value="">Semua Kelas</option>
                <option value="">Pengembangan Diri</option>
                <option value="">Desain</option>
                <option value="">Pemasaran</option>
                <option value="">Bisnis</option>
              </select>
            </li>
          </ul>
        </div>

        <div className={styles.image}>
          <a href="">
            <img src={avatar} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
