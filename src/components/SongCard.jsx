export default function SongCard({ track, onPlay }) {
  const song = track.track;

  return (
    <div className="bg-white dark:bg-gray-900 w-[200px] sm:w-[220px] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-3 text-center text-black dark:text-white">
      
      {/* 🎨 Cover Art */}
      <img
        src={song.images.coverart}
        alt={song.title}
        className="w-full h-36 object-cover rounded-sm mb-2 gap-6 px-4"
      />

      {/* 🎵 Song Info */}
      <h3 className="text-base font-semibold truncate">{song.title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{song.subtitle}</p>

      {/* ▶️ Play Button */}
      <button
        onClick={() => onPlay(song)}
        className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded w-full"
      >
        ▶️ Play
      </button>
    </div>
  );
}
