import React, { useState } from "react";
import { Button } from "@mui/material";
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

const Signup = ({ setOpenModalSignup, setOpenModalLogin }) => {
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

  const handleModalClose = () => {
    setOpenModalSignup(false);
    reset();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    handleModalClose();
  };

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
            <p className={styles.errorMessage}>
              Please create a password
            </p>
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
            <input type="checkbox" />
            <p>
              {t("I agree with ")} <a href="/">terms & conditions</a>
            </p>
          </div>
          <Button
            variant="contained"
            fullWidth
            sx={{ borderRadius: "10px", fontSize: "20px" }}
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

export default Signup;
