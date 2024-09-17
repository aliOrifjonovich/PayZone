import React, { useState } from "react";
import styles from "./SingleGame.module.scss";
import { Box, Container, Grid } from "@mui/material";
import SIngleCardGame from "Components/UI/SingleCardGame/SIngleCardGame";
import SingleCardPacks from "Components/UI/SingleCardPacks/SingleCardPacks";
import SingleCardOffer from "Components/UI/SingleCardOffer/SingleCardOffer";
import { useParams } from "react-router-dom";
import { useGetAllProducts } from "services/games.service";
import { priceConvert } from "utils/priceConvert";
import PriceConvert from "Components/UI/PriceConverter/PriceConvert";

const SingleGame = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("uzs");

  const { data: allProducts } = useGetAllProducts(id);

  const handleClose = () => setOpenModal(false);

  return (
    <div className={styles.singleGame}>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        {allProducts?.services?.map((service, index) => (
          <Box sx={{ flexGrow: 1 }}>
            <div className={styles.nav_item}>
              <h1 className="title">{service.title}</h1>

              {index === 0 && (
                <PriceConvert
                  selectedCurrency={selectedCurrency}
                  setSelectedCurrency={setSelectedCurrency}
                />
              )}
            </div>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {service?.products?.map((item, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>                  
                  {item.card_type === "green" ||
                  item.card_type === "gold" ||
                  item.card_type === "light" ? (
                    <SIngleCardGame
                      key={item.uuid}
                      id={item.uuid}
                      title={item.title}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://api.payzone.uz/" + item.image?.slice(24)}
                      cardType={item.card_type}
                      ask_text={item.ask_text}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      handleClose={handleClose}
                    />
                  ) : item.card_type === "big_green" ||
                    item.card_type === "big_green_title" ? (
                    <SingleCardPacks
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://api.payzone.uz/" + item.image?.slice(24)}
                      ask_text={item.ask_text}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      handleClose={handleClose}
                    />
                  ) : item.card_type === "big_gold" ? (
                    <SingleCardOffer
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://payzone.uz/" + item.image?.slice(24)}
                      ask_text={item.ask_text}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      handleClose={handleClose}
                    />
                  ) : (
                    ""
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default SingleGame;
