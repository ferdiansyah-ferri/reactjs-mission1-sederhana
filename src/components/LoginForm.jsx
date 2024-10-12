import { useNavigate } from "react-router-dom";

import styles from "./Style.module.css";
import FormCard from "./FormCard";
import { Mail } from "feather-icons-react";
import { Lock } from "feather-icons-react";
import { EyeOff } from "feather-icons-react";
import LogoGoogle from "./img/logo-google.png";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.LoginForm}>
        <h3>Login</h3>
        <p className={styles.ParagrapPembuka}>
          Yuk,lanjutin belajarmu di videobelajar.
        </p>
        <FormCard />
        <form action="#" className={styles.formLogin}>
          <label htmlFor="">E-mail :</label>
          <div className={styles.LoginIconLogin}>
            <Mail size={14} color="#ccc" />
          </div>

          <input type="text" placeholder="Masukan Email" required />
          <label htmlFor="">Password :</label>
          <div className={styles.LoginIconLock}>
            <Lock size={14} color="#ccc" />
          </div>
          <div className={styles.LoginEye}>
            <EyeOff size={14} color="#ccc" />
          </div>
          <input type="password" placeholder="Masukan Password" required />
          <a href="#">Lupa Password?</a>
          <button onClick={() => navigate("/homepage")}>Login</button>
          <p>
            Belum Punya akun?<a href="#">Daftar Sekarang</a>
          </p>
          <span>atau</span>
          <button type="submit">
            <img src={LogoGoogle} className={styles.LogoGoogle} />
            Masuk Dengan Akun Google
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
