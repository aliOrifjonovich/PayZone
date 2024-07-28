import React from "react";
import styles from "./Advertisement.module.scss";
import img from "../../assets/images/pubg.png";
import { Button, Container } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Advertisement = () => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <div className={styles.wrapper} id="#payzone">
        <div className={styles.content}>
          <div className={styles.img_wrapper}>
            <img src={img} alt="intro pubg gaming image" />
          </div>

          <div className={styles.content_infos}>
            <h1>
              {t(`Sizda ham Kundalik`)} <br />
              <span>{t(`Muvaffaqiyat`)}</span> <br />
              {t(`G'oliblar qatorida bo'ling`)}
            </h1>

            <p>{t("info")}</p>
            <div className={styles.btn}>
              <Button variant="outlined">
                <div className={styles.btn_content}>{t("Play")}</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Advertisement;
