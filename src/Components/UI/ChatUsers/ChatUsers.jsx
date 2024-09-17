import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import img from "../../assets/images/profile.png";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { DoneIcon, SearchIcon } from "helpers/Protected/icons";

const drawerdata = [
  {
    image: img,
    title: "Arlene McCoy",
    link: "my-payments",
  },
  {
    image: img,
    title: "Arlene McCoy",
    link: "my-payments",
  },
  {
    image: img,
    title: "PUBG",
    link: "my-payments",
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

const ChatUsers = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");

  const { control } = useForm({
    defaultValues: {},
  });

  const drawer = (
    <div className={styles.list}>
      <div className={styles.upperContent}>
        <h1 className={styles.list_games_title}>{t("Chats")}</h1>
        <Input
          icon={<SearchIcon />}
          type="text"
          control={control}
          name="search"
          placeholder={t("search...")}
          width={"360px"}
        />
      </div>

      <div className={styles.list_games}>
        {drawerdata?.map((data) => (
          <Link key={data.link} to={data.link}>
            <div
              className={`${styles.list_item} ${
                pathname.includes(data.link) && styles.list_item_active
              }`}
            >
              <div className={styles.content}>
                <div className={styles.img_wrapper}>
                  <img src={data.image} alt="games_images" />
                </div>
                <div className={styles.message}>
                  <h4>{data.title}</h4>
                  <p>Thank you!</p>
                </div>
              </div>

              <div className={styles.time}>
                <DoneIcon/>
                <p>8:20</p>
              </div>
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
      <Container>
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
      </Container>
    </div>
  );
};

export default ChatUsers;
