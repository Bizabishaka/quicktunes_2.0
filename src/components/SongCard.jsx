import React from 'react';

export default function SongCards({ songs, onPlay }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {songs.map((song, idx) => (
        <SongCard key={idx} track={song} onPlay={onPlay} />
      ))}
    </div>
  );
}

function SongCard({ track, onPlay }) {
  const song = track.track || track; // Handle both structures

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]">
      {/* Cover Art */}
      <div className="relative">
        <img
          src={song.images?.coverart}
          alt={`${song.title} cover`}
          className="w-full h-48 object-cover"
        />
        
        {/* Play Button Overlay */}
        <button
          onClick={() => onPlay(song)}
          className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Play song"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Song Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold dark:text-white truncate">{song.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-3">
          {song.subtitle}
        </p>

        {/* Audio Player */}
        {song.hub?.actions?.[1]?.uri && (
          <audio
            controls
            className="mt-2 w-full h-8"
            src={song.hub.actions[1].uri}
          />
        )}
      </div>
    </div>
  );
}