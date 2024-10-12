import RegisterForm from "../components/RegisterForm";
import styles from "../components/Style.module.css";

function RegistrationPage() {
  return (
    <>
      <div className={styles.RegisterForm}>
        <RegisterForm />
      </div>
    </>
  );
}

export default RegistrationPage;
