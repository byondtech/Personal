import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex max-w-4xl mx-auto px-4 items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full px-20 py-2 text-gray-800 dark:text-white
       drop-shadow-lg dark:drop-shadow-[0_15px_20px_rgba(255,255,255,0.2)] backdrop-blur-md  mt-8 sm:px-20 py-3 sm:w-full w-[90%]"> {/* Matches main content container */}
        
          {/* Navigation items container */}
          <div className="flex items-center space-x-6 -px-3 text-lg">
            <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        
      </div>
    </nav>
  );
}
