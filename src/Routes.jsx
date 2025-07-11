import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrendingSongs from './pages/TrendingSongs';
import TopArtists from './pages/TopArtists';
import Favorites from './pages/Favorites';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<TrendingSongs />} />
      <Route path="/artists" element={<TopArtists />} />
      <Route path="/favorites" element={<Favorites />} />
      
    </Routes>
  );
}