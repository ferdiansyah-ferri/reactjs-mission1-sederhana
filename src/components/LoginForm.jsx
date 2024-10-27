import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../services/api";
import axios from "axios";

import styles from "./Style.module.css";
import FormCard from "./FormCard";
import { Mail } from "feather-icons-react";
import { Lock } from "feather-icons-react";
import { EyeOff } from "feather-icons-react";
import LogoGoogle from "./img/logo-google.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/users", {
        params: {
          email,
          password,
        },
      });
      if (response.status === 200 && response.data.length > 0) {
        localStorage.setItem("token", response.data[0].token);
        navigate("/homepage");
      } else {
        alert(
          "Email atau password salah! Silahkan Mengisi Form regitrasi dulu!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Silahkan Registrasi Terlebih dulu!");
      navigate("/register");
    }
  };

  return (
    <>
      <div className={styles.LoginForm}>
        <h3>Login</h3>
        <p className={styles.ParagrapPembuka}>
          Yuk,lanjutin belajarmu di videobelajar.
        </p>
        <FormCard />
        <form action="#" className={styles.formLogin} onSubmit={handleSubmit}>
          <label htmlFor="">E-mail :</label>
          <div className={styles.LoginIconLogin}>
            <Mail size={14} color="#ccc" />
          </div>

          <input
            type="email"
            placeholder="Masukan Email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password :</label>
          <div className={styles.LoginIconLock}>
            <Lock size={14} color="#ccc" />
          </div>
          <div className={styles.LoginEye}>
            <EyeOff size={14} color="#ccc" />
          </div>
          <input
            type="password"
            placeholder="Masukan Password"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">Lupa Password?</a>
          <button type="submit">Login</button>
          <p>
            Belum Punya akun?<a href="#">Daftar Sekarang</a>
          </p>
          <span>atau</span>
          <button>
            <img src={LogoGoogle} className={styles.LogoGoogle} />
            Masuk Dengan Akun Google
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
