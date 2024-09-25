import { useNavigate } from "react-router-dom";

import styles from "./Style.module.css";
import FormCard from "./FormCard";
import { Mail } from "feather-icons-react";
import { Lock } from "feather-icons-react";
import { EyeOff } from "feather-icons-react";
import { User } from "feather-icons-react";
import { Phone } from "feather-icons-react";
import LogoGoogle from "./img/logo-google.png";

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.LoginForm}>
      <h3>Register</h3>
      <p>Yuk,daftarkan akunmu sekarang juga!</p>
      <FormCard />
      <form action="#" className={styles.formLogin}>
        <label htmlFor="">Nama :</label>
        <div className={styles.LogoUser}>
          <User size={14} color="#ccc" />
        </div>
        <input type="text" placeholder="Nama Lengkap" required />
        <label htmlFor="">E-mail :</label>
        <div className={styles.LoginIconRegister}>
          <Mail size={14} color="#ccc" />
        </div>
        <input type="text" placeholder="Masukan Email" required />
        <label htmlFor="">Password :</label>
        <div className={styles.LoginIconLock}>
          <Lock size={14} color="#ccc" />
        </div>
        <div className={styles.LoginEyeRegister}>
          <EyeOff size={14} color="#ccc" />
        </div>
        <input type="password" placeholder="Masukan Password" required />
        <a href="#">Lupa Password?</a>
        <label htmlFor="">No.Telephone</label>
        <div className={styles.LoginPhone}>
          <Phone size={14} color="#ccc" />
        </div>
        <input
          type="telepone"
          placeholder="Masukan No.Telephone"
          className={styles.Telepon}
        />
        <button
          onClick={() => navigate("/homepage")}
          className={styles.BtnDaftar}
        >
          Daftar
        </button>
        <p>
          Sudah Punya Akun?<a href="#">Login Sekarang.</a>
        </p>
        <span>atau</span>
        <button type="submit">
          <img src={LogoGoogle} className={styles.LogoGoogle} />
          Masuk Dengan Akun Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
