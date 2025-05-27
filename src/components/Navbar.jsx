import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Méthodologie', path: '/methodology' },
    { name: 'Ressources', path: '/resources' },
  ];

  return (
    
    <motion.nav 
      className="bg-blue-500 dark:bg-gray-800 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
         <img src="src\assets\Plan de travail 1 (1).png" alt="" />
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold dark:text-gray-100 text-white">BEL-YMAM MOHAMED</span>
          </div>
          <div className="flex-shrink-0 hidden md:flex items-center">
            <span className="text-2xl font-bold dark:text-gray-100 text-white">Etablissement TAKWA</span>
          </div>

          {/* Liens Desktop */}
          <div className="hidden md:flex items-center space-x-8 ">
            {links.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="text-teal-300 text-bold dark:text-gray-300 hover:text-white font-bold hover:text-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
          
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className=" h-6 w-6 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 dark:text-white" />
              )}
              
            </button>
          </div>
        </div>
      </div>
      {/* Menu Mobile Ouvert */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-800  "
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 ">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}