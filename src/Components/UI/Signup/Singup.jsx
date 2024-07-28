import React, { useState } from "react";
import styles from "../Login/Login.module.scss";
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

const Singup = ({ setOpenModalSignup, setOpenModalLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const pushLoginModal = () => (
    setOpenModalSignup(false), setOpenModalLogin(true)
  );
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.login_wrapper}>
      <h1 className={styles.title}>{t("Welcome to PayZone!")}</h1>
      <span
        className={styles.cancelIcon}
        onClick={() => setOpenModalSignup(false)}
      >
        <CancelIcon />
      </span>

      <form action="">
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input type="text" placeholder="Full Name" />
          </div>
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
          <div className={styles.input}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
              {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          </div>
        </div>

        <div className={styles.btn_wrapper}>
          <div className={styles.agreement}>
            <input type="checkbox" />
            <p>
              {t("I am agree with ")} <a href="/">terms & conditions</a>{" "}
            </p>
          </div>
          <Button
            variant="contained"
            fullWidth={true}
            sx={{ borderRadius: "10px", fontSize: "20px" }}
          >
            {t("Sign up")}
          </Button>
        </div>
      </form>

      <div className={styles.links}>
        <p className={styles.content}>
          {t("Already have an account? ")}{" "}
          <a onClick={pushLoginModal}>{t("Login")}</a>
        </p>
        <div className={styles.text}>
          <span>login with</span>
        </div>
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

export default Singup;
