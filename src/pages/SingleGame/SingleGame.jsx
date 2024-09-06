import React, { useEffect, useState } from "react";
import styles from "./SingleGame.module.scss";
import { Box, Button, Container, Grid } from "@mui/material";
import fakedata from "fakedata";
import { t } from "i18next";
import SIngleCardGame from "Components/UI/SingleCardGame/SIngleCardGame";
import SingleCardPacks from "Components/UI/SingleCardPacks/SingleCardPacks";
import Modal from "Components/UI/Modal/Modal";
import {
  CancelIcon,
  Exclamation,
  LanguageRowIcon,
  Line,
  PriceIcon,
} from "helpers/Protected/icons";
import img2 from "../../Components/assets/images/1.png";
import SingleCardOffer from "Components/UI/SingleCardOffer/SingleCardOffer";
import { useParams } from "react-router-dom";
import { useGetAllProducts } from "services/games.service";
import { priceConvert } from "utils/priceConvert";
import PriceConvert from "Components/UI/PriceConverter/PriceConvert";

const SingleGame = () => {
  // const data = fakedata();
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
                  {item.card_type === "green" ? (
                    <SIngleCardGame
                      key={item.uuid}
                      id={item.uuid}
                      title={item.title}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://payzone.uz/" + item.image?.slice(22)}
                      cardType={item.card_type}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  ) : item.card_type === "big_green" ? (
                    <SingleCardPacks
                      key={item.id}
                      id={item.id}
                      count={item.count}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://payzone.uz/" + item.image?.slice(22)}
                      setOpenModal={setOpenModal}
                    />
                  ) : item.card_type === "big_gold" ? (
                    <SingleCardOffer
                      key={item.id}
                      id={item.id}
                      count={item.count}
                      price={priceConvert(item, "price_str", selectedCurrency)}
                      img={"http://payzone.uz/" + item.image?.slice(22)}
                      setOpenModal={setOpenModal}
                    />
                  ) : (
                    ""
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* <Box sx={{ flexGrow: 1 }}>
          <h1 className="title">{t("Minecraft Packs")}</h1>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data?.root1.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <SingleCardPacks
                  key={item.id}
                  id={item.id}
                  count={item.count}
                  price={item.price}
                  img={item.img}
                  setOpenModal={setOpenModal}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <h1 className="title">{t("Minecraft Packs")}</h1>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data?.root1.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <SingleCardOffer
                  key={item.id}
                  id={item.id}
                  count={item.count}
                  price={item.price}
                  img={item.img}
                  setOpenModal={setOpenModal}
                />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>

      <Modal open={openModal} handleClose={handleClose}>
        <div className={styles.login_wrapper}>
          <h1 className={styles.title}>ID raqamingizni kiriting</h1>
          <span
            className={styles.cancelIcon}
            onClick={() => setOpenModal(false)}
          >
            <CancelIcon />
          </span>

          <form action="">
            <div className={styles.inputs}>
              <div className={styles.input}>
                <input type="text" placeholder="ID" />
              </div>
            </div>

            <Button
              variant="contained"
              sx={{ borderRadius: "10px", fontSize: "20px" }}
            >
              {t("Qabul qilish")}
            </Button>
          </form>

          <div className={styles.img_content}>
            <span className={styles.line}>
              <Line />
            </span>
            <div className={styles.guide}>
              <Exclamation />
              ID raqam profil qismida bo‘ladi
            </div>
            <div className={styles.img_wrapper}>
              <img src={img2} alt="guide" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleGame;
