import React from "react";
import styles from "./SIngleCardGame.module.scss";
import { t } from "i18next";
import { Button } from "@mui/material";
import img from "../../assets/images/singlegame.png";

const SIngleCardGame = ({setOpenModal}) => {
  

  return (
    <>
      <div className={styles.card}>
        <div className={styles.img_content}>
          <div className={styles.img_wrapper}>
            <img src={img} alt="game coin/uc/gold/diamonds" />
          </div>
          <h3 className={styles.coin}>{t("60 uc")}</h3>
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
    </>
  );
};

export default SIngleCardGame;
