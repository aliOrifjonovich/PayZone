import { Navbar } from "./Components/UI/Navbar/Navbar";
import { Footer } from "./Components/UI/Footer/Footer";
import { Routes } from "./routes";

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
