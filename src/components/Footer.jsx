import styles from "./Footer.module.css";
import { Linkedin } from "feather-icons-react";
import { Facebook } from "feather-icons-react";
import { Instagram } from "feather-icons-react";
import { Twitter } from "feather-icons-react";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <ul>
          <h3 id="Footer">Videobelajar</h3>
          <li>
            <h4>
              Gali potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h4>
          </li>
          <li>
            <p>Jln.Usman Effendi No.50 Kuningan, Jawa Barat.</p>
          </li>
          <li>
            <p>+62-812-4785 -4915 </p>
          </li>
        </ul>
        <ul>
          <label htmlFor="">Kategori</label>
          <li>
            <a href="">Digital & Teknologi</a>
          </li>
          <li>
            <a href="">Pemasaran</a>
          </li>
          <li>
            <a href="">Managemen Bisnis</a>
          </li>
          <li>
            <a href="">Pengembangan Diri</a>
          </li>
          <li>
            <a href="">Desain</a>
          </li>
        </ul>
        <ul>
          <label htmlFor="">Perusahaan</label>
          <li>
            <a href="">Tentang Kami</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Kebijakan Privasi</a>
          </li>
          <li>
            <a href="">Ketentuan Layanan</a>
          </li>
          <li>
            <a href="">Bantuan</a>
          </li>
        </ul>
        <ul>
          <label htmlFor="">Komunitas</label>
          <li>
            <a href="">Tips Sukses</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
        <div className={styles.Akhir}>
          <p>@2023 Peri Perdiansah All Rights Reserved</p>
          <div className={styles.IconFooter}>
            <span>
              <Linkedin size={20} color="black" />
            </span>
            <span>
              <Facebook size={20} color="black" />
            </span>
            <span>
              <Instagram size={20} color="black" />
            </span>
            <span>
              <Twitter size={20} color="black" />
            </span>
          </div>
        </div>
        <div className={styles.FooterAkhir}></div>
      </div>
    </>
  );
};

export default Footer;
