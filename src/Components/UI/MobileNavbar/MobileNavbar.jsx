import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "./MobileNavbar.module.scss";
import { navbarItems } from "utils/navbarItems";
import { CancelIcon, HamburgerMenu } from "helpers/Protected/icons";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Singup from "../Signup/Singup";
import { t } from "i18next";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSignup, setOpenModalSignup] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userToken = false;

  useEffect(() => {
    if (location.pathname === "/steam") {
      setActiveId(null);
    }
  }, [location]);

  const handleSetActive = (to) => {
    if (location.pathname === "/steam" && to.startsWith("#")) {
      navigate("/");
      setOpen(false);
    } else {
      setActiveId(to);
    }
  };

  const handleNavLinkClick = (path) => {
    if (!path.startsWith("#")) {
      setActiveId(null);
    }
    setOpen(false);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCloseLogin = () => setOpenModalLogin(false);
  const handleCloseSignup = () => setOpenModalSignup(false);

  const list = () => (
    <Box
      sx={{
        width: "320px",
        display: "flex",
        gap: "50px",
        padding: "50px",
        background: "#00122A",
        height: "100%",
        position: "relative",
      }}
      role="presentation"
    >
      <div className={styles.cancelIcon} onClick={toggleDrawer(false)}>
        <CancelIcon fill="#fff" />
      </div>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          height: "100%",
          width: "100%",
        }}
      >
        <LanguageSelection />

        {navbarItems?.map((item) =>
          item.path.startsWith("#") ? (
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              state={item.state}
              key={item.path}
              onClick={() => handleSetActive(item.path)}
              activeClass={styles.active}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.slug || ""}
                    sx={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "2px",
                      lineHeight: "25px",
                      color: `#fff`,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <NavLink
              to={item.path}
              state={item.state}
              key={item.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => handleNavLinkClick(item.path)}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.slug || ""}
                    sx={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "2px",
                      lineHeight: "25px",
                      color: `#fff`,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          )
        )}

        <div className={styles.registerButtons}>
          {userToken ? (
            <>
              <Button
                onClick={() => setOpenModalLogin(true)}
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
                variant="contained"
              >
                {t("Login")}
              </Button>
              <Button
                onClick={() => setOpenModalSignup(true)}
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
                variant="outlined"
              >
                {t("Signup")}
              </Button>
            </>
          ) : (
            <Button
              // onClick={() => setOpenModalSignup(true)}
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
              variant="contained"
            >
              {t("Logout")}
            </Button>
          )}
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <div onClick={toggleDrawer(true)} className={styles.hamburger}>
        <HamburgerMenu fill={"#fff"} />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {list()}
      </Drawer>

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
        />
      </Modal>
    </>
  );
};

export default MobileNavbar;
