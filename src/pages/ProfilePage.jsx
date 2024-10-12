import Footer from "../components/Footer";
import HomePages from "../components/HomePages";
import avatar from "../components/img/avatar.jpg";
import styles from "../components/styles/Profile.module.css";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { User, Layout, Briefcase } from "feather-icons-react";
import { useDropzone } from "react-dropzone";

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
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  const handleChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(userData) || {});
    alert("Data berhasil disimpan!");
    setButtonColor("red");
  };

  // Delete Profile start
  const handleHapusProfile = () => {
    if (window.confirm("Apakah Anda Yakin Ingin Menghapus Profil Anda?")) {
      localStorage.removeItem("userData");
      localStorage.removeItem("profilePicture");
      setUserData({});
      alert("Profile Berhasil dihapus!");
    }
  };
  // Delete Profile End

  return (
    <>
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
                <h5> {userData.nama}</h5>
              </li>
              <li>
                <span>{userData.email}</span>
              </li>
              <li>
                <span>{userData.noTelp}</span>
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
                name="nama"
                placeholder="Nama Lengkap"
                value={userData.nama}
                onChange={handleChange}
                className={styles.InputEdit}
              ></input>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                className={styles.InputEdit}
              ></input>

              <input
                type="text"
                name="noTelp"
                placeholder="No Hp"
                value={userData.noTelp}
                onChange={handleChange}
                className={styles.InputEdit}
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
    </>
  );
};

export default ProfilePage;
