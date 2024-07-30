import { Container } from "@mui/material";
import styles from "./Nabvar.module.scss";
import Header from "../Header/Header";
import NavbarAssistens from "../NavbarAssistens/NavbarAssistens";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

export function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wrapper}>
          <Header />
          <NavbarAssistens />
        </div>
      </Container>
    </header>
  );
}
