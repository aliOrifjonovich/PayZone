import React, { useState } from "react";
import styles from "./Profile.module.scss";
import { Button, Container } from "@mui/material";
import img from "../../Components/assets/images/profile.png";
import {
  CancelIcon,
  ChangeIconButton,
  PlusIcon,
  ProfileTabelRow,
} from "helpers/Protected/icons";
import { useTranslation } from "react-i18next";
import Modal from "Components/UI/Modal/Modal";
import img2 from "../../Components/assets/images/ucprofile.png";
import paymentCArd1 from "../../Components/assets/images/HUMO.png";
import paymentCArd2 from "../../Components/assets/images/visa.png";
import paymentCArd3 from "../../Components/assets/images/MASTERCARD.png";
import paymentCArd4 from "../../Components/assets/images/UZCARD.png";
import paymentCArd5 from "../../Components/assets/images/payment.png"
import { useForm } from "react-hook-form";

const data = [
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
  {
    game: "Pubg Mobile",
    product: img2,
    quantity: 1900,
    price: "12,500",
    date: "13 August 2024",
    card: "1234 5678 9000 0000",
  },
];

const paymentcards = [
  { id: 1, value: "visa", img: paymentCArd1 },
  { id: 1, value: "visa", img: paymentCArd2 },
  { id: 1, value: "visa", img: paymentCArd3 },
  { id: 1, value: "visa", img: paymentCArd4 },
  { id: 1, value: "visa", img: paymentCArd5 },
];

const Profile = () => {
  // const width700 = useMediaQuery("(max-width: 700px)");
  const [openModal, setOpenModal] = useState(false);
  const [openAddCardModal, setOpenAddCardModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation("common");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { register: registerCard, handleSubmit: handleCardSubmit, formState: { errors: cardErrors } } = useForm();

  const handleProfileImageSubmit = (data) => {
    // Handle form submission logic here
  };

  const handleAddCardSubmit = (data) => {
    // Handle card addition logic here
  };
  const handleClose = () => {
    setOpenModal(false);
    setOpenAddCardModal(false);
  };

  return (
    <>
      <div className={styles.profile}>
        <span className={styles.shadow}></span>
        <Container>
          <div className={styles.profile_wrapper}>
            <div className={styles.info}>
              <h1 className={styles.title}>{t("My Info")}</h1>
              <div className={styles.myInfo}>
                <div className={styles.img_wrapper}>
                  <img src={img} alt="profile" />
                  <div className={styles.btn_wrapper}>
                    <button
                      variant="contained"
                      onMouseEnter={() => setHoveredIndex(0)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setOpenModal(true)}
                    >
                      <ChangeIconButton
                        fill={hoveredIndex === 0 ? "#00d44a" : "#102838"}
                      />
                    </button>
                  </div>
                </div>

                <div className={styles.myInfo_content}>
                  <form action="">
                    <div className={styles.inputs}>
                      <div className={styles.input}>
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className={styles.input}>
                        <input type="email" placeholder="E-mail" />
                      </div>
                      <div className={styles.input}>
                        <input type="number" placeholder="Phone Number" />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth={true}
                      sx={{ borderRadius: "10px", fontSize: "20px" }}
                    >
                      {t("Edit Profile")}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            <div className={styles.payments}>
              <h1 style={{ textAlign: "center" }}>{t("My payments")}</h1>

              <table className={styles.table}>
                <tr className={styles.tableHeader}>
                  <th>Game</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Card</th>
                </tr>

                {data?.map((item, index) => (
                  <tr
                    key={index}
                    className={styles.tableBody}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <td>{item.game}</td>
                    <td>
                      <div className={styles.product_img}>
                        <img src={item.product} alt="product" />
                      </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.date}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>{item.card}</p>
                      <div className={styles.icon}>
                        <ProfileTabelRow
                          fill={hoveredIndex === index ? "#00d44a" : "#fff"}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className={styles.payment_card}>
              <h1 className={styles.title}>{t("My payment methods")}</h1>
              <div className={styles.card_wrapper}>

                <div
                  className={styles.add_card}
                  onClick={() => setOpenAddCardModal(true)}
                >
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Modal open={openModal} handleClose={handleClose}>
        <div className={styles.login_wrapper}>
          <h1 className={styles.title}>{t("Upload Your Image")}</h1>
          <span
            className={styles.cancelIcon}
            onClick={() => setOpenModal(false)}
          >
            <CancelIcon />
          </span>

          <form action="">
            <div className={styles.inputs}>
              <div className={styles.input}>
                <input type="file" placeholder="Add image" />
              </div>
            </div>

            <Button
              variant="contained"
              fullWidth={true}
              sx={{ borderRadius: "10px", fontSize: "20px" }}
            >
              {t("Change")}
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openAddCardModal} handleClose={handleClose}>
        <div className={styles.cards_wrapper}>
          <h1 className={styles.title}>{t("Add Payment Method")}</h1>
          <span
            className={styles.cancelIcon}
            onClick={handleClose}
          >
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
                <input type="checkbox"  value='Yes' />
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

export default Profile;
