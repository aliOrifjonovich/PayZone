import React from "react";
import styles from "./SIngleCardGame.module.scss";
import { Button } from "@mui/material";
import rpimage from "../../assets/images/rp.png";
import { CancelIcon, Exclamation, Line } from "helpers/Protected/icons";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

import img2 from "../../assets/images/1.png";

const SIngleCardGame = ({
  img,
  cardType,
  setOpenModal,
  openModal,
  price,
  ask_text,
  handleClose,
}) => {

  const { t } = useTranslation("common");
  
  return (
    <>
      <div
        className={
          cardType === "green"
            ? styles.card
            : cardType === "light"
            ? styles.light
            : styles.gold
        }
      >
        {cardType === "gold" ? (
          <span>
            <img src={rpimage} alt="rp" />
          </span>
        ) : (
          ""
        )}
        <div className={styles.img_content}>
          <div className={styles.img_wrapper}>
            <img src={img} alt="game coin/uc/gold/diamonds" />
          </div>
          {/* <h3 className={styles.coin}>{title}</h3> */}
        </div>
        <Button
          variant="contained"
          className={styles.btn}
          fullWidth={false}
          onClick={() => setOpenModal(true)}
        >
          {price}
        </Button>
      </div>

      <Modal open={openModal} handleClose={handleClose}>
        <div className={styles.login_wrapper}>
          <h1 className={styles.title}>{ask_text}</h1>
          <span
            className={styles.cancelIcon}
            onClick={() => setOpenModal(false)}
          >
            <CancelIcon />
          </span>

          <form action="">
            <div className={styles.inputs}>
              <div className={styles.input}>
                <input type="text" placeholder="ID" />
              </div>
            </div>

            <Button
              variant="contained"
              sx={{ borderRadius: "10px", fontSize: "20px" }}
            >
              {t("Qabul qilish")}
            </Button>
          </form>

          <div className={styles.img_content}>
            <span className={styles.line}>
              <Line />
            </span>
            <div className={styles.guide}>
              <Exclamation />
              {ask_text}
            </div>
            <div className={styles.img_wrapper}>
              <img src={img2} alt="guide" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SIngleCardGame;
