import React, { useState } from "react";
import styles from "./profile.module.scss";
import img from "../../assets/images/profile.png";
import { CancelIcon, ChangeIconButton } from "helpers/Protected/icons";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import PhoneInput from "react-phone-number-input";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useForm } from "react-hook-form";

const newTheme = (theme) =>
  createTheme({
    ...theme,
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: "#bbdefb",
            borderRadius: "7px",
            border: "0px solid #00122a",
            backgroundColor: "transparent",
          },
        },
      },
    },
  });

const ProfilePage = () => {
  const { t } = useTranslation("common");
  const [openModal, setOpenModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
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
                <div className={styles.inputs_wrapper}>
                  <div className={styles.inputs_content}>
                    <label>{t("Firstname")}</label>
                    <div className={styles.input}>
                      <input type="text" placeholder={t("Firstname")} />
                    </div>
                  </div>

                  <div className={styles.inputs_content}>
                    <label>{t("Lastname")}</label>
                    <div className={styles.input}>
                      <input type="text" placeholder={t("Lastname")} />
                    </div>
                  </div>
                </div>

                <div className={styles.inputs_wrapper}>
                  <div className={styles.inputs_content}>
                    <label>{t("DateofBirth")}</label>
                    <div className={`${styles.input} ${styles.inputFocus}`}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <ThemeProvider theme={newTheme}>
                          <DatePicker
                            defaultValue={dayjs("2024-09-17")}
                            sx={{ width: "100%" }}
                            orientation="portrait"
                            slotProps={{
                              openPickerButton: {
                                color: "primary",
                              },
                              layout: {
                                sx: {
                                  color: "#fff",
                                  border: "2px solid #00d44a",
                                  backgroundColor: "#00122a",
                                  borderRadius: "10px",
                                },
                              },
                            }}
                          />
                        </ThemeProvider>
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className={styles.inputs_content}>
                    <label>{t("Gender")}</label>
                    <div className={styles.inputs_content_radio}>
                      <div
                        className={`${styles.radioInputs} ${
                          selectedGender === "male" ? styles.activeRadio : ""
                        }`}
                      >
                        <label
                          htmlFor="male"
                          className={
                            selectedGender === "male" ? styles.activeLabel : ""
                          }
                        >
                          {t("Male")}
                        </label>

                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={selectedGender === "male"}
                          onChange={handleGenderChange}
                        />
                      </div>

                      <div
                        className={`${styles.radioInputs} ${
                          selectedGender === "female" ? styles.activeRadio : ""
                        }`}
                      >
                        <label
                          htmlFor="female"
                          className={
                            selectedGender === "female"
                              ? styles.activeLabel
                              : ""
                          }
                        >
                          {t("Female")}
                        </label>

                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={selectedGender === "female"}
                          onChange={handleGenderChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.inputs_wrapper}>
                  <div className={styles.inputs_content}>
                    <label>{t("E-mail")}</label>
                    <div className={styles.input}>
                      <input type="email" placeholder={t("E-mail")} />
                    </div>
                  </div>

                  <div className={styles.inputs_content}>
                    <label>{t("Phonenumber")}</label>
                    <div className={styles.input}>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            placeholder={t("Phonenumber")}
                            defaultCountry="UZ"
                            // style={errors.phoneNumber ? { borderColor: "#F76659" } : {}}
                            className="profilePhone"
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.btn}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    fontSize: "20px",
                    width: "max-content",
                    padding: "12px 48px 12px 48px",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    lineHeight: "17.7px",
                  }}
                >
                  {t("Save")}
                </Button>
              </div>
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
