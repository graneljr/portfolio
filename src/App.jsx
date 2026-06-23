import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { globalThemeStore } from "./zustand/globalThemeStore";
import TechStack from "./pages/TechStack";
import { Copyright } from "lucide-react";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  const dark = globalThemeStore((state) => state.isDarkMode);
  return (
    <div
      className={`w-full min-h-screen flex flex-col dark:bg-black dark:text-white transition-all duration-300 ease-in-out ${dark ? "dark" : ""}`}
    >

      <main className="flex-grow flex flex-col items-center pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <footer className="py-10 flex gap-1 justify-center items-center text-sm text-muted dark:text-white/45">
        © {new Date().getFullYear()} Armando Granel Jr · Built with React &
        Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
