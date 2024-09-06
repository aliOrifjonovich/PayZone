import React from "react";
import styles from "./Advertisement.module.scss";
import { Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetEvents } from "services/events.service";
import { translate } from "utils/translate";

const Advertisement = () => {
  const { i18n } = useTranslation("common");
  const { data: Events } = useGetEvents();

  return (
    <Container>
      {Events?.map((item, index) => (
        <div key={index} className={styles.wrapper} id="#payzone">
          <div className={styles.content}>
            <div className={styles.img_wrapper}>
              <div className={styles.gradient}></div>
              <img src={item.image} alt="intro_pubg_gaming" />
            </div>

            <div className={styles.content_infos}>
              <h1>
                {/* {t(`Sizda ham Kundalik`)} <br />
              <span>{t(`Muvaffaqiyat`)}</span> <br />
              {t(`G'oliblar qatorida bo'ling`)} */}

                {translate(item, "title", i18n.language)}
              </h1>

              <p>{translate(item, "content", i18n.language)}</p>
              <div className={styles.btn}>
                <Button
                  variant="outlined"
                  sx={{ border: "2px solid", borderRadius: "10px" }}
                >
                  <div className={styles.btn_content}>{item.btn_name}</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Advertisement;
