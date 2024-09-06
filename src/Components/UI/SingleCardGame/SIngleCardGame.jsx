import React from "react";
import styles from "./SIngleCardGame.module.scss";
import { t } from "i18next";
import { Button } from "@mui/material";
import rpimage from "../../assets/images/rp.png";

const SIngleCardGame = ({ title, img, cardType, setOpenModal, price }) => {
  return (
    <>
      <div className={cardType === "green" ? styles.card : styles.gold}>
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
          <h3 className={styles.coin}>{title}</h3>
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
    </>
  );
};

export default SIngleCardGame;
