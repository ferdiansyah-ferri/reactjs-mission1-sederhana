import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Style.module.css";

const FormCard = () => {
  const [activePage, setActivePage] = useState("register");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setActivePage("login");
    navigate("/");
  };
  const handleRegisterClick = () => {
    setActivePage("register");
    navigate("/register");
  };

  return (
    <div className={styles.slideControl}>
      <div className={styles.sliderTab}>
        <label
          className={styles.slideLabel}
          htmlFor="login"
          checked={activePage === "login"}
          onClick={handleLoginClick}
        >
          Login
        </label>
        <label
          className={styles.slideLabel}
          htmlFor="register"
          checked={activePage === "register"}
          onClick={handleRegisterClick}
        >
          Daftar
        </label>
        {activePage === "login" && <div className={styles.activeLogin} />}
        {activePage === "register" && <div className={styles.activeRegister} />}
      </div>
    </div>
  );
};
export default FormCard;
