import "./App.css";
import { useRef } from "react";
import Hero from "./Components/Header/hero";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";

function App() {
  const historyRef = useRef(null);

  const scrollToHistorySection = () => {
    historyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Hero scrollToHistory={scrollToHistorySection} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
