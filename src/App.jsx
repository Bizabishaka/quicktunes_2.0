import { useState, useEffect } from "react";
import './context/dark.css';
import Layout from './components/Layout';
import AppRoutes from './Routes';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <AppRoutes />
    </Layout>
  );
}

export default App;