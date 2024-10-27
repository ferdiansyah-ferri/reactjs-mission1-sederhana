import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../services/api";

import styles from "./Style.module.css";
import FormCard from "./FormCard";
import { Mail } from "feather-icons-react";
import { Lock } from "feather-icons-react";
import { EyeOff } from "feather-icons-react";
import { User } from "feather-icons-react";
import { Phone } from "feather-icons-react";
import LogoGoogle from "./img/logo-google.png";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // const { setUserData } = useStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    };
    localStorage.removeItem("userId");

    try {
      const response = await api.get(`/users?email=${userData.email}`);
      const existingUsers = response.data;
      if (!Array.isArray(existingUsers)) {
        console.error("Data dari API tidak valid:", existingUsers);
        return;
      }
      if (existingUsers.length > 0) {
        setErrorMessage("Email sudah terdaftar!");
        return;
      }
      const newUserData = await api.post("/users", userData);
      const newUserid = newUserData.data.id;
      localStorage.setItem("userId", newUserid);
      alert("Pendaftaran Berhasil");
      navigate("/homepage");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage(
        "Terjadi Kesalahan Saat Pendaftaran.Silahkan Ulangi Kembali."
      );
    }
  };

  // LocalStorage End

  const navigate = useNavigate();

  return (
    <div className={styles.HalamanReg}>
      <h3 className={styles.JudulRegister}>Register</h3>
      <p className={styles.ParagraphReg}>Yuk,daftarkan akunmu sekarang juga!</p>
      <FormCard />
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <label className={styles.LabelRegister}>Nama :</label>
        <div className={styles.LogoUserRegister}>
          <User size={14} color="#ccc" />
        </div>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={handleChange}
          className={styles.InputRegister}
          required
          name="name"
        />
        <label className={styles.LabelRegister}>E-mail :</label>
        <div className={styles.LogoMailRegister}>
          <Mail size={14} color="#ccc" />
        </div>
        <input
          type="email"
          placeholder="Masukan Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.InputRegister}
          required
          name="email"
        />
        <label className={styles.LabelRegister}>Password :</label>
        <div className={styles.LogoLockRegister}>
          <Lock size={14} color="#ccc" />
        </div>
        <div className={styles.LogoEyeRegister}>
          <EyeOff size={14} color="#ccc" />
        </div>
        <input
          type="password"
          placeholder="Masukan Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.InputRegister}
          required
          autoComplete="password"
          name="password"
        />
        <a href="#">Lupa Password?</a>
        <label className={styles.LabelRegister}>No.Telephone</label>
        <div className={styles.LoginPhone}>
          <Phone size={14} color="#ccc" />
        </div>
        <input
          type="tel"
          placeholder="Masukan No.Telephone"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={styles.TeleponRegister}
          required
          name="phoneNumber"
        />
        <div className={styles.errorMessage}>{errorMessage}</div>
        <button type="submit" className={styles.BtnDaftarRegister}>
          Daftar
        </button>
        <p>
          Sudah Punya Akun?<a href="#">Login Sekarang.</a>
        </p>
        <span>atau</span>
        <button type="submit" className={styles.ButtonReg}>
          <img src={LogoGoogle} className={styles.LogoGoogleRegister} />
          Masuk Dengan Akun Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
