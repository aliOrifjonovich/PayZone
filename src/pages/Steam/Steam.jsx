import React from "react";
import styles from "./Steam.module.scss";
import { Box, Container, Grid } from "@mui/material";
import { t } from "i18next";
import SIngleCardGame from "Components/UI/SingleCardGame/SIngleCardGame";
import fakedata from "fakedata";
import { LanguageRowIcon, PriceIcon } from "helpers/Protected/icons";

const Steam = () => {
  const data = fakedata();
  const price = [
    {
      label: "so'm",
    },
    {
      label: "usd",
    },
    {
      label: "rub",
    },
  ];
  return (
    <div className={styles.steam}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <div className={styles.nav_item}>
            <h1 className="title">{t("PUBG Mobile UC")}</h1>
            <div className={styles.header_navbar_utils_langs}>
              <li className={styles.item}>
                <div className={styles.item_wrapper}>
                  <span className={styles.iconrow}>
                    <PriceIcon />
                  </span>
                  <span>{"sum"}</span>
                  <span className={styles.iconrow}>
                    <LanguageRowIcon />
                  </span>
                </div>
                <div className={styles.childList}>
                  <ul>
                    {price.map((lang) => (
                      <li
                        key={lang?.label}
                        className={styles.childItems}
                        // onClick={() => handleChangeLang(lang.label)}
                      >
                        <>
                          <a>{lang.label} </a>
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          </div>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data?.root1.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <SIngleCardGame
                  key={item.id}
                  id={item.id}
                  count={item.count}
                  price={item.price}
                  img={item.img}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Steam;
