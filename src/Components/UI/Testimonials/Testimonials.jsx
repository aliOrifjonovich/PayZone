import React from "react";
import { Container } from "@mui/material";
import { t } from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.scss";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
// import required modules
import { Pagination } from "swiper/modules";
import { MarkedIcon } from "helpers/Protected/icons";
import img from "../../assets/images/gamerimg.png";
import { useTranslation } from "react-i18next";

const StyledRating = styled(Rating)({
  "&.MuiRating-root": {
    display: "flex",
  },
});

const data = [
  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },

  {
    value: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    img,
    name: "Arlene McCoy",
    position: "TopAxePlayer",
  },
];

const Testimonials = () => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <div
      id="#about"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center", width: "327px" }} className="title">
          {t("reviews")}
        </h1>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide>
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
                  value={item.value}
                  readOnly
                />
                <p className={styles.review_content_text}>{item.text}</p>

                <div className={styles.reviewer_wrapper}>
                  <div className={styles.img_wrapper}>
                    <img src={item.img} alt="reviewer_image" />
                  </div>

                  <div className={styles.name_position}>
                    <h1>{item.name}</h1>
                    <h2>{item.position}</h2>
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

export default Testimonials;
