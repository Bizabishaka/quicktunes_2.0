import { useState, useEffect } from "react";
import { searchSongs } from "./api/shazam";

function App() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light" // default to dark
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const results = await searchSongs(query);
      setSongs(results);
    } catch (err) {
      alert("Something went wrong. Check your API key or internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">🎧 QuickTunes</h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-2/3 rounded-l-lg bg-gray-700 text-white outline-none"
          placeholder="Search for a song or artist..."
        />
        <button
          type="submit"
          className="bg-purple-600 px-4 rounded-r-lg hover:bg-purple-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 ">
        {songs.map((s, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            {/* 🎨 Display coverart image */}
            <img
              src={s.track.images?.coverart}
              alt={`${s.track.title} cover`}
              className="rounded-lg mb-2 w-full h-48 object-cover"
            />

            {/* 🎵 Title + Artist */}
            <h2 className="text-lg font-semibold">{s.track.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {s.track.subtitle}
            </p>

            {/* 🔊 Preview audio if exists */}
            {s.track.hub?.actions?.[1]?.uri && (
              <audio
                controls
                className="mt-2 w-full"
                src={s.track.hub.actions[1].uri}
              />
            )}
          </div>
        ))}
      </div>

      
       
    </div>
  );
}

export default App;
