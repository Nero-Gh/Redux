import Form from "./components/Form";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="wrapper" id={theme}>
          <Navbar />
          <div className="App">
            <Form />
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
