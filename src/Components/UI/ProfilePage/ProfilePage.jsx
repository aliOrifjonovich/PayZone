import React, { useState } from "react";
import styles from "./profile.module.scss";

// Temperary items
import img from "../../assets/images/profile.png";
import { CancelIcon, ChangeIconButton } from "helpers/Protected/icons";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import { Button } from "@mui/material";

const ProfilePage = () => {
  const { t } = useTranslation("common");
  const [openModal, setOpenModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
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
                  <label></label>
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
    </>
  );
};

export default ProfilePage;
