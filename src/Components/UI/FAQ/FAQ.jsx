import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import { useTranslation } from "react-i18next";
import { FAQMinusIcon, FAQPlusIcon } from "helpers/Protected/icons";

const data = [
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
  {
    question: "Nega aynan PayZone ni tanlashim kerak? ",
    answer:
      "O'yin bozorini tanlab, siz o'z ishtiyoqingizni munosib martaba yo'li bilan birlashtirib, moliyaviy mukofotlar va shaxsiy qoniqishni taklif qilishingiz mumkin.",
  },
];

const FAQ = () => {
  const { t } = useTranslation("common");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h1 className="title" id="#">{t("FAQ")}</h1>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          {data?.slice(0, 5).map((item, i) => (
            <Accordion
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              sx={{ padding: "10px", background: "none !important",  borderWidth: "0 0 3px 0",
                borderStyle:" solid",
                borderImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 1.04%, rgba(0, 212, 74, 0.6) 48.94%, rgba(255, 255, 255, 0) 100%)",
                borderImageSlice: "0 0 1 0",
                width: "100%",}}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${i}` ? <FAQMinusIcon /> : <FAQPlusIcon />
                }
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
                sx={{display:"flex", gap:"20px"}}
              >
                <Typography
                  sx={{ width: "100%", flexShrink: 0, fontSize: "1.2rem" }}
                  className={styles.question}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "19px" }} className={styles.answer}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
