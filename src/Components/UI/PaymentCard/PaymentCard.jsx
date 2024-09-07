import React, { useState } from "react";
import styles from "./PaymentCard.module.scss";
import "react-credit-cards/es/styles-compiled.css";
import { useTranslation } from "react-i18next";
import { CancelIcon, PlusIcon } from "helpers/Protected/icons";
import { Button, Checkbox } from "@mui/material";
import Cards from "react-credit-cards";

import paymentCArd1 from "../../assets/images/HUMO.png";
import paymentCArd2 from "../../assets/images/visa.png";
import paymentCArd3 from "../../assets/images/MASTERCARD.png";
import paymentCArd4 from "../../assets/images/UZCARD.png";
import paymentCArd5 from "../../assets/images/payment.png";
import Modal from "../Modal/Modal";

const paymentcards = [
  { id: 1, value: "visa", img: paymentCArd1 },
  { id: 1, value: "visa", img: paymentCArd2 },
  { id: 1, value: "visa", img: paymentCArd3 },
  { id: 1, value: "visa", img: paymentCArd4 },
  { id: 1, value: "visa", img: paymentCArd5 },
];

const fakeCards = [
  {number:"4263982640269299", name:"Javlon", expiry:"02/2026", cvc:"837"},
  {number:"5425233430109903", name:"Javlon", expiry:"04/2026", cvc:"837" },
  {number:"6250941006528599", name:"Javlon", expiry:"06/2026", cvc:"837" },
  {number:"60115564485789458", name:"Javlon", expiry:"12/2026", cvc:"837" },
  {number:"9860030172443753", name:"Javlon", expiry:"08/26", cvc:"837" },


]

const PaymentCard = () => {
  const { t } = useTranslation("common");
  const [openAddCardModal, setOpenAddCardModal] = useState(false);
  // const [state, setState] = useState({
  //   number: "",
  //   expiry: "",
  //   cvc: "",
  //   name: "",
  //   focus: "",
  // });

  const handleClose = () => {
    setOpenAddCardModal(false);
  };

  return (
    <>
      <div className={styles.payment_card}>
        <h1 className={styles.title}>{t("My payment methods")}</h1>
        <div className={styles.card_wrapper}>
          {fakeCards?.map((item, i)=>(
          <Cards
            number={item.number}
            name={item.name}
            expiry={item.expiry}
            cvc={item.cvc}
            issuer={item.issuer}
          />
          ))}
          <div
            className={styles.add_card}
            onClick={() => setOpenAddCardModal(true)}
          >
            <PlusIcon />
          </div>
        </div>
      </div>

      <Modal open={openAddCardModal} handleClose={handleClose}>
        <div className={styles.cards_wrapper}>
          <h1 className={styles.title}>{t("Add Payment Method")}</h1>
          <span className={styles.cancelIcon} onClick={handleClose}>
            <CancelIcon />
          </span>

          <form action="">
            <div className={styles.inputs}>
              <div className={styles.payment_type}>
                <h1 className={styles.payment_type_title}>
                  {t("Choose payment type")}
                </h1>

                <div className={styles.payment_type_cards}>
                  {paymentcards?.map((item) => (
                    <div className={styles.radioInputs}>
                      <input
                        type="radio"
                        id={item.value}
                        name="card"
                        value={item.value}
                      />
                      <label for={item.value}>
                        <img src={item.img} alt="card_img" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.input}>
                <label>{t("Card Number")}</label>
                <input type="number" placeholder="Enter your card number" />
              </div>

              <div className={`${styles.input} ${styles.input2}`}>
                <div className={styles.input2_input}>
                  <label>{t("Expiration Date")} </label>
                  <input type="date" placeholder="MM/YY" />
                </div>
                <div className={styles.input2_input}>
                  <label>{t("CVV")} </label>
                  <input type="number" placeholder="xxx" />
                </div>
              </div>

              <div className={styles.input}>
                <label>{t("Name of Card")}</label>
                <input type="text" placeholder="Enter name of the card" />
              </div>

              <div className={styles.input}>
                <label>{t("Name of Card")}</label>
                <input type="text" placeholder="Enter name of the card" />
              </div>

              <div className={styles.agreement}>
                <Checkbox
                  sx={{
                    color: "#00d44a",
                    "&.Mui-checked": {
                      color: "#00d44a",
                    },
                  }}
                />
                <p>{t("Remember this card")}</p>
              </div>
            </div>

            <Button
              variant="contained"
              fullWidth={true}
              sx={{ borderRadius: "10px", fontSize: "20px" }}
            >
              {t("Add this payment")}
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PaymentCard;
