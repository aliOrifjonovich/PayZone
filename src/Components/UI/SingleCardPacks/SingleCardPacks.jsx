import React from "react";
import styles from "./SingleCardPacks.module.scss";
import { Button } from "@mui/material";
import { CancelIcon, DoneIcon, Exclamation, Line } from "helpers/Protected/icons";
import { t } from "i18next";
import Modal from "../Modal/Modal";


import img2 from "../../assets/images/1.png";


const SingleCardPacks = ({title, img, cardType, setOpenModal, openModal, price, ask_text, handleClose}) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.img_content}>
        <div className={styles.img_wrapper}>
          <img src={img} alt="game coin/uc/gold/diamonds" />
        </div>
        <div className={styles.content}>
          <p>
            <DoneIcon/>
            4 content packs
          </p>
          <p>
            <DoneIcon/>
            + 1200 coins
          </p>
        </div>
      </div>
      <Button
        variant="contained"
        className={styles.btn}
        fullWidth={false}
        onClick={() => setOpenModal(true)}
      >
        13,000 so’m
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

export default SingleCardPacks;
