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
    <div className="">
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <AppRoutes />
    </Layout>
    </div>
    
  );
}

export default App;