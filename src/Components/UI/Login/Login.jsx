import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import { t } from "i18next";
import {
  AppleIcon,
  CancelIcon,
  CloseEyeIcon,
  GoogleIcon,
  OpenEyeIcon,
} from "helpers/Protected/icons";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { usePostLogin } from "services/auth.service";


const Login = ({ setOpenModalLogin, setOpenModalSignup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginModalClose = () => {
    setOpenModalLogin(false);
    reset();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    handleLoginModalClose();
  };

  const switchToSignupModal = () => {
    setOpenModalLogin(false);
    setOpenModalSignup(true);
    reset();
  };

  const {mutate} = usePostLogin({
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      setOpenModalLogin(false);
    },
    onError: (err) => {
      console.log('err', err)
    }
  })

  const handleGoogleLoginSuccess = async (tokenResponse) => {
    try {
      const userInfoResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const userInfo = userInfoResponse.data;
      mutate({
        name: userInfo.name,
        email: userInfo.email,
        imageUrl: userInfo.picture,
        type: 'google'
      })

      console.log("Foydalanuvchi Google bilan kirish muvaffaqiyatli amalga oshirildi:", userInfo);
    } catch (error) {
      console.error("Google bilan kirishda xatolik:", error);
    }
  };

  // Google login hook
  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: (error) => console.log("Google login xatolik: ", error),
  });

  return (
    <div className={styles.login_wrapper}>
      <h1 className={styles.title}>{t("Welcome Back!")}</h1>
      <span className={styles.cancelIcon} onClick={handleLoginModalClose}>
        <CancelIcon />
      </span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "E-mail is required" })}
              style={errors.email ? { borderColor: "#F76659" } : {}}
            />
          </div>
          {errors.email && (
              <p className={styles.errorMessage}>Write correct email </p>
            )}
          <div className={styles.input}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              style={errors.password ? { borderColor: "#F76659" } : {}}
            />
            <span
              onClick={handlePasswordToggle}
              className={styles.eyeIcon}
            >
              {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          </div>
          {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{ borderRadius: "10px", fontSize: "20px", textTransform:"capitalize" }}
        >
          {t("Login")}
        </Button>
      </form>

      <div className={styles.links}>
        <p className={styles.content}>
          {t("Don’t have an account? ")}
          <p onClick={switchToSignupModal}>{t("Sign up")}</p>
        </p>
        <p className={styles.content}>
          {t("Forgot your password? ")}
          <p href="/reset">{t("Reset")}</p>
        </p>
        <div className={styles.text}>
          <span>{t("Login with")}</span>
        </div>
        <div className={styles.btns}>
          <div className={styles.btn} onClick={() => login()}>
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
