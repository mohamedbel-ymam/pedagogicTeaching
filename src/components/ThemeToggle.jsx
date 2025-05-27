import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 
import { useThemeStore } from '../stores/themeStore';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      
      className="p-2 rounded-lg bg-amber-500 text-white dark:bg-teal-300 dark:text-gray-900 hover:bg-gray-300 dark:hover:bg-teal-200 transition-colors"
    >
      {darkMode ? (
        <SunIcon className=" h-5 w-5 text-yellow-200" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  );
}