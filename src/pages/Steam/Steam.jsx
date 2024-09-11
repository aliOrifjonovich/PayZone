import React, { useState } from "react";
import styles from "./Steam.module.scss";
import { Box, Container, Grid } from "@mui/material";
import { t } from "i18next";
import SIngleCardGame from "Components/UI/SingleCardGame/SIngleCardGame";
import PriceConvert from "Components/UI/PriceConverter/PriceConvert";
import { useGetSteams } from "services/steams.service";
import { priceConvert } from "utils/priceConvert";

const Steam = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("uzs");

  const { data: SteamProducts } = useGetSteams();
  

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
            {SteamProducts?.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <SIngleCardGame
                  key={item.uuid}
                  id={item.uuid}
                  title={item.title}
                  price={priceConvert(item, "price_str", selectedCurrency)}
                  img={item.image}
                  cardType={item.card_type}
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
