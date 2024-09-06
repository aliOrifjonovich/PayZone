import { Navbar } from "./Components/UI/Navbar/Navbar";
import { Footer } from "./Components/UI/Footer/Footer";
import { Routes } from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  once: true,
});

function App() {
  return (
    <>
      <Navbar />
      {Routes()}
      <Footer />
    </>
  );
}

export default App;
