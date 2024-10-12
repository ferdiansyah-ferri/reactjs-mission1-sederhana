import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Style.module.css";
import FormCard from "./FormCard";
import { Mail } from "feather-icons-react";
import { Lock } from "feather-icons-react";
import { EyeOff } from "feather-icons-react";
import { User } from "feather-icons-react";
import { Phone } from "feather-icons-react";
import LogoGoogle from "./img/logo-google.png";

const RegisterForm = () => {
  // LocalStorage Start
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noTelp, setNoTelp] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ nama, email, password, noTelp })
    );
  }, [nama, email, password, noTelp]);

  const handdleSubmit = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };
  // LocalStorage End

  const navigate = useNavigate();
  return (
    <div className={styles.HalamanReg}>
      <h3 className={styles.JudulRegister}>Register</h3>
      <p className={styles.ParagraphReg}>Yuk,daftarkan akunmu sekarang juga!</p>
      <FormCard />
      <form action="#" className={styles.formRegister} onSubmit={handdleSubmit}>
        <label className={styles.LabelRegister} htmlFor="">
          Nama :
        </label>
        <div className={styles.LogoUserRegister}>
          <User size={14} color="#ccc" />
        </div>
        <input
          type="text"
          placeholder="Nama Lengkap"
          required
          className={styles.InputRegister}
          onChange={(e) => setNama(e.target.value)}
        />
        <label className={styles.LabelRegister} htmlFor="">
          E-mail :
        </label>
        <div className={styles.LogoMailRegister}>
          <Mail size={14} color="#ccc" />
        </div>
        <input
          type="text"
          placeholder="Masukan Email"
          required
          className={styles.InputRegister}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={styles.LabelRegister} htmlFor="">
          Password :
        </label>
        <div className={styles.LogoLockRegister}>
          <Lock size={14} color="#ccc" />
        </div>
        <div className={styles.LogoEyeRegister}>
          <EyeOff size={14} color="#ccc" />
        </div>
        <input
          type="password"
          placeholder="Masukan Password"
          required
          className={styles.InputRegister}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Lupa Password?</a>
        <label className={styles.LabelRegister} htmlFor="">
          No.Telephone
        </label>
        <div className={styles.LoginPhone}>
          <Phone size={14} color="#ccc" />
        </div>
        <input
          type="telepone"
          placeholder="Masukan No.Telephone"
          className={styles.TeleponRegister}
          onChange={(e) => setNoTelp(e.target.value)}
        />
        <button
          onClick={() => navigate("/homepage")}
          className={styles.BtnDaftarRegister}
        >
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
