import LoginForm from "../components/LoginForm";
import styles from "../components/Style.module.css";
const LoginPage = () => {
  return (
    <>
      <div className={styles.LoginPage}>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
