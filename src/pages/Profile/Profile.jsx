import React from "react";
import styles from "./Profile.module.scss";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Paper,
} from "@mui/material";
import img from "../../Components/assets/images/profile.png";
import { t } from "i18next";

// function createData(game, coin, payment) {
//   return { game, coin, payment };
// }

// const rows = [
//   createData("PUBG Mobile", 1000000, 6.0),
//   createData("PUBG Mobile", 237, 9.0),
//   createData("PUBG Mobile", 262, 16.0),
//   createData("PUBG Mobile", 305, 3.7),
//   createData("PUBG Mobile", 356, 16.0),
// ];

const data = [
  { game: "Pubg Mobile", coin: 1900, payment: "12,500" },
  { game: "Pubg Mobile", coin: 1900, payment: "12,500" },
  { game: "Pubg Mobile", coin: 1900, payment: "12,500" },
  { game: "Pubg Mobile", coin: 1400, payment: "12,500" },
  { game: "Pubg Mobile", coin: 10, payment: "12,500" },
  { game: "Pubg Mobile", coin: 20, payment: "12,500" },
];

const Profile = () => {
  const width700 = useMediaQuery("(max-width: 700px)");

  return (
    <div className={styles.profile}>
      <span className={styles.shadow}></span>
      <Container>
        <div className={styles.profile_wrapper}>
          <div className={styles.myInfo}>
            <h1 className={styles.title}>{t("My Info")}</h1>
            <div className={styles.img_wrapper}>
              <img src={img} alt="profile image" />
            </div>
            <div className={styles.myInfo_content}>
              <h1>Arlene McCoy</h1>
              <p>arlenecoy@gmail.com</p>
            </div>
            <Button
              variant="contained"
              sx={{
                background: "#EB4343",
                color: "#fff",
                borderColor: "transparent !important",
              }}
            >
              {t("Logout")}
            </Button>
          </div>

          <div className={styles.payments}>
            <h1>{t("My payments")}</h1>
            {/* <TableContainer component={Paper}>
              <Table
                sx={width700 ? { maxWidth: 650 } : { minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow className={styles.tablerow}>
                    <TableCell className={styles.tablerow_content}>
                      {t("game")}
                    </TableCell>
                    <TableCell
                      className={styles.tablerow_content}
                      align="center"
                    >
                      {t("coins")}
                    </TableCell>
                    <TableCell
                      className={styles.tablerow_content}
                      align="center"
                    >
                      {t("payment")}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.gamers}
                      sx={{
                        "&:firs-child td, &:second-child th": {
                          border: "1px solid red",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          position: "relative",
                        }}
                      >
                        <div className={styles.gamerName}>
                          <h1>{row.game}</h1>
                        </div>
                      </TableCell>
                      <TableCell align="center" sx={{}}>
                        <span className={styles.payment}>{row.coin}</span>
                      </TableCell>
                      <TableCell align="center">
                        <span className={styles.img_wrapper}>
                          UZS
                          {row.payment}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}

            <table className={styles.table}>
              <tr className={styles.tableHeader}>
                <th>Game</th>
                <th>Coin</th>
                <th>Payment</th>
              </tr>

              {data?.map((item, index) => (
                <tr key={index} className={styles.tableBody}>
                  <td>{item.game}</td>
                  <td>{item.coin}</td>
                  <td>{item.payment}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
