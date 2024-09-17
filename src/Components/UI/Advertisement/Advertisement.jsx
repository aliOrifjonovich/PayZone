import React from "react";
import styles from "./Advertisement.module.scss";
import { Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetEvents } from "services/events.service";
import { translate, translateTitleWithModification } from "utils/translate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay } from "swiper/modules";

const Advertisement = () => {
  const { i18n } = useTranslation("common");
  const { data: Events } = useGetEvents();
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="events"
      >
        {Events?.map((item, index) => (
          <SwiperSlide>
            <div key={index} className={styles.wrapper} id="#payzone">
              <div className={styles.content}>
                <div className={styles.img_wrapper}>
                  <div className={styles.gradient}></div>
                  <img
                    src={"http://api.payzone.uz/" + item.image?.slice(24)}
                    alt="intro_pubg_gaming"
                  />
                </div>

                <div className={styles.content_infos}>
                  <h1>
                    {translateTitleWithModification(
                      item,
                      "title",
                      i18n.language
                    )}
                  </h1>

                  <p>{translate(item, "content", i18n.language)}</p>
                  <div className={styles.btn}>
                    <Button
                      variant="outlined"
                      sx={{ border: "2px solid", borderRadius: "10px" }}
                      onClick={() => window.open(`${item.btn_url}`)}
                    >
                      <div className={styles.btn_content}>{item.btn_name}</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Advertisement;
