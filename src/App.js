import { Navbar } from "./Components/UI/Navbar/Navbar";
import { Footer } from "./Components/UI/Footer/Footer";
import { Routes } from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
import chaticon from "./Components/assets/images/chaticon.png";
import { ChatIcon } from "helpers/Protected/icons";

Aos.init({
  once: true,
});

function App() {
  return (
    <div className="app">
      <Navbar />
      {Routes()}
      <Footer />
      <span className="chaticon">
         <ChatIcon/>
      </span>
    </div>
  );
}

export default App;
