import React, { useState } from "react";
import styles from "./Steam.module.scss";
import { Box, Container, Grid } from "@mui/material";
import { t } from "i18next";
import SIngleCardGame from "Components/UI/SingleCardGame/SIngleCardGame";
import fakedata from "fakedata";
import PriceConvert from "Components/UI/PriceConverter/PriceConvert";

const Steam = () => {
  const data = fakedata();
  const [selectedCurrency, setSelectedCurrency] = useState("uzs");

  return (
    <div className={styles.steam}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <div className={styles.nav_item}>
            <h1 className="title">{t("PUBG Mobile UC")}</h1>

            <PriceConvert
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
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
