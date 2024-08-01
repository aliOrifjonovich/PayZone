import * as React from "react";
import { useState } from "react";
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
import { useTheme } from "@emotion/react";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Singup from "../Signup/Singup";
import { t } from "i18next";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  const {
    palette: { mode },
  } = useTheme();

  const [isTrue, setIsTrue] = useState(true);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSignup, setOpenModalSignup] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCloseLogin = () => setOpenModalLogin(false);
  const handleCloseSignup = () => setOpenModalSignup(false);

  const list = () => (
    <Box
      sx={{
        width: "320px",
        display:"flex",
        gap: "50px",
        padding: "50px",
        background: "#00122A",
        height:"100%",
        position:"relative"
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
          height:"100%",
          width:"100%"
        }}
      >
        <LanguageSelection />

        {navbarItems?.map((item) => (
          <Link to={item.path} onClick={toggleDrawer(false)}>
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={
                  {
                    // "&:hover": {
                    //   borderRadius: "2rem !important",
                    //   background: "red"
                    // },
                  }
                }
              >
                <ListItemText
                  primary={item.slug || ""}
                  sx={{
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    lineHeight:"25px",
                    color: `#fff`,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

        <div className={styles.registerButtons}>
          <Button
            onClick={() => setOpenModalLogin(true)}
            className={styles.registerbutton}
            variant="contained"
          >
            {t("Login")}
          </Button>
          <Button
            onClick={() => setOpenModalSignup(true)}
            className={styles.registerbutton}
            variant="outlined"
          >
            {t("Signup")}
          </Button>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <div onClick={toggleDrawer(true)} className={styles.hamburger}>
        <HamburgerMenu fill={mode === "light" ? "#2B2D42" : "#fff"} />
        {console.log("open", open)}
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
