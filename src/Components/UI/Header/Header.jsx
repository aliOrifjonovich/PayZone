import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { SearchIcon, UserIcon } from "helpers/Protected/icons";
import { Button } from "@mui/material";
import Input from "../Input/Input";
import logo from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Singup from "../Signup/Singup";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import VerifyOTP from "../VerifyOTP/VerifyOTP";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import notification from "../../assets/images/cart+counter.png"

const Header = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSignup, setOpenModalSignup] = useState(false);
  const [openModalOTP, setOpenModalOTP] = useState(false);
  const count = 4;

  const { t } = useTranslation("common");

  const { control } = useForm({
    defaultValues: {},
  });

  const handleCloseLogin = () => setOpenModalLogin(false);
  const handleCloseSignup = () => setOpenModalSignup(false);
  const handleCloseOTP = () => setOpenModalOTP(false);

  return (
    <>
      <div
        className={styles.navbar}
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <NavLink to="/">
          <div className={styles.logo_wrapper}>
            <img src={logo} alt="Payzone" />
          </div>
        </NavLink>

        <div className={styles.navbar_items}>
          <Input
            icon={<SearchIcon />}
            type="text"
            control={control}
            name="search"
            placeholder={t("search...")}
            width={"400px"}
          />

          <div className={styles.navbar_items_wrapper}>
            <div className={styles.language}>
              <LanguageSelection />
            </div>

            <div className={styles.navbar_items_wrapper_buttons}>
              {isTrue && (
                <div className={styles.registerButtons}>
                  <Button
                    onClick={() => setOpenModalLogin(true)}
                    variant="contained"
                    sx={{
                      borderRadius: "10px",
                      padding: "11px 26px 11px 26px",
                      textTransform: "capitalize",
                      fontFamily: "Orbitron",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "17.7px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t("Login")}
                  </Button>
                  <Button
                    onClick={() => setOpenModalSignup(true)}
                    variant="outlined"
                    sx={{
                      borderRadius: "10px",
                      padding: "11px 26px 11px 26px",
                      textTransform: "capitalize",
                      fontFamily: "Orbitron",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "17.7px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t("Sign up")}
                  </Button>
                </div>
              )}

              {!isTrue && (
                <div className={styles.navbar_items_wrapper_buttons_usersCard}>
                  {/* <NavLink to={"/"}>
                    <div style={{
                      position: "relative",
                      cursor: "pointer",
                    }}>
                      <img src={notification} alt="notification" />
                      {count ? <div className={styles.count}>{count}</div> : ""}
                    </div>
                  </NavLink> */}

                  <NavLink to={"/profile"}>
                    <div className={styles.user_button}>
                      <UserIcon />
                    </div>
                  </NavLink>
                </div>
              )}

              <MobileNavbar />
            </div>
          </div>
          
        </div>
      </div>

      <Modal open={openModalLogin} handleClose={handleCloseLogin}>
        <Login
          setOpenModalLogin={setOpenModalLogin}
          setOpenModalSignup={setOpenModalSignup}
        />
      </Modal>

      <Modal open={openModalSignup} handleClose={handleCloseSignup}>
        <Singup
          setOpenModalSignup={setOpenModalSignup}
          setOpenModalLogin={setOpenModalLogin}
          setOpenModalOTP={setOpenModalOTP}
        />
      </Modal>

      <Modal open={openModalOTP} handleClose={handleCloseOTP}>
        <VerifyOTP
          setOpenModalSignup={setOpenModalSignup}
          setOpenModalLogin={setOpenModalLogin}
          setOpenModalOTP={setOpenModalOTP}
        />
      </Modal>
    </>
  );
};

export default Header;
