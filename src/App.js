import { Navbar } from "./Components/UI/Navbar/Navbar";
import { Footer } from "./Components/UI/Footer/Footer";
import { Routes } from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
// import ClientChat from "Components/UI/ClientChat/ClientChat";

Aos.init({
  once: true,
});

function App() {
  return (
    <div className="app">
      <Navbar />
      {Routes()}
      <Footer />
      {/* <span className="chaticon">
        <ClientChat />
      </span> */}
    </div>
  );
}

export default App;
