import Footer from "../components/Footer";
import HomePages from "../components/HomePages";
import avatar from "../components/img/avatar.jpg";
import styles from "../components/styles/Profile.module.css";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { User, Layout, Briefcase } from "feather-icons-react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import api from "../services/api";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0059b3",
    padding: "30px",
  },
};

const ProfilePage = () => {
  const profilePicture = localStorage.getItem("profilePicture");
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (e) => {
    if (selectedFile) {
      setLoading(true);
      setIsUploaded(false);
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result;

        localStorage.setItem("profilePicture", base64String);

        setLoading(false);
        setIsUploaded(true);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    document.getElementById("myInput").focus();
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [buttonColor, setButtonColor] = useState("blue");
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await api.get(`/users/${userId}?v=${Date.now()}`);
          setUserData(response.data);
        } catch (error) {
          console.error("Terjadi Kesalahan Saat Memuat data:", error);
        }
      }
    };
    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/users/${userId}`, userData);
      alert("Data Profile Berhasil diperbaharui:", response.data);
      setButtonColor("red");
    } catch (error) {
      console.error("terjadi Kesalahan saat memperbaharui data", error);
    }
  };

  // Delete Profile start
  const handleHapusProfile = async () => {
    try {
      await api.delete(`/users/${userId}`);
      const confirmed = window.confirm(
        "Apakah Anda Yakin Ingin Menghapus Profil Anda?"
      );
      if (confirmed) {
        localStorage.removeItem("profilePicture");
        setUserData(null);
        alert("Profile Berhasil dihapus!");
      }
    } catch (error) {
      console.error("Terjadi Kesalahan Saat menghapus Profile:", error);
      alert("gagal Menghapus Profile!");
    }
  };
  // Delete Profile End

  return (
    <>
      {userData ? (
        <div className={styles.ProfilePage}>
          <div className={styles.HomePagesProfile}>
            <HomePages />
          </div>

          <div className={styles.Profile}>
            <div className={styles.profileKiri}>
              <h4>Ubah Profile</h4>
              <span>ubah data diri anda</span>
              <ul className={styles.profileJudul}>
                <li>
                  <User size={12} /> <a href="">Profile Saya</a>
                </li>
                <li>
                  <Layout size={12} /> <a href="">Kelas Saya</a>
                </li>
                <li>
                  <Briefcase size={12} /> <a href="">Pesanan saya</a>
                </li>
              </ul>
            </div>
            <div className={styles.profileKanan}>
              <img
                src={profilePicture || avatar}
                alt="Profile Picture"
                className={styles.imageProfile}
              />

              <ul>
                <li>
                  <h5> {userData.name}</h5>
                </li>
                <li>
                  <span>{userData.email}</span>
                </li>
                <li>
                  <span>{userData.phoneNumber}</span>
                </li>
                <li>
                  <button className={styles.buttonGanti} onClick={openModal}>
                    Ganti Foto Profil
                  </button>
                </li>
                <li>
                  <button
                    className={styles.buttonGanti}
                    onClick={handleHapusProfile}
                  >
                    Hapus Profile
                  </button>
                </li>
                <Modal
                  appElement={document.getElementById("root")}
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className={styles.ParagraphModal}>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                  <input
                    id="myInput"
                    type="file"
                    onChange={handleFileChange}
                    className={styles.FileInput}
                  />
                  <button onClick={handleUpload} disabled={loading}>
                    {loading ? "mengunggah..." : "upload"}
                  </button>
                  {isUploaded && (
                    <p className={styles.ButtonTrue}>
                      Berhasil Mengunggah Foto Profil!
                    </p>
                  )}
                </Modal>
              </ul>
              <form onSubmit={handleSubmit} className={styles.profileForm}>
                <div className={styles.LabelProfile}>
                  <label htmlFor="">Nama :</label>
                  <label htmlFor="">E-mail :</label>
                  <label htmlFor="">No.Hp :</label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={userData.name}
                  className={styles.InputEdit}
                  onChange={handleChange}
                ></input>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  className={styles.InputEdit}
                  onChange={handleChange}
                ></input>

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="No Hp"
                  value={userData.phoneNumber}
                  className={styles.InputEdit}
                  onChange={handleChange}
                ></input>
                <button
                  style={{ backgroundColor: buttonColor }}
                  type="submit"
                  className={styles.buttonProfile}
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
          <div className={styles.FooterProfile}>
            <Footer />
          </div>
        </div>
      ) : (
        <p>Sedang Memuat Data...</p>
      )}
    </>
  );
};

export default ProfilePage;
