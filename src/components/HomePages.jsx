import avatar from "./img/avatar.jpg";
import styles from "./HomePages.module.css";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { LogOut } from "feather-icons-react";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
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
            <li>
              <button
                onClick={() => navigate("/semuaproduk")}
                className={styles.BtnProduk}
              >
                Kategori
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.image}>
          <img src={avatar} alt="Foto Profile" onClick={toggleMenu} />
          {isOpen && (
            <ul className={isOpen ? styles.dropDown : styles.hideDown}>
              <li>
                <button
                  className={styles.DropLink}
                  onClick={() => navigate("/profile")}
                >
                  Profile Saya
                </button>
              </li>
              <li>
                <button className={styles.DropLink}>Kelas Saya</button>
              </li>
              <li>
                <button className={styles.DropLink}>Pesanan saya</button>
              </li>
              <li>
                <button className={styles.DropLink}>
                  Keluar
                  <LogOut size={14} color="red" className={styles.LogOut} />
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePages;
