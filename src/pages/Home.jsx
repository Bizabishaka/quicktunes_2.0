import { useState } from 'react';
import { searchSongs } from '../api/shazam';

export default function Home() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

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
   <div className="lg:ml-64 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-amber-100">🎧 QuickTunes</h1>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-3 rounded-l-lg bg-white dark:bg-gray-700 text-black dark:text-white outline-none border border-gray-300 dark:border-gray-600"
              placeholder="Search for a song or artist..."
            />
            <button
              type="submit"
              className="bg-purple-600 px-6 rounded-r-lg hover:bg-purple-700 text-white"
            >
              Search
            </button>
          </form>
        </div>

        {loading && <p className="text-center dark:text-white">Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((s, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={s.track.images?.coverart}
                alt={`${s.track.title} cover`}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white truncate">{s.track.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {s.track.subtitle}
                </p>

                {s.track.hub?.actions?.[1]?.uri && (
                  <audio
                    controls
                    className="mt-3 w-full"
                    src={s.track.hub.actions[1].uri}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}