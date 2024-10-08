import React, { useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "../Login/Login.module.scss";
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
import { usePostSignup } from "services/auth.service";


const Signup = ({ setOpenModalSignup, setOpenModalLogin, setOpenModalOTP }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {mutate} = usePostSignup({
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      setOpenModalSignup(false);
    },
    onError: (err) => {
      console.log('err', err)
    }
  })

  const handleModalClose = () => {
    setOpenModalSignup(false);
    reset();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    mutate({
      name: data.fullname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword
    })
    handleModalClose();
    setOpenModalOTP(true);
  };

  

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

  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: (error) => console.log("Google login xatolik: ", error),
  });

  return (
    <div className={styles.login_wrapper}>
      <h1 className={styles.title}>{t("Welcome to PayZone!")}</h1>
      <span className={styles.cancelIcon} onClick={handleModalClose}>
        <CancelIcon />
      </span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname", { required: true })}
              style={errors.fullname ? { borderColor: "#F76659" } : {}}
            />
          </div>
          {errors.fullname && (
            <p className={styles.errorMessage}>Pleace write full name</p>
          )}
          <div className={styles.input}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  placeholder="Phone Number (optional)"
                  defaultCountry="US"
                  style={errors.phoneNumber ? { borderColor: "#F76659" } : {}}
                  className="signupPhone"
                />
              )}
            />
          </div>

          <div className={styles.input}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
              style={errors.email ? { borderColor: "#F76659" } : {}}
            />
          </div>
          {errors.email && (
            <p className={styles.errorMessage}>Pleace write correct email</p>
          )}
          <div className={styles.input}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              style={errors.password ? { borderColor: "#F76659" } : {}}
            />
            <span onClick={handlePasswordToggle} className={styles.eyeIcon}>
              {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          </div>
          {errors.password && (
            <p className={styles.errorMessage}>Please create a password</p>
          )}

          <div className={styles.input}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not same",
              })}
              style={errors.confirmPassword ? { borderColor: "#F76659" } : {}}
            />
            <span onClick={handlePasswordToggle} className={styles.eyeIcon}>
              {passwordVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className={styles.btn_wrapper}>
          <div className={styles.agreement}>
            <Checkbox
              sx={{
                color: "#00d44a",
                "&.Mui-checked": {
                  color: "#00d44a",
                },
              }}
            />
            <p>
              {t("I agree with ")} <a href="/">terms & conditions</a>
            </p>
          </div>
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: "10px",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
            type="submit"
          >
            {t("Sign up")}
          </Button>
        </div>
      </form>

      <div className={styles.links}>
        <p className={styles.content}>
          {t("Already have an account? ")}
          <p
            onClick={() =>
              setOpenModalSignup(false) || setOpenModalLogin(true) || reset()
            }
          >
            {t("Login")}
          </p>
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

export default Signup;
