import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, darkMode, closeSidebar }) {
  const menuItems = [
    { name: 'Trending Songs', icon: '🎵', path: '/trending' },
    { name: 'Top Artists', icon: '👨‍🎤', path: '/artists' },
    { name: 'Favorites', icon: '❤️', path: '/favorites' },
    
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
    >
      <div className="flex flex-col h-full p-4">
        <h2 className="text-xl text-center font-bold mb-6 p-2 ">🎧</h2>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition ${
                      isActive 
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 QuickTunes
          </div>
        </div>
      </div>
    </aside>
  );
}