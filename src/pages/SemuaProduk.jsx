import { useState } from "react";
import HomePages from "../components/HomePages";
import HeaderDua from "../components/HeaderDua";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../components/SliderComponent";
import styles from "../components/styles/SemuaProduk.module.css";

import {
  Book,
  ShoppingBag,
  Clock,
  ChevronUp,
  ChevronDown,
  Search,
} from "feather-icons-react";

const SemuaProduk = () => {
  const [isBidangStudiOpen, setIsBidangStudiOpen] = useState(false);
  const [isHargaOpen, setIsHargaOpen] = useState(false);
  const [isDurasiOpen, setIsDurasiOpen] = useState(false);
  const [isUrutanOpen, setIsUrutanOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    bidangStudi: [],
    harga: [],
    durasi: "",
  });
  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value),
    }));
  };
  const handleReset = () => {
    setSelectedFilters({
      bidangStudi: [],
      harga: [],
      durasi: "",
    });
  };
  const toggleBidangStudi = () => {
    setIsBidangStudiOpen(!isBidangStudiOpen);
  };
  const toggleHarga = () => {
    setIsHargaOpen(!isHargaOpen);
  };
  const toggleDurasi = () => {
    setIsDurasiOpen(!isDurasiOpen);
  };
  const toggleUrutan = () => {
    setIsUrutanOpen(!isUrutanOpen);
  };

  return (
    <div className={styles.SemuaProduk}>
      <div className={styles.HomePagesProduk}>
        <HomePages />
      </div>
      <div className={styles.HeaderDuaProduk}>
        <HeaderDua />
      </div>
      <div className={styles.UrutanContainer}>
        <div className={styles.InputFilter}>
          <p>
            <bold>Urutkan</bold>
          </p>
          <ChevronDown
            size={15}
            className={styles.IconSrc}
            style={{ display: isUrutanOpen ? "none" : "block" }}
            onClick={toggleUrutan}
          />
          <ChevronUp
            size={15}
            className={styles.IconSrc}
            style={{ display: isUrutanOpen ? "block" : "none" }}
            onClick={toggleUrutan}
          />
        </div>
        {isUrutanOpen && (
          <div className={styles.TrackContainer}>
            <button type="submit" className={styles.buttonSrc}>
              Harga Rendah
            </button>
            <button type="submit" className={styles.buttonSrc}>
              Harga Tinggi
            </button>
            <button type="submit" className={styles.buttonSrc}>
              A to Z
            </button>
            <button type="submit" className={styles.buttonSrc}>
              Z to A
            </button>
            <button type="submit" className={styles.buttonSrc}>
              Rating Tertinggi
            </button>
            <button type="submit" className={styles.buttonSrc}>
              Rating Terendah
            </button>
          </div>
        )}
        <div className={styles.pencarianKelas}>
          <input
            className={styles.InputKelas}
            type="text"
            placeholder="Cari kelas"
          />
          <Search size={20} className={styles.IconSearch} />
        </div>
      </div>

      <div className={styles.filterContainer}>
        <h5>Filter</h5>
        <button className={styles.buttonReset} onClick={handleReset}>
          Reset
        </button>
        <div className={styles.filterGroup}>
          <p className={styles.labelJudul}>
            <Book size={12} className={styles.IconContainer} />
            Bidang Studi
            <ChevronDown
              size={15}
              className={styles.IconR}
              style={{ display: isBidangStudiOpen ? "none" : "block" }}
              onClick={toggleBidangStudi}
            />
            <ChevronUp
              size={15}
              className={styles.IconR}
              style={{ display: isBidangStudiOpen ? "block" : "none" }}
              onClick={toggleBidangStudi}
            />
          </p>

          {isBidangStudiOpen && (
            <div className={styles.bidangStudi}>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="pemasaran"
                  checked={selectedFilters.bidangStudi.includes("pemasaran")}
                  onChange={handleFilterChange}
                  className={styles.CheckBox}
                />
                Pemasaran
              </label>

              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="digital & teknologi"
                  checked={selectedFilters.bidangStudi.includes(
                    "digital & teknologi"
                  )}
                  onChange={handleFilterChange}
                />
                Digital & Teknologi
              </label>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="pengembangan diri"
                  checked={selectedFilters.bidangStudi.includes(
                    "pengembangan diri"
                  )}
                  onChange={handleFilterChange}
                />
                Pengembangan Diri
              </label>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="bisnis manajemen"
                  checked={selectedFilters.bidangStudi.includes(
                    "bisnis manajemen"
                  )}
                  onChange={handleFilterChange}
                />
                Bisnis Manajemen
              </label>
            </div>
          )}
          <p className={styles.labelJudul}>
            <ShoppingBag size={12} className={styles.IconContainer} />
            Harga
            <ChevronDown
              size={15}
              style={{ display: isHargaOpen ? "none" : "block" }}
              onClick={toggleHarga}
            />
            <ChevronUp
              size={15}
              className={styles.IconR}
              style={{ display: isHargaOpen ? "block" : "none" }}
              onClick={toggleHarga}
            />
          </p>
          {isHargaOpen && (
            <div className={styles.harga}>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="pemasaran"
                  checked={selectedFilters.bidangStudi.includes("pemasaran")}
                  onChange={handleFilterChange}
                />
                Pemasaran
              </label>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="digital & teknologi"
                  checked={selectedFilters.bidangStudi.includes(
                    "digital & teknologi"
                  )}
                  onChange={handleFilterChange}
                />
                Digital & Teknologi
              </label>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="pengembangan diri"
                  checked={selectedFilters.bidangStudi.includes(
                    "pengembangan diri"
                  )}
                  onChange={handleFilterChange}
                />
                Pengembangan Diri
              </label>
              <label className={styles.Label}>
                <input
                  type="checkbox"
                  value="bisnis manajemen"
                  checked={selectedFilters.bidangStudi.includes(
                    "bisnis manajemen"
                  )}
                  onChange={handleFilterChange}
                />
                Bisnis Manajemen
              </label>
            </div>
          )}
          <p className={styles.labelJudul}>
            <Clock size={12} className={styles.IconContainer} /> Durasi
            <ChevronDown
              size={15}
              style={{ display: isDurasiOpen ? "none" : "block" }}
              onClick={toggleDurasi}
            />
            <ChevronUp
              size={15}
              className={styles.IconR}
              style={{ display: isDurasiOpen ? "block" : "none" }}
              onClick={toggleDurasi}
            />
          </p>
          {isDurasiOpen && (
            <div className={styles.durasi}>
              <label className={styles.Label}>
                <input
                  type="radio"
                  value="kurang dari 4 jam"
                  checked={selectedFilters.bidangStudi.includes(
                    "kurang dari 4 jam"
                  )}
                  onChange={handleFilterChange}
                />
                Kurang dari 4 jam
              </label>
              <label className={styles.Label}>
                <input
                  type="radio"
                  value="4 - 8 jam"
                  checked={selectedFilters.bidangStudi.includes("4 - 8 jam")}
                  onChange={handleFilterChange}
                />
                4 - 8 Jam
              </label>
              <label className={styles.Label}>
                <input
                  type="radio"
                  value="lebih dari 8 jam"
                  checked={selectedFilters.bidangStudi.includes(
                    "lebih dari 8 jam"
                  )}
                  onChange={handleFilterChange}
                />
                Lebih dari 8 jam
              </label>
            </div>
          )}
        </div>
        <SliderComponent />
      </div>
      <div className={styles.FooterProduk}>
        <Footer />
      </div>
    </div>
  );
};
export default SemuaProduk;
