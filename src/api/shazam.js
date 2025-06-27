export async function searchSongs(query) {
  const url = `https://shazam-core.p.rapidapi.com/v1/search/multi?query=${encodeURIComponent(query)}&search_type=SONGS`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f6b0076f9bmsha856d9c7e49319cp19f37djsn5cdd93801cde',
      'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log('🎵 Real Shazam data:', data);

    // Check correct path
    return data.tracks?.hits || [];
  } catch (err) {
    console.error('❌ Fetch error:', err);
    return [];
  }
}
