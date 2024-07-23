import React from "react";
import { Button, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Players.module.scss";
import { t } from "i18next";
import gamerImage from "../../assets/images/gamerimg.png";
import { PaymentIcon } from "helpers/Protected/icons";

function createData(id, gamers, payment, game) {
  return { id, gamers, payment, game };
}

const rows = [
  createData(1231, "Frozen yoghurt", 159, 6.0),
  createData(1231, "Ice cream sandwich", 237, 9.0),
  createData(1231, "Eclair", 262, 16.0),
  createData(1231, "Cupcake", 305, 3.7),
  createData(1231, "Gingerbread", 356, 16.0),
];

const Players = () => {
  return (
    <Container>
      <div className={styles.players}>
        <div className={styles.buttons}>
          <Button variant="outlined">{t("latest")}</Button>

          <Button variant="contained">{t("top players")}</Button>
        </div>

        <div className={styles.players_wrapper}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className={styles.tablerow}>
                  <TableCell className={styles.tablerow_content}>
                    {t("gamers")}
                  </TableCell>
                  <TableCell className={styles.tablerow_content} align="left">
                    {t("payment")}
                  </TableCell>
                  <TableCell className={styles.tablerow_content} align="center">
                    {t("game")}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.gamers}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <span className={styles.img_wrapper}>
                        <img src={gamerImage} alt="gamer-image" />
                        {/* <span>A</span> */}
                      </span>
                      <div className={styles.gamerName}>
                        <h1>{row.gamers}</h1>
                        <span>{`#${row.id}`}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                      }}
                    >
                     <span className={styles.payment}> <PaymentIcon /> {row.payment}</span>
                    </TableCell>
                    <TableCell align="right">
                    <span className={styles.img_wrapper}>
                        <img src={gamerImage} alt="gamer-image" />
                        {/* <span>A</span> */}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Container>
  );
};

export default Players;
