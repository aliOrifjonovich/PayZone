import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGame from "../CardGame/CardGame";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetGames } from "services/games.service";

const Games = () => {
  const { t } = useTranslation("common");
  const { data: Games } = useGetGames();

  const getDuration = (index) => 1000 + index * 200;
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <h1
          className="title"
          id="#games"
          style={{ textAlign: "center" }}
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          {t("Games")}
        </h1>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Games?.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={index}
              data-aos="fade-right"
              data-aos-duration={getDuration(index)}
            >
              <CardGame
                key={item.id}
                id={item.uuid}
                name={item.name}
                image={ "http://payzone.uz/" + item.image?.slice(22)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Games;
