import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Button } from "@mui/material";
import { t } from "i18next";
import {
  AppleIcon,
  CancelIcon,
  CloseEyeIcon,
  EyeIcon,
  GoogleIcon,
  OpenEyeIcon,
} from "helpers/Protected/icons";

const Login = ({ setOpenModalLogin, setOpenModalSignup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const pushLoginModal = () => (
    setOpenModalLogin(false),
    setOpenModalSignup(true)
  );

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.login_wrapper}>
      <h1 className={styles.title}>{t("Welcome Back!")}</h1>
      <span
        className={styles.cancelIcon}
        onClick={() => setOpenModalLogin(false)}
      >
        <CancelIcon />
      </span>

      <form action="">
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className={styles.input}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
              {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          </div>
        </div>

        <Button
          variant="contained"
          sx={{ borderRadius: "10px", fontSize: "20px" }}
        >
          {t("Login")}
        </Button>
      </form>

      <div className={styles.links}>
        <p className={styles.content}>
          {t("Don’t have an account? ")} <a  onClick={pushLoginModal}>{t("Sign up")}</a>
        </p>
        <p className={styles.content}>
          {t("Forgot your password? ")} <a>{t("Reset")}</a>
        </p>
        <span className={styles.text}>login with</span>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <GoogleIcon />
            <p>Google</p>
          </div>
          <div className={styles.btn}>
            <AppleIcon />
            <p>Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
