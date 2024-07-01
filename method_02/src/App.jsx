import { useState , useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Cards from "./components/Cards";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Cards />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
