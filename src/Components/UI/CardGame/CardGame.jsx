import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardGame.module.scss";
import { BuyRowIcon } from "helpers/Protected/icons";
import { Button } from "@mui/material";
import { t } from "i18next";

const CardGame = ({ name, img, id }) => {
  return (
    <Link href={`/card/${id}`}>
      <div className={styles.card}>
        <div className={styles.card_wrapper}>

          <div className={styles.img_wrapper}>
            <img src={img} alt="card-image" />
          </div>

          <div className={styles.card_content}>
            <h1>{name}</h1>
            <Button variant="contained" className={styles.btn} fullWidth={false}>
              {t("buy")}
              <span >
                <BuyRowIcon fill={"#fff"}/>
              </span>
            </Button>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default CardGame;
