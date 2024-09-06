import React from "react";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.scss";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { MarkedIcon } from "helpers/Protected/icons";
import { useTranslation } from "react-i18next";
import { useGetFeedbacks } from "services/testimonials.service";

const StyledRating = styled(Rating)({
  "&.MuiRating-root": {
    display: "flex",
  },
});


const Testimonials = () => {
  const { t } = useTranslation("common");
  const width1000px = useMediaQuery("max-width:1000px");
  const {data: feedbacks} = useGetFeedbacks();

  return (
    <>
      <div
        id="#about"
       className={styles.wrapper}
      >
        <h1 style={{ textAlign: "center", width: "327px" }} className="title">
          {t("reviews")}
        </h1>

        <Swiper
          slidesPerView={width1000px ? 1 : 1.5}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {feedbacks?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.review}>
                <div className={styles.markedIcon}>
                  <span>
                    <MarkedIcon />
                  </span>
                  <span>
                    <MarkedIcon />
                  </span>
                </div>

                <div className={styles.review_content}>
                  <StyledRating
                    name="read-only"
                    max={5}
                    value={item.stars}
                    readOnly
                  />
                  <p className={styles.review_content_text}>{item.content}</p>

                  <div className={styles.reviewer_wrapper}>
                    <div className={styles.img_wrapper}>
                      <img src={item.image} alt="reviewer_image" />
                    </div>

                    <div className={styles.name_position}>
                      <h1>{item.full_name}</h1>
                      <h2>{item.position}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
