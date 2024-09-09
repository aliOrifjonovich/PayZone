import { Navbar } from "./Components/UI/Navbar/Navbar";
import { Footer } from "./Components/UI/Footer/Footer";
import { Routes } from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { ChatIcon } from "helpers/Protected/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "Components/UI/Modal/Modal";
import ClientChat from "Components/UI/ClientChat/ClientChat";

Aos.init({
  once: true,
});

function App() {
  const { i18n } = useTranslation("common");
  const [openModalChat, setOpenModalChat] = useState(false);

  useEffect(() => {
    if (i18n.language === "en-US") {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const handleCloseChat = () => setOpenModalChat(false);

  return (
   <>
    <div className="app">
      <Navbar />
      {Routes()}
      <Footer />
      <span className="chaticon"onClick={() => setOpenModalChat(true)}>
        <ChatIcon />
      </span>
    </div>

    <Modal open={openModalChat} handleClose={handleCloseChat}>
      <ClientChat/>
    </Modal>
   </>

  );
}

export default App;
