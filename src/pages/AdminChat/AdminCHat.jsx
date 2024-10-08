import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./AdminChat.module.scss";
import img from "../../Components/assets/images/image 10.png";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const drawerdata = [
  {
    image: img,
    title: "PUBG",
    link: 1,
  },
  {
    image: img,
    title: "Mobile Legends",
    link: "my-payments",
  },
  {
    image: img,
    title: "New State",
    link: "my-payments",
  },
  {
    image: img,
    title: "Minecraft",
    link: "my-payments",
  },
  {
    image: img,
    title: "Among us",
    link: "my-payments",
  },
  {
    image: img,
    title: "World of Tanks",
    link: "my-payments",
  },
  {
    image: img,
    title: "GTA V",
    link: "my-payments",
  },
  {
    image: img,
    title: "Clash of Clans",
    link: "my-payments",
  },
  {
    image: img,
    title: "Brawl Stars",
    link: "my-payments",
  },
  {
    image: img,
    title: "Among us",
    link: "my-payments",
  },
  {
    image: img,
    title: "Cards",
    link: "my-payments",
  },
];

const AdminCHat = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");

  const drawer = (
    <div className={styles.list}>
      <h1 className={styles.list_games_title}>{t("Games")}</h1>
      <div className={styles.list_games}>
        {drawerdata?.map((data) => (
          <Link key={data.link} to={data.link}>
            <div
              className={`${styles.list_item} ${
                pathname.includes(data.link) && styles.list_item_active
              }`}
            >
              <div className={styles.img_wrapper}>
                <img src={data.image} alt="games_images" />
              </div>
              <h4>{data.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  return (
    <div className={styles.chat}>
      <div className={styles.chat_sidebar}>
        <div className={styles.chat_sidebar_inner}>{drawer}</div>
      </div>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // p: 3,
            width: { sm: `calc(100% - 100px)` },
          }}
        >
          <div className={styles.profile_wrapper}>
            <Outlet />
          </div>
        </Box>
    </div>
  );
};

export default AdminCHat;
